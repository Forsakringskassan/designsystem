import { isVisible } from "@fkui/logic";
import { getInternalKey } from "../../utils/internal-key";
import { MetaRow } from "./MetaRow";

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

function rowKey<T>(row: T): string {
    return String(row[internalKey]);
}

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
    const cellElement = tableElement.rows[rowIndex].cells[cellIndex];
    return getCellOrAction(cellElement);
}

function isTd(
    element: (HTMLElement & { cellIndex?: number }) | null,
): element is HTMLTableCellElement & { parentElement: HTMLTableRowElement } {
    return element !== null && element.cellIndex !== undefined;
}

function getTr(td: HTMLTableCellElement): HTMLTableRowElement {
    return td.parentElement as HTMLTableRowElement;
}

function getLastRowIndex(tableElement: HTMLTableElement): number {
    return tableElement.rows.length - 1;
}

function getLastCellIndex(tableElement: HTMLTableElement): number {
    return tableElement.rows[0].cells.length - 1;
}

function getCellOrAction(cell: HTMLTableCellElement): HTMLElement {
    return findAction(cell) ?? cell;
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
    if (
        from.row === undefined ||
        from.cell === undefined ||
        last.row === undefined ||
        last.cell === undefined
    ) {
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
        if (from.row === 1) {
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

export function getMetaRows<T, K extends keyof T = keyof T>(
    keyedRows: T[],
    expandedKeys: string[],
    expandableAttribute?: K,
): Array<MetaRow<T>> {
    const rowIndexes = getRowIndexes(keyedRows);
    const array: Array<MetaRow<T>> = [];

    walk(
        keyedRows,
        (row, level) => {
            const isExpandable = Boolean(
                expandableAttribute && row[expandableAttribute],
            );
            const isExpanded =
                isExpandable && expandedKeys.includes(rowKey(row));

            array.push({
                key: rowKey(row),
                row,
                rowIndex: rowIndexes.indexOf(rowKey(row)) + 1,
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
    setTabbable(target, true);

    return target;
}

export function maybeNavigateToCell(
    e: KeyboardEvent,
    table: HTMLTableElement,
    currentCellTarget: HTMLElement,
): HTMLElement {
    let newCellTarget = currentCellTarget;
    const td = getTd(e.target as HTMLElement);
    const fromIndex = {
        row: getTr(td).rowIndex,
        cell: td.cellIndex,
    };
    const lastIndex = {
        row: getLastRowIndex(table),
        cell: getLastCellIndex(table),
    };

    const navigateTo = navigate(e, table, fromIndex, lastIndex);
    if (navigateTo) {
        newCellTarget = getCellTarget(table, navigateTo.row, navigateTo.cell);
        switchTabbable(newCellTarget, currentCellTarget);
        newCellTarget.focus();
    }

    return newCellTarget;
}

export function stopEdit(
    table: HTMLTableElement,
    currentCellTarget: HTMLElement,
    reason: "enter" | "escape" | "tab" | "shift-tab" | "blur",
): HTMLElement {
    const td = getTd(currentCellTarget);
    const rowIndex = getTr(td).rowIndex;
    const cellIndex = td.cellIndex;
    const lastRowIndex = getLastRowIndex(table);
    const lastCellIndex = getLastCellIndex(table);

    let newCellTarget = currentCellTarget;

    switch (reason) {
        case "enter": {
            if (rowIndex !== lastRowIndex) {
                newCellTarget = getCellTarget(table, rowIndex + 1, cellIndex);
                switchTabbable(newCellTarget, currentCellTarget);
                newCellTarget.focus();
            } else {
                setTabbable(currentCellTarget, true);
                currentCellTarget.focus();
            }
            break;
        }
        case "escape": {
            setTabbable(currentCellTarget, true);
            currentCellTarget.focus();
            break;
        }
        case "tab": {
            if (cellIndex === lastCellIndex && rowIndex === lastRowIndex) {
                setTabbable(currentCellTarget, true);
                currentCellTarget.focus();
            } else if (cellIndex === lastCellIndex) {
                newCellTarget = getCellTarget(table, rowIndex + 1, 0);
                switchTabbable(newCellTarget, currentCellTarget);
                newCellTarget.focus();
            } else {
                newCellTarget = getCellTarget(table, rowIndex, cellIndex + 1);
                switchTabbable(newCellTarget, currentCellTarget);
                newCellTarget.focus();
            }
            break;
        }
        case "shift-tab": {
            if (cellIndex === 0 && rowIndex === 1) {
                setTabbable(currentCellTarget, true);
                currentCellTarget.focus();
            } else if (cellIndex === 0) {
                newCellTarget = getCellTarget(table, rowIndex - 1, 0);
                switchTabbable(newCellTarget, currentCellTarget);
                newCellTarget.focus();
            } else {
                newCellTarget = getCellTarget(table, rowIndex, cellIndex - 1);
                switchTabbable(newCellTarget, currentCellTarget);
                newCellTarget.focus();
            }
            break;
        }
        case "blur": {
            setTabbable(currentCellTarget, true);
            break;
        }

        default: {
            throw new Error(`invalid stop edit reason: ${reason}`);
        }
    }

    return newCellTarget;
}
