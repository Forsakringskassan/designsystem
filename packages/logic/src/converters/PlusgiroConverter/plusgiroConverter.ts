import { isEmpty, testLuhnChecksum } from "../../utils";

const PLUSGIRO_REGEXP = /^\d{1,7}[-]?\d{1}$/;

function hyphenShouldBeAdded(value: string): boolean {
    return value.length >= 2 && value.length <= 8;
}

/**
 * A string containing of digits separated by spaces and hyphen, see spec-file for
 * examples
 *
 * @public
 */
export type PlusgiroString = string;

/**
 * @public
 */
export function parsePlusgiro(value: string): PlusgiroString | undefined {
    if (isEmpty(value)) {
        return undefined;
    }

    /**
     * Add spaces between each pair of digits before the hyphen back-to-front.
     * If the number of digits is odd then the first pair in the string can be a single digit.
     * If the number of characters is 9, there will be a space after the first 3 characters.
     */
    value = value.replace(/ /g, "");
    value = value.replace(/\D/g, "");

    if (
        !PLUSGIRO_REGEXP.test(value) ||
        !testLuhnChecksum(value.replace(/\D/g, ""))
    ) {
        return undefined;
    }

    if (hyphenShouldBeAdded(value)) {
        value = `${value.substring(0, value.length - 1)}-${
            value[value.length - 1]
        }`;
    }

    const startOffset = 4;
    let formattedString = value.substring(
        value.length - startOffset,
        value.length,
    );

    const step = 2;
    for (
        let i = value.length - startOffset;
        i >= (value.length === 9 ? 3 : 1);
        i -= step
    ) {
        formattedString = `${value.substring(
            Math.max(i - step, 0),
            i,
        )} ${formattedString}`;
    }

    if (value.length === 9) {
        formattedString = value.substring(0, 1) + formattedString;
    }

    return formattedString;
}
