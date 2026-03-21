import { parseBankgiro } from "../../../converters";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../validator";

export const bankgiroValidator: Validator = {
    name: "bankgiro",
    validation(value) {
        return isEmpty(value) || isSet(parseBankgiro(value));
    },
};
