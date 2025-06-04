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
    console.log('enable validation on', element);
    element[sym] = target;
}

export function validateElement<TValue, TModel>(element: {
    [sym]?: ValidationTarget<TValue, TModel>;
}): boolean {
    const { [sym]: target } = element;
    if (!target) {
        console.log('no target in element', element);
        return true;
    }

    const viewValue = target.getViewValue();
    for (const validator of target.validators.filter(isViewValueValidator)) {
        const result = validator.validate(viewValue);
        if (!result.valid) {
            return false;
        }
    }

    if (!viewValue) {
        return true;
    }

    const modelValue = target.parser(viewValue);
    for (const validator of target.validators.filter(isModelValueValidator)) {
        const result = validator.validate(modelValue);
        if (!result.valid) {
            return false;
        }
    }

    return true;
}
