import { isEmpty } from "../../../utils";
import { type ValidatorOptions } from "../validation-service-interface";
import { type Validator } from "../validator";

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
