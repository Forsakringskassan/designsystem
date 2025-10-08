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
        return config.length ? value.length <= config.length : true;
    },
};
