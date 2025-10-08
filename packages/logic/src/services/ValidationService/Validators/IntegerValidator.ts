import { stripWhitespace } from "../../../text";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../Validator";

const NUMBER_REGEXP = /^([-−]?\d+)?$/;

export const integerValidator: Validator = {
    name: "integer",
    validation(value) {
        const valueWithoutWhitespace = isSet(value)
            ? /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
              stripWhitespace(String(value))
            : value;
        return (
            isEmpty(valueWithoutWhitespace) ||
            NUMBER_REGEXP.test(valueWithoutWhitespace)
        );
    },
};
