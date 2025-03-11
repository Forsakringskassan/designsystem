import { computeCssValue } from "./compute-css-value";

/**
 * Takes a space-separated list of `<length>`, computes the values and using the
 * given aggregator function returns a single value from the list.
 *
 * Typically used with `Math.min` or `Math.max` to get the smallest or largest
 * value from the list.
 *
 * @example
 *
 * Assuming we have the width of the browser window:
 *
 * ```ts
 * const totalWidth = /* ... *;
 * ```
 *
 * We can pass in one static value and one in percent:
 *
 * ```ts
 * aggregateCssValue("200px 25%", totalWidth, 0, Math.max);
 * ```
 *
 * - If 25% of the width if greater than 200 it's computed value is returned.
 * - If 25% of the width is less than 200, 200 is returned instead.
 *
 * By changing `Math.max` to `Math.min` we can do the inverse and only return
 * the percentage if it is less than the static value.
 *
 *@internal
 */
export function aggregateCssValue(
    raw: string,
    total: number,
    auto: number,
    take: (...values: number[]) => number,
): number {
    if (raw === "auto") {
        return auto;
    }
    const parts = raw.split(/\s+/).map((it) => it.trim());
    const parsed = parts.map((it) => computeCssValue(it, total, auto));
    return take(...parsed);
}
