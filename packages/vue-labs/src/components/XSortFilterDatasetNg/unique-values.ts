/**
 * @public
 */
export function uniqueValues<T, K extends keyof T = keyof T>(
    items: T[],
    property: K,
): Array<T[K]> {
    const values = items.map((it) => it[property]);
    const unique = Array.from(new Set(values));
    unique.sort(); // until we can use toSorted()
    return unique;
}
