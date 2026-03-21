import { parsePostalCode } from "../../../converters";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../validator";

export const postalCodeValidator: Validator = {
    name: "postalCode",
    validation(value) {
        return isEmpty(value) || isSet(parsePostalCode(value));
    },
};
