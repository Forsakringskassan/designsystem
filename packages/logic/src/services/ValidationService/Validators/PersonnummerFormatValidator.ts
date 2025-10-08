import { parsePersonnummer } from "../../../converters/PersonnummerConverter";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../Validator";

export const personnummerFormatValidator: Validator = {
    name: "personnummerFormat",
    validation(value) {
        return isEmpty(value) || isSet(parsePersonnummer(value));
    },
};
