import { type TableNestedKeyOf } from "./table-nested-key-of";

/**
 * Get the nested rows of a row (if any).
 *
 * The nested rows may be of another type than the parent row (e.g. custom
 * expandable content) but are treated as rows when walking the table.
 *
 * @internal
 * @param row - The parent row.
 * @param key - Key of the property holding the nested rows.
 * @returns The nested rows or `undefined` if the property is not an array.
 */
export function getNestedRows<T>(
    row: T,
    key: TableNestedKeyOf<T>,
): T[] | undefined {
    const value: unknown = row[key];
    return Array.isArray(value) ? (value as T[]) : undefined;
}
