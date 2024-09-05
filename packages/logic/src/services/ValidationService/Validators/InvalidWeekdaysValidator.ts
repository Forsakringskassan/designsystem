import { FDate } from "@fkui/date";
import { type Validator } from "../Validator";
import { type ValidatorOptions } from "../ValidationServiceInterface";
import { isEmpty } from "../../../utils";

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
