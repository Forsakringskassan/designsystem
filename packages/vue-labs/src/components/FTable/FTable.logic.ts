import { isVisible } from "@fkui/logic";
import { getInternalKey } from "@fkui/vue";
import { type MetaRow } from "./MetaRow";
import { type FTableActivateCellEvent } from "./events";

interface TableCellIndex {
    row: number;
    cell: number;
}

const internalKey = getInternalKey();

const navKeys = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Home",
    "End",
];

let prevCellIndex: number | undefined = undefined;

/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
function rowKey<T>(row: T): string {
    return String(row[internalKey]);
}

/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
function walk<T, K extends keyof T = keyof T>(
    array: T[],
    visit: (item: T, level: number) => boolean,
    childKey?: K,
    level = 1,
): void {
    for (const item of array) {
        const visitChildren = visit(item, level);

        if (visitChildren && childKey && item[childKey]) {
            walk(item[childKey] as T[], visit, childKey, level + 1);
        }
    }
}

/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
function getRowIndexes<T, K extends keyof T = keyof T>(
    rows: T[],
    expandableAttribute?: K,
): string[] {
    const array: string[] = [];

    walk(
        rows,
        (row) => {
            array.push(String(row[internalKey]));
            return true;
        },
        expandableAttribute,
    );

    return array;
}

function getCellTarget(
    tableElement: HTMLTableElement,
    rowIndex: number,
    cellIndex: number,
): HTMLElement {
    return tableElement.rows[rowIndex].cells[cellIndex];
}

function isTd(
    element: (HTMLElement & { cellIndex?: number }) | null,
): element is HTMLTableCellElement & { parentElement: HTMLTableRowElement } {
    return element?.cellIndex !== undefined;
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

function getVerticalNavIndex(
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

function navigate(
    e: KeyboardEvent,
    table: HTMLTableElement,
    from: TableCellIndex,
    last: TableCellIndex,
): TableCellIndex | undefined {
    /* @todo fix this */
    /* eslint-disable sonarjs/different-types-comparison -- the types does not allow this to be true so this "cannot happen" */
    if (
        from.row === undefined ||
        from.cell === undefined ||
        last.row === undefined ||
        last.cell === undefined
    ) {
        return;
    }
    /* eslint-enable sonarjs/different-types-comparison */
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

/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
export function getMetaRows<T, K extends keyof T = keyof T>(
    keyedRows: T[],
    expandedKeys: string[],
    expandableAttribute?: K,
): Array<MetaRow<T>> {
    const rowIndexes = getRowIndexes(keyedRows, expandableAttribute);
    const array: Array<MetaRow<T>> = [];

    walk(
        keyedRows,
        (row, level) => {
            const isExpandable = Boolean(
                expandableAttribute && row[expandableAttribute],
            );
            const isExpanded =
                isExpandable && expandedKeys.includes(rowKey(row));

            // +2 since header row has rowindex 1.
            const rowIndex = rowIndexes.indexOf(rowKey(row)) + 2;

            array.push({
                key: rowKey(row),
                row,
                rowIndex,
                level: expandableAttribute ? level : undefined,
                isExpandable,
                isExpanded,
            });

            return isExpanded;
        },
        expandableAttribute,
    );

    return array;
}

export function getTd(element: HTMLElement): HTMLTableCellElement {
    if (isTd(element)) {
        return element;
    } else {
        const closest = element.closest("td");
        if (!closest) {
            throw new Error("expected td parent");
        }

        return closest;
    }
}

export function findAction(
    cell: HTMLTableCellElement,
): HTMLElement | undefined {
    const action = cell.querySelector<HTMLElement>(
        "button, a, input:not(.foobar), [role='button']",
    );

    if (action && isVisible(action)) {
        return action;
    }
}

export function setTabbable(
    element: HTMLElement | null,
    tabbable: boolean,
): void {
    if (element) {
        element.tabIndex = tabbable ? 0 : -1;
    }
}

export function switchTabbable(
    newElement: HTMLElement,
    currentElement: HTMLElement | null,
): void {
    setTabbable(currentElement, false);
    setTabbable(newElement, true);
}

export function setDefaultCellTarget(
    table: HTMLTableElement,
): HTMLElement | null {
    const target = getCellTarget(table, 1, 0);
    dispatchActivateCellEvent(target, { focus: false });

    return target;
}

export function maybeNavigateToCell(e: KeyboardEvent): void {
    let newCellTarget: HTMLElement = e.target as HTMLElement;

    const td = getTd(e.target as HTMLElement);
    const tr = getTr(td);
    const table = getTable(tr);
    const fromIndex = {
        row: tr.rowIndex,
        cell: td.cellIndex,
    };
    const lastIndex = {
        row: getLastRowIndex(table),
        cell: getLastCellIndex(table),
    };

    const navigateTo = navigate(e, table, fromIndex, lastIndex);
    if (navigateTo) {
        newCellTarget = getCellTarget(table, navigateTo.row, navigateTo.cell);
        dispatchActivateCellEvent(newCellTarget, { focus: true });
    }
}

export function dispatchActivateCellEvent(
    element: HTMLElement,
    detail: FTableActivateCellEvent,
): void {
    element.dispatchEvent(
        new CustomEvent<FTableActivateCellEvent>("table-activate-cell", {
            detail,
        }),
    );
}

export function stopEdit(
    element: HTMLElement,
    reason: "enter" | "escape" | "tab" | "shift-tab" | "blur",
): HTMLElement {
    const td = getTd(element);
    const tr = getTr(td);
    const table = getTable(tr);

    const rowIndex = tr.rowIndex;
    const cellIndex = td.cellIndex;
    const lastRowIndex = getLastRowIndex(table);
    const lastCellIndex = getLastCellIndex(table);

    let newCellTarget: HTMLElement = td;

    switch (reason) {
        case "enter": {
            if (rowIndex !== lastRowIndex) {
                newCellTarget = getCellTarget(table, rowIndex + 1, cellIndex);
                dispatchActivateCellEvent(newCellTarget, { focus: true });
            } else {
                dispatchActivateCellEvent(newCellTarget, { focus: true });
            }
            return newCellTarget;
        }
        case "escape": {
            dispatchActivateCellEvent(newCellTarget, { focus: true });
            return newCellTarget;
        }
        case "tab": {
            if (cellIndex === lastCellIndex && rowIndex === lastRowIndex) {
                dispatchActivateCellEvent(newCellTarget, { focus: true });
            } else if (cellIndex === lastCellIndex) {
                newCellTarget = getCellTarget(table, rowIndex + 1, 0);
                dispatchActivateCellEvent(newCellTarget, { focus: true });
            } else {
                newCellTarget = getCellTarget(table, rowIndex, cellIndex + 1);
                dispatchActivateCellEvent(newCellTarget, { focus: true });
            }
            return newCellTarget;
        }
        case "shift-tab": {
            if (cellIndex === 0 && rowIndex === 1) {
                dispatchActivateCellEvent(newCellTarget, { focus: true });
            } else if (cellIndex === 0) {
                newCellTarget = getCellTarget(table, rowIndex - 1, 0);
                dispatchActivateCellEvent(newCellTarget, { focus: true });
            } else {
                newCellTarget = getCellTarget(table, rowIndex, cellIndex - 1);
                dispatchActivateCellEvent(newCellTarget, { focus: true });
            }
            return newCellTarget;
        }
        case "blur": {
            // eslint-disable-next-line no-console -- ev ta bort
            console.log("stopEdit", "blur");
            return newCellTarget;
        }
    }
}
