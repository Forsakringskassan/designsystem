import { stripWhitespace } from "../../../text";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../Validator";

const PERCENT_REGEXP = /^([-+]?\d+)([,.]\d+)?$/;

export const percentValidator: Validator = {
    name: "percent",
    validation(value) {
        const valueWithoutWhitespace = isSet(value)
            ? /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
              stripWhitespace(String(value))
            : value;
        return (
            isEmpty(valueWithoutWhitespace) ||
            PERCENT_REGEXP.test(valueWithoutWhitespace)
        );
    },
};
