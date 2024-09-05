import { isEmpty } from "../../utils";

const BANK_ACCOUNT_NUMBER_REGEXP = /^\d{3,16}$/;
const BANK_ACCOUNT_NUMBER_TRIM_REGEXP = /[- .,]+/g;

/**
 * A string with 3-16 digits, for example "0123456789"
 *
 * @public
 */
export type BankAccountNumberString = string;

/**
 * @public
 */
export function parseBankAccountNumber(
    value: string,
): BankAccountNumberString | undefined {
    if (isEmpty(value)) {
        return undefined;
    }

    // remove hyphen, blank space, period, comma
    const trimmedValue = value.replace(BANK_ACCOUNT_NUMBER_TRIM_REGEXP, "");

    return BANK_ACCOUNT_NUMBER_REGEXP.test(trimmedValue)
        ? trimmedValue
        : undefined;
}
