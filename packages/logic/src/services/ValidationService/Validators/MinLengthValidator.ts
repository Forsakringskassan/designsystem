import { type ValidatorOptions } from "../ValidationServiceInterface";
import { type Validator } from "../Validator";

/**
 * @public
 */
export interface MinLengthValidatorConfig extends ValidatorOptions {
    length: number;
}

export const minLengthValidator: Validator<MinLengthValidatorConfig> = {
    name: "minLength",
    validation(value, _element, config) {
        const { length = 0 } = config;
        return length > 0 && value ? value.length >= length : true;
    },
};
