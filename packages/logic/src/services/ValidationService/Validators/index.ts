import { ValidationService } from "../ValidationService";
import { bankAccountNumberValidator } from "./BankAccountNumberValidator";
import { bankgiroValidator } from "./BankgiroValidator";
import { clearingNumberValidator } from "./ClearingNumberValidator";
import { dateValidator, dateFormatValidator } from "./DateValidator";
import { decimalValidator } from "./DecimalValidator";
import { blacklistValidator } from "./BlacklistValidator";
import { emailValidator } from "./EmailValidator";
import { integerValidator } from "./IntegerValidator";
import { invalidDatesValidator } from "./InvalidDatesValidator";
import { invalidWeekdaysValidator } from "./InvalidWeekdaysValidator";
import { greaterThanValidator } from "./GreaterThanValidator";
import { lessThanValidator } from "./LessThanValidator";
import { matchesValidator } from "./MatchesValidator";
import { maxLengthValidator } from "./MaxLengthValidator";
import { maxValueValidator } from "./MaxValueValidator";
import { minDateValidator } from "./MinDateValidator";
import { maxDateValidator } from "./MaxDateValidator";
import { minLengthValidator } from "./MinLengthValidator";
import { minValueValidator } from "./MinValueValidator";
import { numberValidator } from "./NumberValidator";
import { currencyValidator } from "./CurrencyValidator";
import { organisationsnummerValidator } from "./OrganisationsnummerValidator";
import { percentValidator } from "./PercentValidator";
import { personnummerFormatValidator } from "./PersonnummerFormatValidator";
import { personnummerLuhnValidator } from "./PersonnummerLuhnValidator";
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

ValidationService.registerValidator(bankAccountNumberValidator);
ValidationService.registerValidator(bankgiroValidator);
ValidationService.registerValidator(clearingNumberValidator);
ValidationService.registerValidator(dateFormatValidator);
ValidationService.registerValidator(dateValidator);
ValidationService.registerValidator(decimalValidator);
ValidationService.registerValidator(blacklistValidator);
ValidationService.registerValidator(emailValidator);
ValidationService.registerValidator(integerValidator);
ValidationService.registerValidator(greaterThanValidator);
ValidationService.registerValidator(invalidDatesValidator);
ValidationService.registerValidator(invalidWeekdaysValidator);
ValidationService.registerValidator(lessThanValidator);
ValidationService.registerValidator(minLengthValidator);
ValidationService.registerValidator(matchesValidator);
ValidationService.registerValidator(maxLengthValidator);
ValidationService.registerValidator(minValueValidator);
ValidationService.registerValidator(maxValueValidator);
ValidationService.registerValidator(minDateValidator);
ValidationService.registerValidator(maxDateValidator);
ValidationService.registerValidator(numberValidator);
ValidationService.registerValidator(currencyValidator);
ValidationService.registerValidator(organisationsnummerValidator);
ValidationService.registerValidator(percentValidator);
ValidationService.registerValidator(personnummerFormatValidator);
ValidationService.registerValidator(personnummerLuhnValidator);
ValidationService.registerValidator(phoneNumberValidator);
ValidationService.registerValidator(plusgiroValidator);
ValidationService.registerValidator(postalCodeValidator);
ValidationService.registerValidator(requiredValidator);
ValidationService.registerValidator(whitelistValidator);
