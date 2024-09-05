import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parseBankgiro } from "../../../converters";

export const bankgiroValidator: Validator = {
    name: "bankgiro",
    validation(value) {
        return isEmpty(value) || isSet(parseBankgiro(value));
    },
};
