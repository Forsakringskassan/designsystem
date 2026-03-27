import { type Validator } from "../validator";
import { allowListValidator } from "./allow-list-validator";
import { bankAccountNumberValidator } from "./bank-account-number-validator";
import { bankgiroValidator } from "./bankgiro-validator";
import { blacklistValidator } from "./blacklist-validator";
import { clearingNumberValidator } from "./clearing-number-validator";
import { currencyValidator } from "./currency-validator";
import { dateFormatValidator, dateValidator } from "./date-validator";
import { decimalValidator } from "./decimal-validator";
import { emailValidator } from "./email-validator";
import { greaterThanValidator } from "./greater-than-validator";
import { integerValidator } from "./integer-validator";
import { invalidDatesValidator } from "./invalid-dates-validator";
import { invalidWeekdaysValidator } from "./invalid-weekdays-validator";
import { lessThanValidator } from "./less-than-validator";
import { matchesValidator } from "./matches-validator";
import { maxDateValidator } from "./max-date-validator";
import { maxLengthValidator } from "./max-length-validator";
import { maxValueValidator } from "./max-value-validator";
import { minDateValidator } from "./min-date-validator";
import { minLengthValidator } from "./min-length-validator";
import { minValueValidator } from "./min-value-validator";
import { numberValidator } from "./number-validator";
import { organisationsnummerValidator } from "./organisationsnummer-validator";
import { percentValidator } from "./percent-validator";
import { personnummerFormatValidator } from "./personnummer-format-validator";
import { personnummerLuhnValidator } from "./personnummer-luhn-validator";
import { personnummerNotSame } from "./personnummer-not-same";
import { personnummerOlder } from "./personnummer-older";
import { personnummerYounger } from "./personnummer-younger";
import { phoneNumberValidator } from "./phone-number-validator";
import { plusgiroValidator } from "./plusgiro-validator";
import { postalCodeValidator } from "./postal-code-validator";
import { requiredValidator } from "./required-validator";
import { whitelistValidator } from "./whitelist-validator";

export { type DecimalValidatorConfig } from "./decimal-validator";
export { type BlacklistValidatorConfig } from "./blacklist-validator";
export { type EmailValidatorConfig } from "./email-validator";
export { type MatchesValidatorConfig } from "./matches-validator";
export { type MaxLengthValidatorConfig } from "./max-length-validator";
export { type MinLengthValidatorConfig } from "./min-length-validator";
export { type MinDateValidatorConfig } from "./min-date-validator";
export { type MaxDateValidatorConfig } from "./max-date-validator";
export {
    type InvalidDatesValidatorConfig,
    isInvalidDatesConfig,
} from "./invalid-dates-validator";
export {
    type InvalidWeekdaysValidatorConfig,
    isInvalidWeekdaysConfig,
} from "./invalid-weekdays-validator";
export { type AllowListValidatorConfig } from "./allow-list-validator";

/**
 * List of all available builtin validators.
 *
 * @public
 */
export const availableValidators: Validator[] = [
    allowListValidator,
    bankAccountNumberValidator,
    bankgiroValidator,
    blacklistValidator,
    clearingNumberValidator,
    currencyValidator,
    dateFormatValidator,
    dateValidator,
    decimalValidator,
    emailValidator,
    greaterThanValidator,
    integerValidator,
    invalidDatesValidator,
    invalidWeekdaysValidator,
    lessThanValidator,
    matchesValidator,
    maxDateValidator,
    maxLengthValidator,
    maxValueValidator,
    minDateValidator,
    minLengthValidator,
    minValueValidator,
    numberValidator,
    organisationsnummerValidator,
    percentValidator,
    personnummerFormatValidator,
    personnummerLuhnValidator,
    personnummerNotSame,
    personnummerOlder,
    personnummerYounger,
    phoneNumberValidator,
    plusgiroValidator,
    postalCodeValidator,
    requiredValidator,
    whitelistValidator,
];
