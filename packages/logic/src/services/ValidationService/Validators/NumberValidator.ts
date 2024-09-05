import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parseNumber } from "../../../converters";

export const numberValidator: Validator = {
    name: "number",
    validation(value) {
        return isEmpty(value) || isSet(parseNumber(value));
    },
};
