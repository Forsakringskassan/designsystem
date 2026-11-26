/**
 * Determine if a value is empty.
 *
 * A value is considered empty if it is:
 *
 * - `undefined`
 * - `null`
 * - empty string `""`.
 *
 * @public
 * @param value - value to check if it is empty
 */
export function isEmpty(
    value: string | undefined | null,
): value is "" | undefined | null {
    return !value;
}
