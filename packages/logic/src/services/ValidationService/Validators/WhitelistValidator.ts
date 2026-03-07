import { isEmpty } from "../../../utils";
import { type Validator } from "../Validator";

const WHITELIST_REGEXP = /^[\d\n\r !()*+,.:=?@A-Za-z\u00C0-\u00FF-]*$/;

export const whitelistValidator: Validator = {
    name: "whitelist",
    instant: true,
    validation(_value, element) {
        const value = "value" in element ? element.value : "";
        return isEmpty(value) || WHITELIST_REGEXP.test(value);
    },
};
