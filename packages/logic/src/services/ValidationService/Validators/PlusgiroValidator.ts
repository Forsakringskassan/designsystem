import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parsePlusgiro } from "../../../converters";

export const plusgiroValidator: Validator = {
    name: "plusgiro",
    validation(value) {
        return isEmpty(value) || isSet(parsePlusgiro(value));
    },
};
