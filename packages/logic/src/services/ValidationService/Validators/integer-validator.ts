import { stripWhitespace } from "../../../text";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../validator";

const NUMBER_REGEXP = /^(?:[−-]?\d+)?$/;

export const integerValidator: Validator = {
    name: "integer",
    validation(value: unknown) {
        const valueWithoutWhitespace = isSet(value)
            ? stripWhitespace(String(value))
            : value;
        return (
            isEmpty(valueWithoutWhitespace) ||
            NUMBER_REGEXP.test(valueWithoutWhitespace)
        );
    },
};
