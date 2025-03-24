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
        return parseInt(raw.slice(0, -2), 10);
    } else if (raw.endsWith("%")) {
        const value = parseInt(raw.slice(0, -1), 10);
        const percent = value / 100;
        return percent * total;
    } else if (raw === "0") {
        return 0;
    } else if (raw === "auto" || raw === "") {
        return auto;
    } else {
        throw new Error(`Cant parse size from "${raw}"`);
    }
}
