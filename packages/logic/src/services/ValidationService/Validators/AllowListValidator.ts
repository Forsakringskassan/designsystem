import { type Validator } from "../Validator";
import { type ValidatorOptions } from "../ValidationServiceInterface";
import { isEmpty } from "../../../utils";

/**
 * @public
 */
export interface AllowListValidatorConfig extends ValidatorOptions {
    list: string[];
}

/**
 * @public
 */
export const allowListValidator: Validator<AllowListValidatorConfig> = {
    name: "allowList",
    validation(value, element, config) {
        if (
            isEmpty(value) ||
            config.list === undefined ||
            config.list.length === 0
        ) {
            return true;
        }

        return config.list.includes(value);
    },
};
