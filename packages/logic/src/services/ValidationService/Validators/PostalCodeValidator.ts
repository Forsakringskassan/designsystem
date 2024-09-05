import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parsePostalCode } from "../../../converters";

export const postalCodeValidator: Validator = {
    name: "postalCode",
    validation(value) {
        return isEmpty(value) || isSet(parsePostalCode(value));
    },
};
