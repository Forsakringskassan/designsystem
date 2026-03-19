import { FDate } from "@fkui/date";
import { isEmpty, normalizeDateFormat, validLimit } from "../../../utils";
import { type ValidatorOptions } from "../ValidationServiceInterface";
import { type Validator } from "../Validator";

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
