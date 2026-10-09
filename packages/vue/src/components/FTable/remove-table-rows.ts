import { type MaybeRef, type MaybeRefOrGetter, toValue } from "vue";

/**
 * Removes given row(s) from a table row array.
 *
 * Note: The array is mutated.
 *
 * @public
 * @since %version%
 * @param rows - The row array
 * @param rowsToRemove - The row(s) to remove (expected to exist in the rows)
 * @param expandableAttribute - Property containing expandable child rows
 */
export function removeTableRows<T extends object>(
    rows: MaybeRef<T[]>,
    rowsToRemove: MaybeRef<T | T[]>,
    expandableAttribute?: MaybeRefOrGetter<keyof T | undefined>,
): void {
    const rowsValue = toValue(rows);
    const rowsToRemoveValue = toValue(rowsToRemove);
    const expandableAttributeValue = toValue(expandableAttribute);
    const normalizedRows = Array.isArray(rowsToRemoveValue)
        ? rowsToRemoveValue
        : [rowsToRemoveValue];

    for (const row of normalizedRows) {
        removeRow(rowsValue, row, expandableAttributeValue);
    }
}

function removeRow<T extends object>(
    rows: T[],
    row: T,
    expandableAttribute?: keyof T,
): void {
    const rowIndex = rows.indexOf(row);
    if (rowIndex !== -1) {
        rows.splice(rowIndex, 1);
    } else if (expandableAttribute) {
        removeNestedRows(rows, row, expandableAttribute);
    }
}

function removeNestedRows<T extends object>(
    rows: T[],
    row: T,
    expandableAttribute: keyof T,
): void {
    for (const currentRow of rows) {
        const nestedRows = currentRow[expandableAttribute];
        if (!Array.isArray(nestedRows)) {
            continue;
        }
        const index = nestedRows.indexOf(row);
        if (index !== -1) {
            nestedRows.splice(index, 1);
        }
    }
}
