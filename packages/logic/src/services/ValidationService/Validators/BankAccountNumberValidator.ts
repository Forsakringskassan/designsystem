import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parseBankAccountNumber } from "../../../converters";

export const bankAccountNumberValidator: Validator = {
    name: "bankAccountNumber",
    validation(value) {
        return isEmpty(value) || isSet(parseBankAccountNumber(value));
    },
};
