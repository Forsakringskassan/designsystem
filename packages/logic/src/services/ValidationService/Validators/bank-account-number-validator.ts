import { parseBankAccountNumber } from "../../../converters";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../validator";

export const bankAccountNumberValidator: Validator = {
    name: "bankAccountNumber",
    validation(value) {
        return isEmpty(value) || isSet(parseBankAccountNumber(value));
    },
};
