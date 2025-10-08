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
        return config.length && value ? value.length >= config.length : true;
    },
};
