import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parseNumber } from "../../../converters";

export const currencyValidator: Validator = {
    name: "currency",
    validation(value) {
        return isEmpty(value) || isSet(parseNumber(value));
    },
};
