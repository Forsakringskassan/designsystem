import { type ValidatorName } from "../Validator";

/**
 * Builder to create validation error message map.
 *
 * @public
 */
export class ValidationErrorMessageBuilder {
    /**
     * Create a new builder.
     */
    public static create(): ValidationErrorMessageBuilder {
        return new ValidationErrorMessageBuilder();
    }

    private validatorMessageMap: Record<string, string>;

    private constructor() {
        this.validatorMessageMap = {};
    }

    /**
     * Map the validator name message towards an error message.
     *
     * @param validatorName - the name of the validator
     * @param message - the error message
     * @param elementType - limit to a specific element type
     */
    public map(
        validatorName: ValidatorName,
        message: string,
        elementType?: "text" | "radio" | "checkbox" | "select" | "textarea",
    ): this {
        let key = validatorName;

        if (elementType) {
            key += `.${elementType}`;
        }

        this.validatorMessageMap[key] = message;

        return this;
    }

    /**
     * Validators that coexists on same element can have a combined message,
     * i.e. if a element have the `required` and the `personnummer` validator
     * the required error message could be combined with
     * `mapCombined('required','personnummer', 'You must enter a social security number!');`.
     *
     * @param validatorName - the name of the validator
     * @param dependentValidatorName - the name of the combined validator
     * @param message - the error message
     * @param elementType - limit to a specific element type
     */
    public mapCombined(
        validatorName: ValidatorName,
        dependentValidatorName: ValidatorName,
        message: string,
        elementType?: "text" | "radio" | "checkbox" | "select" | "textarea",
    ): this {
        return this.map(
            `${validatorName}.${dependentValidatorName}`,
            message,
            elementType,
        );
    }

    /**
     * Build the translation map.
     *
     * @returns the created map.
     */
    public build(): Record<string, string> {
        return this.validatorMessageMap;
    }
}
