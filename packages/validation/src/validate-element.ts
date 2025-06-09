import { getErrorMessage } from "./error-messages";
import { componentStateSymbol, formStateSymbol } from "./state-symbol";
import {
    type UntypedModelValueValidator,
    type UntypedValidator,
    type UntypedViewValueValidator,
} from "./untyped-validator";
import { type UpdateEventDetails } from "./update-event";
import { type ValidationResult } from "./validation-result";
import { type ValidationState } from "./validation-state";
import { type UntypedValidatorContext } from "./validator-context";

interface ValidationError {
    name: string;
    code: string;
    message: string;
}

const eventName = "validation:update";

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

function createError(
    target: Pick<ValidationState<unknown, unknown>, "validators">,
    name: string,
    code: string,
): ValidationError {
    const message = getErrorMessage(target, name, code);
    return { name, code, message };
}

function validateViewValue<TValue, TModel>(
    element: HTMLElement,
    target: ValidationState<TValue, TModel>,
    value: TValue,
): ValidationError | null {
    const validators = target.validators.filter(isViewValueValidator);
    for (const [validator, config] of validators) {
        const context: UntypedValidatorContext = { config, element };
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
        const context: UntypedValidatorContext = { config, element };
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
    data: Omit<UpdateEventDetails, "isValid">,
): void {
    const event = new CustomEvent<UpdateEventDetails>(eventName, {
        detail: { isValid: false, ...data },
    });
    element.dispatchEvent(event);
}

function dispatchSuccess(
    element: HTMLElement,
    data: Omit<UpdateEventDetails, "isValid" | "message">,
): void {
    const event = new CustomEvent<UpdateEventDetails>(eventName, {
        detail: { isValid: true, message: "", ...data },
    });
    element.dispatchEvent(event);
}

/**
 * @internal
 * @param element - The element to validate
 * @returns
 */
export function internalValidate(element: HTMLElement): ValidationResult {
    const { [componentStateSymbol]: target } = element;
    if (!target) {
        return { isValid: true, errors: [] };
    }

    let submitted = false;
    if ("form" in element && element.form instanceof HTMLFormElement) {
        submitted = element.form[formStateSymbol]?.submitted ?? false;
    }

    // validering råa värden
    const viewValue = target.getViewValue();
    const viewValueError = validateViewValue(element, target, viewValue);
    if (viewValueError) {
        const { message } = viewValueError;
        dispatchError(element, { message, viewValue, submitted });
        return { isValid: false, errors: [{ element, message }] };
    }

    // validering tolkade värden
    const modelValue = target.parser(viewValue);
    if (typeof modelValue !== "undefined") {
        const modelValueError = validateModelValue(element, target, modelValue);
        if (modelValueError) {
            const { message } = modelValueError;
            dispatchError(element, {
                message,
                viewValue,
                modelValue,
                submitted,
            });
            return { isValid: false, errors: [{ element, message }] };
        }
    }

    const formattedValue = target.formatter(modelValue);
    dispatchSuccess(element, {
        viewValue,
        modelValue,
        formattedValue,
        submitted,
    });

    return { isValid: true, errors: [] };
}

/**
 * @public
 * @param element - The element to validate
 * @returns
 */
export async function validateElement(
    element: HTMLElement,
): Promise<ValidationResult> {
    return internalValidate(element);
}
