/**
 * Takes a string with a `<length>` (number and unit) or the keyword `auto` and
 * returns the computed value in pixels.
 *
 * Handles both `px` and `%` as units.
 *
 * @internal
 */
export function computeCssValue(
    raw: string,
    total: number,
    auto: number,
): number {
    if (raw.endsWith("px")) {
        return Math.trunc(Number(raw.slice(0, -2)));
    }
    if (raw.endsWith("%")) {
        const value = Math.trunc(Number(raw.slice(0, -1)));
        const percent = value / 100;
        return percent * total;
    }
    if (raw === "0") {
        return 0;
    }
    if (raw === "auto" || raw === "") {
        return auto;
    }
    throw new Error(`Cant parse size from "${raw}"`);
}
