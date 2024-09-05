import { type Validator } from "../Validator";
import { stripWhitespace } from "../../../text";
import { isEmpty, isSet } from "../../../utils";

const NUMBER_REGEXP = /^([-−]?[0-9]+)?$/;

export const integerValidator: Validator = {
    name: "integer",
    validation(value) {
        const valueWithoutWhitespace = isSet(value)
            ? stripWhitespace(String(value))
            : value;
        return (
            isEmpty(valueWithoutWhitespace) ||
            NUMBER_REGEXP.test(valueWithoutWhitespace)
        );
    },
};
