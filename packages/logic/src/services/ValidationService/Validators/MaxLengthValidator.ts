import { type ValidatorOptions } from "../ValidationServiceInterface";
import { type Validator } from "../Validator";

/**
 * @public
 */
export interface MaxLengthValidatorConfig extends ValidatorOptions {
    length: number;
}

export const maxLengthValidator: Validator<MaxLengthValidatorConfig> = {
    name: "maxLength",
    validation(value, _element, config) {
        const { length = 0 } = config;
        return length > 0 && value ? value.length <= length : true;
    },
};
