import { isEmpty } from "../../utils";

/**
 * @internal
 */
export const POSTAL_CODE_REGEXP = /^([1-9]{1}\d{2}) ?(\d{2})$/;

/**
 * A 5-digit string with space separator, for example "932 22"
 *
 * @public
 */
export type PostalCodeString = string;

/**
 * @public
 */
export function formatPostalCode(
    value: string | undefined | null,
): string | undefined {
    if (isEmpty(value)) {
        return undefined;
    }

    const match = value.match(POSTAL_CODE_REGEXP);
    if (match === null) {
        return undefined;
    }

    return `${match[1]} ${match[2]}`;
}

/**
 * @public
 */
export function parsePostalCode(value: string): PostalCodeString | undefined {
    return formatPostalCode(value);
}
