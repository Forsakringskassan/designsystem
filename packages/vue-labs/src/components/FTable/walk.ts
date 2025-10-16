/**
 * Visits each item in an array and executes given callback.
 *
 * @internal
 * @param array - Array of items.
 * @param visit - Callback to execute on each item.
 * @param childKey - Key to check for nested items.
 * @param level - Nested level of current item (1 for root level).
 */
export function walk<T>(
    array: T[],
    visit: (item: T, level: number) => boolean,
    childKey?: keyof T,
    level = 1,
): void {
    for (const item of array) {
        const visitChildren = visit(item, level);

        if (visitChildren && childKey && item[childKey]) {
            walk(item[childKey] as T[], visit, childKey, level + 1);
        }
    }
}
