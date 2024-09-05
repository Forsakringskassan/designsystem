import { type Validator } from "../Validator";
import { isEmpty } from "../../../utils";

const WHITELIST_REGEXP = /^[a-zA-Z0-9 .,\-()\r\n?+=!:@*\xC0-\xFF]*$/;

export const whitelistValidator: Validator = {
    name: "whitelist",
    instant: true,
    validation(value) {
        return isEmpty(value) || WHITELIST_REGEXP.test(value);
    },
};
