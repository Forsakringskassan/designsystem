import { type Validator } from "../Validator";
import { type ValidatorOptions } from "../ValidationServiceInterface";
import { isEmpty } from "../../../utils";

/**
 * @public
 */
export interface EmailValidatorConfig extends ValidatorOptions {
    maxLength: number;
}

export const emailValidator: Validator<EmailValidatorConfig> = {
    name: "email",
    validation(value, _element, config) {
        const maxLength = config.maxLength || 254;
        const EMAIL_REGEXP = new RegExp(
            `^(?=.{1,${maxLength}}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~åäöÅÄÖ]+(\\.[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~åäöÅÄÖ]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$`,
        );

        return isEmpty(value) || EMAIL_REGEXP.test(value);
    },
};
