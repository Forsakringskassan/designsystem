import { type MaybeRef, type MaybeRefOrGetter, toValue } from "vue";
import { removeNestedItem } from "../../utils/remove-nested-item";
import { type TableNestedKeyOf } from "./table-nested-key-of";

/**
 * Removes given row(s) from a table row array.
 *
 * Note: The array is mutated.
 *
 * @public
 * @since v6.63.0
 * @param rows - The row array
 * @param rowsToRemove - The row(s) to remove (expected to exist in the rows)
 * @param expandableAttribute - Property containing expandable child rows
 */
export function removeTableRows<T extends object>(
    rows: MaybeRef<T[]>,
    rowsToRemove: MaybeRef<T | T[]>,
    expandableAttribute?: MaybeRefOrGetter<TableNestedKeyOf<T> | undefined>,
): void {
    const rowsValue = toValue(rows);
    const rowsToRemoveValue = toValue(rowsToRemove);
    const expandableAttributeValue = toValue(expandableAttribute);
    // copy to avoid skipping rows if the same array is passed as both arguments
    const normalizedRows = Array.isArray(rowsToRemoveValue)
        ? [...rowsToRemoveValue]
        : [rowsToRemoveValue];

    for (const row of normalizedRows) {
        removeNestedItem(rowsValue, row, expandableAttributeValue);
    }
}
