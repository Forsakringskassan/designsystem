import {
    type ValidatorConfig,
    type ValidatableHTMLElement,
} from "./ValidationServiceInterface";

/**
 * Type for validator name, i.e. keys in inputValidators.
 *
 * @public
 */
export type ValidatorName = string;

/**
 * Describes an input validator.
 *
 * @public
 */
export interface Validator<TConfig = ValidatorConfig> {
    /**
     * The name of the validator.
     */
    name: ValidatorName;

    /**
     * Validation method
     */
    validation(
        value: string,
        element: ValidatableHTMLElement,
        config: Partial<TConfig>,
    ): boolean;

    /**
     * Optional instant validation
     */
    instant?: boolean;
}
