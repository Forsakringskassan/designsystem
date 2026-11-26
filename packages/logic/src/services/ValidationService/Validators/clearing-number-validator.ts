import { parseClearingNumber } from "../../../converters";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../validator";

export const clearingNumberValidator: Validator = {
    name: "clearingNumber",
    validation(value) {
        return isEmpty(value) || isSet(parseClearingNumber(value));
    },
};
