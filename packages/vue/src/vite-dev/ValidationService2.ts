import { type ValidationElement } from "./validation-element";
import {
    type UntypedModelValueValidator,
    type UntypedValidator,
    type UntypedViewValueValidator,
    type ValidatorContext,
    type ValidatorTypeMapping,
    getValidatorByname
} from "./validator-definition";

/** @internal */
export const sym = Symbol("validation-target");

declare global {
    interface HTMLElement {
        [sym]: ValidationState<unknown, unknown>;
    }
}

interface ValidationResult {
    isValid: boolean;
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
    element[sym] = {
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
    const state = element[sym];
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
    const { [sym]: target } = element;
    if (!target) {
        return { isValid: true };
    }

    // @TODO eventnamn
    const event = new CustomEvent("foo", {
        detail: {
            isValid: false,
            viewValue: undefined as unknown,
            modelValue: undefined as unknown,
            formattedValue: undefined as unknown,
            message: undefined as string | undefined,
        },
    });

    // validering råa värden
    const viewValue = target.getViewValue();
    event.detail.viewValue = viewValue;
    const viewValueError = validateViewValue(element, target, viewValue);
    if (viewValueError) {
        const message = `validator "${viewValueError.validator}" failed (view value)`;
        dispatchError(element, { message, viewValue });
        return { isValid: false };
    }

    // validering tolkade värden
    const modelValue = target.parser(viewValue);
    event.detail.modelValue = modelValue;
    const modelValueError = validateModelValue(element, target, modelValue);
    if (modelValueError) {
        const message = `validator "${modelValueError.validator}" failed (model value)`;
        dispatchError(element, { message, viewValue, modelValue });
        return { isValid: false };
    }

    const formattedValue = target.formatter(modelValue);
    dispatchSuccess(element, { viewValue, modelValue, formattedValue });

    return { isValid: true };
}
