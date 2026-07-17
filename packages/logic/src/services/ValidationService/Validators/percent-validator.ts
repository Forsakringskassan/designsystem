import { stripWhitespace } from "../../../text";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../validator";

const PERCENT_REGEXP = /^[+-]?\d+(?:[,.]\d+)?$/;

export const percentValidator: Validator = {
    name: "percent",
    validation(value: unknown) {
        const valueWithoutWhitespace = isSet(value)
            ? stripWhitespace(String(value))
            : value;
        return (
            isEmpty(valueWithoutWhitespace) ||
            PERCENT_REGEXP.test(valueWithoutWhitespace)
        );
    },
};
