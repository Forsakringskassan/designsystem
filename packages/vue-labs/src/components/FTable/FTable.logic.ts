import { nextTick, toValue } from "vue";
import { type FTableCellApi, tableCellApiSymbol } from "./f-table-api";

interface TableCellIndex {
    row: number;
    cell: number;
}

const navKeys = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Home",
    "End",
];

let prevCellIndex: number | undefined = undefined;

/** @internal */
export function getCellTarget(
    tableElement: HTMLTableElement,
    rowIndex: number,
    cellIndex: number,
): HTMLElement {
    return tableElement.rows[rowIndex].cells[cellIndex];
}

function getTr(td: HTMLTableCellElement): HTMLTableRowElement {
    return td.parentElement as HTMLTableRowElement;
}

function getTable(tr: HTMLTableRowElement): HTMLTableElement {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
    return tr.closest("table")!;
}

function getLastRowIndex(tableElement: HTMLTableElement): number {
    return tableElement.rows.length - 1;
}

function getLastCellIndex(tableElement: HTMLTableElement): number {
    return tableElement.rows[0].cells.length - 1;
}

/** @internal */
export function getVerticalNavIndex(
    table: HTMLTableElement,
    from: TableCellIndex,
    to: TableCellIndex,
): TableCellIndex {
    const target = { ...to };
    const currentMax = table.rows[from.row].cells.length - 1;
    const targetMax = table.rows[to.row].cells.length - 1;

    if (prevCellIndex && currentMax < targetMax) {
        target.cell = prevCellIndex;
        prevCellIndex = undefined;
    } else {
        target.cell = targetMax < from.cell ? targetMax : from.cell;
    }

    if (targetMax < from.cell) {
        prevCellIndex = from.cell;
    }

    return target;
}

function isDefined(value: Partial<TableCellIndex>): value is TableCellIndex {
    return value.row !== undefined && value.cell !== undefined;
}

function navigate(
    e: KeyboardEvent,
    table: HTMLTableElement,
    from: Partial<TableCellIndex>,
    last: Partial<TableCellIndex>,
): TableCellIndex | undefined {
    if (!isDefined(from) || !isDefined(last)) {
        return;
    }

    if (!navKeys.includes(e.code)) {
        return;
    }
    e.preventDefault();

    if (e.code === "ArrowLeft") {
        if (from.cell === 0) {
            return;
        }

        prevCellIndex = undefined;
        return {
            row: from.row,
            cell: from.cell - 1,
        };
    }

    if (e.code === "ArrowRight") {
        if (from.cell === last.cell) {
            return;
        }
        const lastCellIndex = table.rows[from.row].cells.length - 1;
        if (lastCellIndex <= from.cell) {
            return;
        }

        prevCellIndex = undefined;
        return {
            row: from.row,
            cell: from.cell + 1,
        };
    }

    if (e.code === "ArrowUp") {
        if (from.row === 0) {
            return;
        }

        const to = { row: from.row - 1, cell: from.cell };
        return getVerticalNavIndex(table, from, to);
    }

    if (e.code === "ArrowDown") {
        if (from.row === last.row) {
            return;
        }

        const to = { row: from.row + 1, cell: from.cell };
        return getVerticalNavIndex(table, from, to);
    }

    if (e.code === "Home") {
        if (e.ctrlKey) {
            return {
                row: 1,
                cell: 0,
            };
        } else {
            return {
                row: from.row,
                cell: 0,
            };
        }
    }

    if (e.code === "End") {
        if (e.ctrlKey) {
            return {
                row: last.row,
                cell: table.rows[last.row].cells.length - 1,
            };
        } else {
            return {
                row: from.row,
                cell: table.rows[from.row].cells.length - 1,
            };
        }
    }
}

function getCell(element: HTMLElement): HTMLTableCellElement {
    const closest = element.closest<HTMLTableCellElement>("td, th");
    if (!closest) {
        throw new Error("expected th or td parent");
    }

    return closest;
}

/** @internal */
export async function setDefaultCellTarget(
    table: HTMLTableElement,
): Promise<HTMLElement | null> {
    await nextTick(); // wait for dynamic refs to be applied after table onMounted lifecycle hook
    const target = getCellTarget(table, 1, 0);
    activateCell(target, { focus: false });

    return target;
}

/** @internal */
export function maybeNavigateToCell(e: KeyboardEvent): void {
    let newCellTarget: HTMLElement = e.target as HTMLElement;

    const cell = getCell(e.target as HTMLElement);
    const tr = getTr(cell);
    const table = getTable(tr);
    const fromIndex = {
        row: tr.rowIndex,
        cell: cell.cellIndex,
    };
    const lastIndex = {
        row: getLastRowIndex(table),
        cell: getLastCellIndex(table),
    };

    const navigateTo = navigate(e, table, fromIndex, lastIndex);
    if (navigateTo) {
        newCellTarget = getCellTarget(table, navigateTo.row, navigateTo.cell);
        activateCell(newCellTarget, { focus: true });
    }
}

/** @internal */
export function activateCell(
    element: HTMLElement & { [tableCellApiSymbol]?: FTableCellApi },
    options?: { focus: boolean },
): void {
    const api = element[tableCellApiSymbol];
    const targetEl = toValue(api?.tabstopEl) ?? element;
    targetEl.tabIndex = 0;

    if (options?.focus) {
        targetEl.focus();
    }
}

/** @internal */
export function stopEdit(
    element: HTMLElement,
    reason: "enter" | "escape" | "tab" | "shift-tab" | "blur",
): HTMLElement {
    const td = getCell(element);
    const tr = getTr(td);
    const table = getTable(tr);

    const rowIndex = tr.rowIndex;
    const cellIndex = td.cellIndex;
    const lastRowIndex = getLastRowIndex(table);
    const lastCellIndex = getLastCellIndex(table);

    let newCellTarget: HTMLElement = td;

    switch (reason) {
        case "enter": {
            const nextRowIndex = rowIndex + 1;
            const hasFooter = Boolean(table.tFoot);
            const isLastRow = rowIndex === lastRowIndex;
            const footerNext = hasFooter && nextRowIndex === lastRowIndex;

            if (!isLastRow && !footerNext) {
                newCellTarget = getCellTarget(table, nextRowIndex, cellIndex);
                activateCell(newCellTarget, { focus: true });
            } else {
                activateCell(newCellTarget, { focus: true });
            }
            return newCellTarget;
        }
        case "escape": {
            activateCell(newCellTarget, { focus: true });
            return newCellTarget;
        }
        case "tab": {
            if (cellIndex === lastCellIndex && rowIndex === lastRowIndex) {
                activateCell(newCellTarget, { focus: true });
            } else if (cellIndex === lastCellIndex) {
                newCellTarget = getCellTarget(table, rowIndex + 1, 0);
                activateCell(newCellTarget, { focus: true });
            } else {
                newCellTarget = getCellTarget(table, rowIndex, cellIndex + 1);
                activateCell(newCellTarget, { focus: true });
            }
            return newCellTarget;
        }
        case "shift-tab": {
            if (cellIndex === 0 && rowIndex === 1) {
                activateCell(newCellTarget, { focus: true });
            } else if (cellIndex === 0) {
                newCellTarget = getCellTarget(table, rowIndex - 1, 0);
                activateCell(newCellTarget, { focus: true });
            } else {
                newCellTarget = getCellTarget(table, rowIndex, cellIndex - 1);
                activateCell(newCellTarget, { focus: true });
            }
            return newCellTarget;
        }
        case "blur": {
            return newCellTarget;
        }
    }
}
