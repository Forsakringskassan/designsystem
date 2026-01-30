/**
 * Removes given row from the array.
 * If `expandableAttribute` is set it can removes rows from nested rows.
 *
 * @public
 * @since v6.34.1
 * @param rows - The row array
 * @param row - The row to remove (expected to exist in the row array)
 * @param expandableAttribute - If set, this function will search for and remove expandable rows the given row.
 * @returns A new array with row removed.
 */
export function removeRow<T>(
    rows: T[],
    row: T,
    expandableAttribute?: keyof T,
): T[] {
    const rowIndex = rows.indexOf(row);
    if (rowIndex !== -1) {
        return rows.toSpliced(rowIndex, 1);
    } else if (expandableAttribute) {
        return removeExpandableRowFromRows(rows, row, expandableAttribute);
    } else {
        return rows;
    }
}

function removeExpandableRowFromRows<T>(rows: T[], row: T, key: keyof T): T[] {
    return rows.map((currentRow) => {
        const expandableRows = currentRow[key];
        if (Array.isArray(expandableRows)) {
            const index = expandableRows.indexOf(row);
            if (index !== -1) {
                return {
                    ...currentRow,
                    [key]: expandableRows.toSpliced(index, 1),
                };
            }
        }
        return currentRow;
    });
}
