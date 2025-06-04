import {
    type ModelValueValidator,
    type ValidatorDefinition,
    type ViewValueValidator,
} from "./validator-definition";

/** @internal */
export const sym = Symbol("validation-target");

declare global {
    interface HTMLElement {
        [sym]: ValidationTarget<unknown, unknown>;
    }
}

interface ValidationResult {
    isValid: boolean;
}

/** @internal */
export interface ValidationTarget<TValue, TModel> {
    getViewValue(): TValue | null | undefined;
    getModelValue(): TModel;
    parser(value: TValue): TModel;
    formatter(value: TModel): TValue;
    readonly validators: Array<ValidatorDefinition<string, TValue, TModel>>;
}

function isViewValueValidator<K extends string, TValue, TModel>(
    value: ValidatorDefinition<K, TValue, TModel>,
): value is ViewValueValidator<K, TValue> {
    return value.type === "raw";
}

function isModelValueValidator<K extends string, TValue, TModel>(
    value: ValidatorDefinition<K, TValue, TModel>,
): value is ModelValueValidator<K, TModel> {
    return value.type === "parsed";
}

export function enableValidation(
    element: HTMLElement,
    target: ValidationTarget<unknown, unknown>,
): void {
    element[sym] = target;
}

export async function validateElement(
    element: HTMLElement,
): Promise<ValidationResult> {
    const { [sym]: target } = element;
    if (!target) {
        return { isValid: true };
    }

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
    for (const validator of target.validators.filter(isViewValueValidator)) {
        const result = validator.validate(viewValue);
        if (!result.valid) {
            event.detail.message = `validator "${validator.name}" failed (view value)`;
            element.dispatchEvent(event);
            return { isValid: false };
        }
    }

    if (!viewValue) {
        event.detail.isValid = true;
        element.dispatchEvent(event);
        return { isValid: true };
    }

    // validering tolkade värden
    const modelValue = target.parser(viewValue);
    event.detail.modelValue = modelValue;
    for (const validator of target.validators.filter(isModelValueValidator)) {
        const result = validator.validate(modelValue);
        if (!result.valid) {
            event.detail.message = `validator "${validator.name}" failed (model value)`;
            element.dispatchEvent(event);
            return { isValid: false };
        }
    }

    const formattedValue = target.formatter(modelValue);
    event.detail.formattedValue = formattedValue;

    event.detail.isValid = true;
    element.dispatchEvent(event);

    return { isValid: true };
}
