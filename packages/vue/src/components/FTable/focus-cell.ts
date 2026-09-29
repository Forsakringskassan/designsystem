import { activateCell } from "./f-table.logic";

/** @internal */
export function focusCell(cell: HTMLTableCellElement): void {
    activateCell(cell, { focus: true });
    cell.click();
}
