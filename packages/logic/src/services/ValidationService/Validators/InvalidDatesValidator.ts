import { type Validator } from "../Validator";
import { type ValidatorOptions } from "../ValidationServiceInterface";
import { isEmpty } from "../../../utils";

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
