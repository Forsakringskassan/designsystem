import { parsePersonnummerLuhn } from "../../../converters/PersonnummerConverter";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../Validator";

export const personnummerLuhnValidator: Validator = {
    name: "personnummerLuhn",
    validation(value) {
        return isEmpty(value) || isSet(parsePersonnummerLuhn(value));
    },
};
