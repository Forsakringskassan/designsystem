import { type UntypedValidator } from "./untyped-validator";

const availableValidators: Partial<Record<string, UntypedValidator>> = {};

/**
 * @internal
 */
export function registerValidator(validator: UntypedValidator): void {
    availableValidators[validator.name] = validator;
}

/**
 * @internal
 */
export function getValidatorByName(name: string): UntypedValidator {
    const validator = availableValidators[name];
    if (!validator) {
        throw new Error(`no validator named "${name}"`);
    }
    return validator;
}
