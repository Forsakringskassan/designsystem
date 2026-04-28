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
    visit: (item: T, level: number) => boolean,
    level = 1,
): void {
    for (const item of array) {
        const visitChildren = visit(item, level);

        if (visitChildren && childKey && item[childKey]) {
            walk(item[childKey] as T[], childKey, visit, level + 1);
        }
    }
}
