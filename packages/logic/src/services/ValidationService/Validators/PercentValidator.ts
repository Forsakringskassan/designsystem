import { type Validator } from "../Validator";
import { stripWhitespace } from "../../../text";
import { isEmpty, isSet } from "../../../utils";

const PERCENT_REGEXP = /^([-+]?[0-9]+)([,.][0-9]+)?$/;

export const percentValidator: Validator = {
    name: "percent",
    validation(value) {
        const valueWithoutWhitespace = isSet(value)
            ? stripWhitespace(String(value))
            : value;
        return (
            isEmpty(valueWithoutWhitespace) ||
            PERCENT_REGEXP.test(valueWithoutWhitespace)
        );
    },
};
