import { type ValidatorName } from "./type-mapping";
import { type UntypedValidatorContext } from "./validator-context";

/**
 * Represents a validator without its type.
 *
 * In general this should not be used.
 *
 * @internal
 */
export interface UntypedValidator {
    readonly name: ValidatorName;
    validateViewValue?: UntypedValidatorCallback;
    validateModelValue?: UntypedValidatorCallback;
}

export type UntypedValidatorCallback = (
    this: UntypedValidatorContext,
    value: unknown,
) => { valid: boolean; code?: string };

export type UntypedViewValueValidator = UntypedValidator & {
    validateViewValue: UntypedValidatorCallback;
};

export type UntypedModelValueValidator = UntypedValidator & {
    validateModelValue: UntypedValidatorCallback;
};
