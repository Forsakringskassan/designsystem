import { getErrorMessage } from "./error-messages";
import { componentStateSymbol, formStateSymbol } from "./state-symbol";
import {
    type UntypedModelValueValidator,
    type UntypedValidator,
    type UntypedViewValueValidator,
} from "./untyped-validator";
import { type UpdateEventDetails } from "./event/update-event";
import { type ValidationResult } from "./validation-result";
import { type UntypedValidatorContext } from "./validator-context";
import { getValidatorByName } from "./registry";
import { type ValidatorConfigMapping } from "./types";

interface ValidationError {
    /** validator name */
    name: string;
    /** validator error code (or "default" if no code was provided) */
    code: string;
    /** error message */
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
    validators: Array<[UntypedValidator, unknown]>,
    name: string,
    code: string,
): ValidationError {
    const validatorNames = validators.map((it) => it[0].name);
    const message = getErrorMessage(validatorNames, name, code);
    return { name, code, message };
}

function validateViewValue<TValue>(
    element: HTMLElement,
    validators: Array<[UntypedValidator, unknown]>,
    value: TValue,
): ValidationError | null {
    const viewValueValidators = validators.filter(isViewValueValidator);
    for (const [validator, config] of viewValueValidators) {
        const context: UntypedValidatorContext = { config, element };
        const result = validator.validateViewValue.call(context, value);
        if (!result.valid) {
            return createError(
                validators,
                validator.name,
                result.code ?? "default",
            );
        }
    }
    return null;
}

function validateModelValue<TValue>(
    element: HTMLElement,
    validators: Array<[UntypedValidator, unknown]>,
    value: TValue,
): ValidationError | null {
    const modelValueValidators = validators.filter(isModelValueValidator);
    for (const [validator, config] of modelValueValidators) {
        const context: UntypedValidatorContext = { config, element };
        const result = validator.validateModelValue.call(context, value);
        if (!result.valid) {
            return createError(
                validators,
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
    data: Omit<UpdateEventDetails, "isValid" | "validator" | "message">,
): void {
    const event = new CustomEvent<UpdateEventDetails>(eventName, {
        detail: { isValid: true, validator: "", message: "", ...data },
    });
    element.dispatchEvent(event);
}

/**
 * @internal
 * @param element - The element to validate
 * @returns
 */
export function internalValidate(
    element: HTMLElement,
    config?: ValidatorConfigMapping,
): ValidationResult {
    const { [componentStateSymbol]: state } = element;
    if (!state) {
        return { isValid: true, errors: [] };
    }

    if (!config) {
        config = state.getConfiguration();
    }

    const validators = Object.entries(config).map(
        ([name, config]): [validator: UntypedValidator, config: unknown] => {
            const validator = getValidatorByName(name);
            return [validator, config];
        },
    );

    let submitted = false;
    if ("form" in element && element.form instanceof HTMLFormElement) {
        submitted = element.form[formStateSymbol]?.submitted ?? false;
    }

    // validering råa värden
    const viewValue = state.getViewValue();
    const viewValueError = validateViewValue(element, validators, viewValue);
    if (viewValueError) {
        const { name, message } = viewValueError;
        dispatchError(element, {
            validator: name,
            message,
            viewValue,
            modelValue: undefined,
            formattedValue: undefined,
            submitted,
        });
        return {
            isValid: false,
            errors: [{ element, validator: name, message }],
        };
    }

    // validering tolkade värden
    const modelValue = state.parser(viewValue);
    if (typeof modelValue !== "undefined") {
        const modelValueError = validateModelValue(
            element,
            validators,
            modelValue,
        );
        if (modelValueError) {
            const { name, message } = modelValueError;
            dispatchError(element, {
                validator: name,
                message,
                viewValue,
                modelValue,
                formattedValue: undefined, // @todo borde vi inte försöka formatera värdet även om modellen inte validerar?
                submitted,
            });
            return {
                isValid: false,
                errors: [{ element, validator: name, message }],
            };
        }
    }

    const formattedValue =
        typeof modelValue !== "undefined"
            ? state.formatter(modelValue)
            : viewValue;
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
    const self = internalValidate(element);

    let isValid = self.isValid;
    const errors = [...self.errors];

    /* validate all validatable children of this element an aggregate result */
    const children = element.querySelectorAll<HTMLElement>("[data-validation]");
    for (const child of children) {
        const result = internalValidate(child);
        isValid &&= result.isValid;
        errors.push(...result.errors);
    }

    return { isValid, errors };
}
