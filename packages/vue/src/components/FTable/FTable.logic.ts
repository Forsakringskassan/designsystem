import { isVisible } from "@fkui/logic";
import { getInternalKey } from "../../utils/internal-key";
import { MetaRow } from "./MetaRow";

const internalKey = getInternalKey();

function rowKey<T extends Record<string, unknown>>(row: T): string {
    return String(row[internalKey]);
}

function walk<T extends Record<string, unknown>, K extends keyof T>(
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

function getRowIndexes<T extends Record<string, unknown>, K extends keyof T>(
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

function getTd(element: HTMLElement): HTMLTableCellElement {
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

function getLastRowIndex(tableElement: HTMLTableElement): number {
    return tableElement.rows.length - 1;
}

function getLastCellIndex(tableElement: HTMLTableElement): number {
    return tableElement.rows[0].cells.length - 1;
}

function getCellOrAction(cell: HTMLTableCellElement): HTMLElement {
    return findAction(cell) ?? cell;
}

function navigate(
    e: KeyboardEvent,
    fromRowIndex: number,
    fromCellIndex: number,
    lastRowIndex: number,
    lastCellIndex: number,
): { row: number; cell: number } | undefined {
    if (
        fromRowIndex === undefined ||
        fromCellIndex === undefined ||
        lastRowIndex === undefined ||
        lastCellIndex === undefined
    ) {
        return;
    }

    if (e.code === "ArrowLeft") {
        e.preventDefault();
        if (fromCellIndex === 0) {
            return;
        }

        return {
            row: fromRowIndex,
            cell: fromCellIndex - 1,
        };
    }

    if (e.code === "ArrowRight") {
        e.preventDefault();
        if (fromCellIndex === lastCellIndex) {
            return;
        }

        return {
            row: fromRowIndex,
            cell: fromCellIndex + 1,
        };
    }

    if (e.code === "ArrowUp") {
        e.preventDefault();
        if (fromRowIndex === 1) {
            return;
        }

        return {
            row: fromRowIndex - 1,
            cell: fromCellIndex,
        };
    }

    if (e.code === "ArrowDown") {
        e.preventDefault();
        if (fromRowIndex === lastRowIndex) {
            return;
        }

        return {
            row: fromRowIndex + 1,
            cell: fromCellIndex,
        };
    }

    if (e.code === "Home") {
        e.preventDefault();
        if (e.ctrlKey) {
            return {
                row: 1,
                cell: 0,
            };
        } else {
            return {
                row: fromRowIndex,
                cell: 0,
            };
        }
    }

    if (e.code === "End") {
        e.preventDefault();
        if (e.ctrlKey) {
            return {
                row: lastRowIndex,
                cell: lastCellIndex,
            };
        } else {
            return {
                row: fromRowIndex,
                cell: lastCellIndex,
            };
        }
    }
}

export function getMetaRows<
    T extends Record<string, unknown>,
    K extends keyof T,
>(
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

export function findAction(
    cell: HTMLTableCellElement,
): HTMLElement | undefined {
    const action = cell.querySelector<HTMLElement>(
        "button, a, input, [role='button']",
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
    const rowIndex = getTr(td).rowIndex;
    const cellIndex = td.cellIndex;

    const navigateTo = navigate(
        e,
        rowIndex,
        cellIndex,
        getLastRowIndex(table),
        getLastCellIndex(table),
    );

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
