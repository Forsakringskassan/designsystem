import { isEmpty } from "../../../utils";
import { type ValidatorOptions } from "../validation-service-interface";
import { type Validator } from "../validator";

/**
 * @public
 */
export interface EmailValidatorConfig extends ValidatorOptions {
    maxLength: number;
}

/**
 * `input[type=email]` converts non-ASCII characters in the domain to punycode
 * in `value` (`åäö` becomes `xn--4cab6c`). Punycode is plain ASCII and would
 * pass the domain pattern, so domain labels starting with `xn--` are rejected
 * to keep non-ASCII domains invalid regardless of input type.
 */
const PUNYCODE_DOMAIN_LABEL = /@(?:[^@]*\.)?xn--[^@]*$/i;

export const emailValidator: Validator<EmailValidatorConfig> = {
    name: "email",
    validation(value, _element, config) {
        if (isEmpty(value)) {
            return true;
        }

        const maxLength = config.maxLength ?? 254;
        const EMAIL_REGEXP = new RegExp(
            `^(?=.{1,${String(maxLength)}}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~åäöÅÄÖ]+(\\.[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~åäöÅÄÖ]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$`,
        );

        return !PUNYCODE_DOMAIN_LABEL.test(value) && EMAIL_REGEXP.test(value);
    },
};
