import { FDate } from "@fkui/date";
import { type Validator } from "../Validator";
import { type ValidatorOptions } from "../ValidationServiceInterface";
import { isEmpty, validLimit, normalizeDateFormat } from "../../../utils";

/**
 * @public
 */
export interface MinDateValidatorConfig extends ValidatorOptions {
    limit: string;
}

export const minDateValidator: Validator<MinDateValidatorConfig> = {
    name: "minDate",
    validation(value, _element, config) {
        if (isEmpty(value)) {
            return true;
        }

        const normalizedValue = normalizeDateFormat(value);
        if (!normalizedValue) {
            return false;
        }

        const parsed = FDate.fromIso(normalizedValue);
        const limit = FDate.fromIso(validLimit(config.limit));

        return parsed.equals(limit) || parsed.isAfter(limit);
    },
};
