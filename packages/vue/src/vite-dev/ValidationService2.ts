import { type ValidationElement } from "./validation-element";
import { ValidationResult } from "./validation-result";
import {
    type UntypedModelValueValidator,
    type UntypedValidator,
    type UntypedViewValueValidator,
    type ValidatorContext,
    type ValidatorTypeMapping,
    getValidatorByname,
} from "./validator-definition";
import "./validators";

/** @internal */
export const stateSymbol = Symbol("validation-state");

declare global {
    interface HTMLElement {
        [stateSymbol]: ValidationState<unknown, unknown>;
    }
}

/** @internal */
interface ValidationState<TValue, TModel> {
    getViewValue(): TValue | null | undefined;
    getModelValue(): TModel;
    parser(value: TValue): TModel;
    formatter(value: TModel): TValue;
    readonly validators: Array<[validator: UntypedValidator, config: unknown]>;
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

// @TODO direktiv
// @TODO typning av enableValidation
// @TODO en validator helt klar med config och allt

function validateViewValue<TValue, TModel>(
    element: HTMLElement,
    target: ValidationState<TValue, TModel>,
    value: TValue,
): { validator: string; code: string | undefined } | null {
    const validators = target.validators.filter(isViewValueValidator);
    for (const [validator, config] of validators) {
        const context: ValidatorContext<unknown> = { config, element };
        const result = validator.validateViewValue.call(context, value);
        if (!result.valid) {
            return { validator: validator.name, code: result.code };
        }
    }
    return null;
}

function validateModelValue<TValue, TModel>(
    element: HTMLElement,
    target: ValidationState<TValue, TModel>,
    value: TValue,
): { validator: string; code: string | undefined } | null {
    const validators = target.validators.filter(isModelValueValidator);
    for (const [validator, config] of validators) {
        const context: ValidatorContext<unknown> = { config, element };
        const result = validator.validateModelValue.call(context, value);
        if (!result.valid) {
            return { validator: validator.name, code: result.code };
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

export async function validateElement(
    element: HTMLElement,
): Promise<ValidationResult> {
    const { [stateSymbol]: target } = element;
    if (!target) {
        return { isValid: true, errors: [] };
    }

    // validering råa värden
    const viewValue = target.getViewValue();
    const viewValueError = validateViewValue(element, target, viewValue);
    if (viewValueError) {
        const message = `validator "${viewValueError.validator}" failed (view value)`;
        dispatchError(element, { message, viewValue });
        return { isValid: false, errors: [{ element, message }] };
    }

    // validering tolkade värden
    const modelValue = target.parser(viewValue);
    const modelValueError = validateModelValue(element, target, modelValue);
    if (modelValueError) {
        const message = `validator "${modelValueError.validator}" failed (model value)`;
        dispatchError(element, { message, viewValue, modelValue });
        return { isValid: false, errors: [{ element, message }] };
    }

    const formattedValue = target.formatter(modelValue);
    dispatchSuccess(element, { viewValue, modelValue, formattedValue });

    return { isValid: true, errors: [] };
}
