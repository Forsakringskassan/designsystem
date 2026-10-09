/**
 * Visits each item in an array and executes given callback.
 *
 * @internal
 * @param array - Array of items.
 * @param childKey - Key to check for nested items.
 * @param visit - Callback to execute on each item.
 * @param level - Nested level of current item (1 for root level).
 */
export function walk<T>(
    array: T[],
    childKey: keyof T | undefined,
    visit: (
        item: T,
        level: number,
        setsize: number,
        posinset: number,
    ) => boolean,
    level = 1,
): void {
    for (const [i, item] of array.entries()) {
        const visitChildren = visit(item, level, array.length, i + 1);

        /* eslint-disable-next-line unicorn/no-computed-property-existence-check -- technical debt */
        if (visitChildren && childKey && item[childKey]) {
            walk(item[childKey] as T[], childKey, visit, level + 1);
        }
    }
}
