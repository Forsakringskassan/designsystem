import { parseNumber } from "../../../converters";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../Validator";

export const currencyValidator: Validator = {
    name: "currency",
    validation(value) {
        return isEmpty(value) || isSet(parseNumber(value));
    },
};
