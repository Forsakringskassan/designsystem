import { type Ref } from "vue";

export function isTableCell(
    el: Partial<HTMLTableCellElement> | null,
): el is HTMLTableCellElement & { parentElement: HTMLTableRowElement } {
    return el !== null && el.cellIndex !== undefined;
}

export function isAlphanumeric(keyCode: number): boolean {
    return (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90);
}

export function getTableCell(
    e: KeyboardEvent,
): (HTMLTableCellElement & { parentElement: HTMLTableRowElement }) | undefined {
    const target = e.target as HTMLElement;
    return isTableCell(target)
        ? target
        : isTableCell(target?.parentElement)
          ? target.parentElement
          : undefined;
}

export function handleViewKeyDown(
    e: KeyboardEvent,
    activeCellIndex?: Ref<number>,
    activeRowIndex?: Ref<number>,
    lastCellIndex?: number,
    lastRowIndex?: number,
): void {
    if (
        activeCellIndex === undefined ||
        activeRowIndex === undefined ||
        lastCellIndex === undefined ||
        lastRowIndex === undefined
    ) {
        return;
    }

    const el = getTableCell(e);
    if (!el) {
        return;
    }

    if (e.code === "ArrowLeft") {
        e.preventDefault();
        if (el.cellIndex === 0) {
            return;
        }

        activeCellIndex.value = el.cellIndex - 1;
        activeRowIndex.value = el.parentElement.rowIndex;
    }

    if (e.code === "ArrowRight") {
        e.preventDefault();
        if (lastCellIndex === el.cellIndex) {
            return;
        }

        activeCellIndex.value = el.cellIndex + 1;
        activeRowIndex.value = el.parentElement.rowIndex;
    }

    if (e.code === "ArrowUp") {
        e.preventDefault();

        if (el.parentElement.rowIndex === 1) {
            return;
        }

        activeCellIndex.value = el.cellIndex;
        activeRowIndex.value = el.parentElement.rowIndex - 1;
    }

    if (e.code === "ArrowDown") {
        e.preventDefault();

        if (lastRowIndex === el.parentElement.rowIndex) {
            return;
        }

        activeCellIndex.value = el.cellIndex;
        activeRowIndex.value = el.parentElement.rowIndex + 1;
    }

    if (e.code === "Home") {
        e.preventDefault();

        if (e.ctrlKey) {
            activeCellIndex.value = 0;
            activeRowIndex.value = 1;
        } else {
            activeCellIndex.value = 0;
            activeRowIndex.value = el.parentElement.rowIndex;
        }
    }

    if (e.code === "End") {
        e.preventDefault();

        if (e.ctrlKey) {
            activeCellIndex.value = lastCellIndex;
            activeRowIndex.value = lastRowIndex;
        } else {
            activeCellIndex.value = lastCellIndex;
            activeRowIndex.value = el.parentElement.rowIndex;
        }
    }
}
