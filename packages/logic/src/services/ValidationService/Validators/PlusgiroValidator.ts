import { parsePlusgiro } from "../../../converters";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../Validator";

export const plusgiroValidator: Validator = {
    name: "plusgiro",
    validation(value) {
        return isEmpty(value) || isSet(parsePlusgiro(value));
    },
};
