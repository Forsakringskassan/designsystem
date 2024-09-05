import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parsePersonnummerLuhn } from "../../../converters/PersonnummerConverter";

export const personnummerLuhnValidator: Validator = {
    name: "personnummerLuhn",
    validation(value) {
        return isEmpty(value) || isSet(parsePersonnummerLuhn(value));
    },
};
