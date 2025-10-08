import { isEmpty, isString } from "../../../utils";
import { type Validator } from "../Validator";

const PHONE_NUMBER_REGEXP = /^(\+?[-_/() ]*(\d[-_/() ]*?){3,17})$/;

export const phoneNumberValidator: Validator = {
    name: "phoneNumber",
    validation(value) {
        if (isEmpty(value)) {
            return true;
        }

        if (!isString(value) || value.length > 21) {
            return false;
        }
        return PHONE_NUMBER_REGEXP.test(value);
    },
};
