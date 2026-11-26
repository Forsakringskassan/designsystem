import { FDate } from "@fkui/date";
import { isEmpty } from "../../../utils";
import { type ValidatorOptions } from "../validation-service-interface";
import { type Validator } from "../validator";

/**
 * @public
 */
export interface InvalidWeekdaysValidatorConfig extends ValidatorOptions {
    days: number[];
}

/**
 * @public
 */
export function isInvalidWeekdaysConfig(
    value: Partial<InvalidWeekdaysValidatorConfig>,
): value is InvalidWeekdaysValidatorConfig {
    return Boolean(value.days);
}

/**
 * @public
 */
export const invalidWeekdaysValidator: Validator<InvalidWeekdaysValidatorConfig> =
    {
        name: "invalidWeekdays",
        validation(value, element, config) {
            if (isEmpty(value)) {
                return true;
            }

            if (!isInvalidWeekdaysConfig(config)) {
                throw new Error(
                    `Invalid invalidWeekdays config for ${element.id}`,
                );
            }

            const day = FDate.fromIso(value).weekDay;

            return !config.days.includes(day);
        },
    };
