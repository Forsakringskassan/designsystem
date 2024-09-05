import { isEmpty } from "../../utils";

const CLEARINGNUMBER_REGEXP = /^\d{4}([-\s]?\d)?$/;

/**
 * A string of 4-5 digits where last digit may be separated by hyphen, for
 * example "5678-1"
 *
 * @public
 */
export type ClearingnumberString = string;

/**
 * @public
 */
export function parseClearingNumber(
    value: string,
): ClearingnumberString | undefined {
    if (isEmpty(value)) {
        return undefined;
    }

    if (!CLEARINGNUMBER_REGEXP.test(value)) {
        return undefined;
    }

    // add hyphen between number 4 & 5
    return value.length === 5
        ? `${value.substring(0, 4)}-${value.substring(4, 5)}`
        : value;
}

/**
 * @public
 */
export function formatClearingNumberForBackend(
    value: ClearingnumberString,
): string | undefined {
    // remove the 5th number
    return value.substring(0, 4);
}
