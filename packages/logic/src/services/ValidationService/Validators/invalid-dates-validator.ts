import { isEmpty } from "../../../utils";
import { type ValidatorOptions } from "../validation-service-interface";
import { type Validator } from "../validator";

/**
 * @public
 */
export interface InvalidDatesValidatorConfig extends ValidatorOptions {
    dates: string[];
}

/**
 * @public
 */
export function isInvalidDatesConfig(
    value: Partial<InvalidDatesValidatorConfig>,
): value is InvalidDatesValidatorConfig {
    return Boolean(value.dates);
}

/**
 * @public
 */
export const invalidDatesValidator: Validator<InvalidDatesValidatorConfig> = {
    name: "invalidDates",
    validation(value, element, config) {
        if (isEmpty(value)) {
            return true;
        }

        if (!isInvalidDatesConfig(config)) {
            throw new Error(`Invalid invalidDates config for ${element.id}`);
        }

        return !config.dates.includes(value);
    },
};
