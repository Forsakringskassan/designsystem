/**
 * Determine if a value is set. If it is undefined or null, this function
 * returns false.
 *
 * @public
 * @param value - the value for which to determine if it is set
 */
export function isSet<T>(value: T | undefined | null): value is T {
    return value !== undefined && value !== null;
}
