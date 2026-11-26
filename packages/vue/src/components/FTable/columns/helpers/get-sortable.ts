/**
 * Determines the sortable value for a table column based on the sort property and key.
 *
 * @param column - An object with sort and key properties
 * @returns The key if sorting should be enabled, null otherwise
 *
 * @internal
 */
export function getSortable<K>(column: { sort?: boolean; key?: K }): K | null {
    // If sort is explicitly set to true, use key (or null if no key)
    // If sort is explicitly set to false, return null
    // If sort is undefined, default to true if key exists, false otherwise
    const shouldSort = column.sort ?? !!column.key;
    return shouldSort ? (column.key ?? null) : null;
}
