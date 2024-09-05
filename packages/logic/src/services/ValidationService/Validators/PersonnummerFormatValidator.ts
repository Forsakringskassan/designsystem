import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parsePersonnummer } from "../../../converters/PersonnummerConverter";

export const personnummerFormatValidator: Validator = {
    name: "personnummerFormat",
    validation(value) {
        return isEmpty(value) || isSet(parsePersonnummer(value));
    },
};
