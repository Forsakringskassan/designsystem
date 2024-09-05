import { isEmpty, testLuhnChecksum } from "../../utils";

const ORGANISATIONSNUMMER_REGEXP = /^([0-9]{6})-?([0-9]{4})$/;

/**
 * A string with 6 digits followed by additional 4 digits separated by a hyphen,
 * for example "999999-9999".
 *
 * @public
 */
export type OrganisationsnummerString = string;

/**
 * @public
 */
export function parseOrganisationsnummer(
    value: string,
): OrganisationsnummerString | undefined {
    if (isEmpty(value)) {
        return undefined;
    }

    const match = value.match(ORGANISATIONSNUMMER_REGEXP);
    if (!match) {
        return undefined;
    }

    if (!testLuhnChecksum(`${match[1]}${match[2]}`)) {
        return undefined;
    }

    return `${match[1]}-${match[2]}`;
}
