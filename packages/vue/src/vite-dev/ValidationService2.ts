import { getCandidates } from "./get-candidates";
import { type ValidationElement } from "./validation-element";
import { type ValidationResult } from "./validation-result";
import { type ValidationState } from "./validation-state";
import {
    type UntypedModelValueValidator,
    type UntypedValidator,
    type UntypedViewValueValidator,
    type ValidatorContext,
    type ValidatorTypeMapping,
    getValidatorByname,
} from "./validator-definition";
import "./validators";

interface ValidationError {
    name: string;
    code: string;
    message: string;
}

const stateSymbol = Symbol("validation-state");
let errorMessages: Record<string, string> = {};

declare global {
    interface HTMLElement {
        [stateSymbol]?: ValidationState<unknown, unknown>;
    }
}

function isViewValueValidator(
    value: [validator: UntypedValidator, config: unknown],
): value is [validator: UntypedViewValueValidator, config: unknown] {
    return Boolean(value[0].validateViewValue);
}

function isModelValueValidator(
    value: [validator: UntypedValidator, config: unknown],
): value is [validator: UntypedModelValueValidator, config: unknown] {
    return Boolean(value[0].validateModelValue);
}

export function enableValidation<TValue, TModel>(
    element: HTMLElement,
    target: ValidationElement<TValue, TModel>,
): void {
    element[stateSymbol] = {
        getViewValue: target.getViewValue,
        getModelValue: target.getModelValue,
        parser: target.parser ?? ((value) => value),
        formatter: target.formatter ?? ((value) => value),
        validators: [],
    };
    for (const event of target.event) {
        element.addEventListener(event, () => {
            internalValidate(element);
        });
    }
}

type Prettify<T> = {
    readonly [K in keyof T]: T[K];
} & {};

export function addValidatorsToElement(
    element: HTMLElement,
    config: {
        [K in keyof ValidatorTypeMapping]?: Prettify<
            {
                enabled?: boolean;
            } & ValidatorTypeMapping[K]["config"] extends never
                ? // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- asdf
                  {}
                : ValidatorTypeMapping[K]["config"]
        >;
    },
): void {
    const state = element[stateSymbol];
    if (!state) {
        throw new Error("element is not validatable");
    }
    for (const [name, v] of Object.entries(config)) {
        const validator = getValidatorByname(name) as UntypedValidator;
        state.validators.push([validator, v]);
    }
}

function createError(
    target: Pick<ValidationState<unknown, unknown>, "validators">,
    name: string,
    code: string,
): ValidationError {
    const validators = Object.values(target.validators).map((it) => it[0]);
    const candidates = getCandidates({ name, code }, validators, undefined);
    const key = candidates.find((it) => errorMessages[it]);
    const message = key ? errorMessages[key] : name;
    return { name, code, message };
}

// @TODO direktiv

function validateViewValue<TValue, TModel>(
    element: HTMLElement,
    target: ValidationState<TValue, TModel>,
    value: TValue,
): ValidationError | null {
    const validators = target.validators.filter(isViewValueValidator);
    for (const [validator, config] of validators) {
        const context: ValidatorContext<unknown> = { config, element };
        const result = validator.validateViewValue.call(context, value);
        if (!result.valid) {
            return createError(
                target,
                validator.name,
                result.code ?? "default",
            );
        }
    }
    return null;
}

function validateModelValue<TValue, TModel>(
    element: HTMLElement,
    target: ValidationState<TValue, TModel>,
    value: TValue,
): ValidationError | null {
    const validators = target.validators.filter(isModelValueValidator);
    for (const [validator, config] of validators) {
        const context: ValidatorContext<unknown> = { config, element };
        const result = validator.validateModelValue.call(context, value);
        if (!result.valid) {
            return createError(
                target,
                validator.name,
                result.code ?? "default",
            );
        }
    }
    return null;
}

function dispatchError(
    element: HTMLElement,
    data: {
        message: string;
        viewValue?: unknown;
        modelValue?: unknown;
        formattedValue?: unknown;
    },
): void {
    const event = new CustomEvent("foo", {
        detail: { isValid: false, ...data },
    });
    element.dispatchEvent(event);
}

function dispatchSuccess(
    element: HTMLElement,
    data: {
        viewValue: unknown;
        modelValue: unknown;
        formattedValue: unknown;
    },
): void {
    const event = new CustomEvent("foo", {
        detail: { isValid: true, ...data },
    });
    element.dispatchEvent(event);
}

/**
 * @internal
 * @param element - The element to validate
 * @returns
 */
export function internalValidate(element: HTMLElement): ValidationResult {
    const { [stateSymbol]: target } = element;
    if (!target) {
        return { isValid: true, errors: [] };
    }

    // validering råa värden
    const viewValue = target.getViewValue();
    const viewValueError = validateViewValue(element, target, viewValue);
    if (viewValueError) {
        const { message } = viewValueError;
        dispatchError(element, { message, viewValue });
        return { isValid: false, errors: [{ element, message }] };
    }

    // validering tolkade värden
    const modelValue = target.parser(viewValue);
    if (typeof modelValue !== "undefined") {
        const modelValueError = validateModelValue(element, target, modelValue);
        if (modelValueError) {
            const { message } = modelValueError;
            dispatchError(element, { message, viewValue, modelValue });
            return { isValid: false, errors: [{ element, message }] };
        }
    }

    const formattedValue = target.formatter(modelValue);
    dispatchSuccess(element, { viewValue, modelValue, formattedValue });

    return { isValid: true, errors: [] };
}

/**
 * @internal
 * @param element - The element to validate
 * @returns
 */
export async function validateElement(
    element: HTMLElement,
): Promise<ValidationResult> {
    return internalValidate(element);
}

/**
 * @public
 * @param texts - Updated error messages
 */
export function addErrorMessages(
    texts: Record<string, string>,
    { clear }: { clear?: boolean } = {},
): void {
    if (clear) {
        errorMessages = {};
    }
    errorMessages = { ...errorMessages, ...texts };
}
