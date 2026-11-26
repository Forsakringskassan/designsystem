import { parseNumber } from "../../../converters";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../validator";

export const numberValidator: Validator = {
    name: "number",
    validation(value) {
        return isEmpty(value) || isSet(parseNumber(value));
    },
};
