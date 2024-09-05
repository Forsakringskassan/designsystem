import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parseClearingNumber } from "../../../converters";

export const clearingNumberValidator: Validator = {
    name: "clearingNumber",
    validation(value) {
        return isEmpty(value) || isSet(parseClearingNumber(value));
    },
};
