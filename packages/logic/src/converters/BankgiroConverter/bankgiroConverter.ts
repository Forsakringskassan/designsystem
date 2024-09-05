import { testLuhnChecksum, isEmpty } from "../../utils";

const BANKGIRO_REGEXP_HYPHEN = /^(\d{3,4})[-]?(\d{4})$/;

/**
 * A string with 7-8 digits separated by hyphen, for example "999-9996"
 *
 * @public
 */
export type BankgiroString = string;

/**
 * @public
 */
export function parseBankgiro(value: string): BankgiroString | undefined {
    if (isEmpty(value)) {
        return undefined;
    }

    const match = value.match(BANKGIRO_REGEXP_HYPHEN);
    if (!match) {
        return undefined;
    }

    if (!testLuhnChecksum(`${match[1]}${match[2]}`)) {
        return undefined;
    }

    return `${match[1]}-${match[2]}`;
}
