import { type ValidatorOptions } from "../validation-service-interface";
import { type Validator } from "../validator";

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
        /* eslint-disable-next-line unicorn/prefer-logical-operator-over-ternary -- false positive */
        return length > 0 && value ? value.length <= length : true;
    },
};
