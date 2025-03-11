/**
 * Ensures value is within range.
 *
 * Returns value if value is between `min` and `max` (both inclusive) or it
 * returns the lower or upper limit.
 *
 * @internal
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}
