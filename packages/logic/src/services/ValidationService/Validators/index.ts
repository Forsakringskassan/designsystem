import { type Validator } from "../Validator";
import { allowListValidator } from "./AllowListValidator";
import { bankAccountNumberValidator } from "./BankAccountNumberValidator";
import { bankgiroValidator } from "./BankgiroValidator";
import { blacklistValidator } from "./BlacklistValidator";
import { clearingNumberValidator } from "./ClearingNumberValidator";
import { currencyValidator } from "./CurrencyValidator";
import { dateValidator, dateFormatValidator } from "./DateValidator";
import { decimalValidator } from "./DecimalValidator";
import { emailValidator } from "./EmailValidator";
import { greaterThanValidator } from "./GreaterThanValidator";
import { integerValidator } from "./IntegerValidator";
import { invalidDatesValidator } from "./InvalidDatesValidator";
import { invalidWeekdaysValidator } from "./InvalidWeekdaysValidator";
import { lessThanValidator } from "./LessThanValidator";
import { matchesValidator } from "./MatchesValidator";
import { maxDateValidator } from "./MaxDateValidator";
import { maxLengthValidator } from "./MaxLengthValidator";
import { maxValueValidator } from "./MaxValueValidator";
import { minDateValidator } from "./MinDateValidator";
import { minLengthValidator } from "./MinLengthValidator";
import { minValueValidator } from "./MinValueValidator";
import { numberValidator } from "./NumberValidator";
import { organisationsnummerValidator } from "./OrganisationsnummerValidator";
import { percentValidator } from "./PercentValidator";
import { personnummerFormatValidator } from "./PersonnummerFormatValidator";
import { personnummerLuhnValidator } from "./PersonnummerLuhnValidator";
import { personnummerNotSame } from "./PersonnummerNotSame";
import { personnummerOlder } from "./PersonnummerOlder";
import { personnummerYounger } from "./PersonnummerYounger";
import { phoneNumberValidator } from "./PhoneNumberValidator";
import { plusgiroValidator } from "./PlusgiroValidator";
import { postalCodeValidator } from "./PostalCodeValidator";
import { requiredValidator } from "./RequiredValidator";
import { whitelistValidator } from "./WhitelistValidator";

export { type DecimalValidatorConfig } from "./DecimalValidator";
export { type BlacklistValidatorConfig } from "./BlacklistValidator";
export { type EmailValidatorConfig } from "./EmailValidator";
export { type MatchesValidatorConfig } from "./MatchesValidator";
export { type MaxLengthValidatorConfig } from "./MaxLengthValidator";
export { type MinLengthValidatorConfig } from "./MinLengthValidator";
export { type MinDateValidatorConfig } from "./MinDateValidator";
export { type MaxDateValidatorConfig } from "./MaxDateValidator";
export {
    type InvalidDatesValidatorConfig,
    isInvalidDatesConfig,
} from "./InvalidDatesValidator";
export {
    type InvalidWeekdaysValidatorConfig,
    isInvalidWeekdaysConfig,
} from "./InvalidWeekdaysValidator";
export { type AllowListValidatorConfig } from "./AllowListValidator";

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
