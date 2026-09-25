import { activateCell } from "./f-table.logic";

/** @internal */
export function focusCell(
    tableElement: HTMLTableElement,
    rowIndex: number,
    cellIndex: number,
): void {
    if (rowIndex < 0 || rowIndex >= tableElement.rows.length) {
        throw new Error(`Row with index ${rowIndex} does not exist.`);
    }

    const row = tableElement.rows[rowIndex];

    if (cellIndex < 0 || cellIndex >= row.cells.length) {
        throw new Error(
            `Cell with index ${cellIndex} does not exist in row ${rowIndex}.`,
        );
    }

    const cell = row.cells[cellIndex];

    activateCell(cell, { focus: true });
    cell.click();
}
