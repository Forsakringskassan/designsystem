/**
 * Represents a clampable value.
 *
 * @public
 */
export interface Clampable<T> {
    isBefore(rhs: T): boolean;
    isAfter(rhs: T): boolean;
}

/**
 * Limits a value to be between min and max (inclusive).
 *
 * @example
 *
 * ```ts
 * const min = FDate.fromIso("2004-08-01");
 * const max = FDate.fromIso("2007-05-31");
 *
 * clamp(FDate.fromIso("2005-12-31"), min, max); // -> FDate { 2005-12-31 } in range
 * clamp(FDate.fromIso("2004-07-31"), min, max); // -> FDate { 2004-08-01 } min
 * clamp(FDate.fromIso("2007-06-01"), min, max); // -> FDate { 2007-05-31 } max
 * ```
 *
 * @public
 * @since v6.12.0
 * @param value - The value to limit.
 * @param min - The lower bound (inclusive).
 * @param max - The upper bound (inclusive).
 * @returns A value between min and max (inclusive).
 */
export function clamp<T extends Clampable<T>>(value: T, min: T, max: T): T {
    if (value.isBefore(min)) {
        return min;
    }
    if (value.isAfter(max)) {
        return max;
    }
    return value;
}
