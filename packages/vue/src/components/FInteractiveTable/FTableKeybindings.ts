import { type ShallowRef } from "vue";
import { assertRef } from "@fkui/logic";

interface FTableKeyboardAdapter<T> {
    readonly rows: T[];
    readonly tr: ShallowRef<HTMLElement[]>;
    activate(row: T, element: HTMLElement): void;
}

type Callback = (
    table: FTableKeyboardAdapter<unknown>,
    current: number,
) => void;

const keybindings: Partial<Record<string, Callback>> = {
    Up: focusTrAbove,
    Down: focusTrBelow,
    ArrowUp: focusTrAbove,
    ArrowDown: focusTrBelow,
    " ": activateRow,
    Spacebar: activateRow,
    PageUp: goToPreviousPage,
    PageDown: goToNextPage,
};

export function focusTrAbove(
    table: FTableKeyboardAdapter<unknown>,
    current: number,
): void {
    const tr = table.tr.value;
    if (current > 0) {
        tr[current - 1].focus();
    } else {
        tr[tr.length - 1].focus();
    }
}

export function focusTrBelow(
    table: FTableKeyboardAdapter<unknown>,
    current: number,
): void {
    const tr = table.tr.value;
    if (current < tr.length - 1) {
        tr[current + 1].focus();
    } else {
        tr[0].focus();
    }
}

export function activateRow(
    table: FTableKeyboardAdapter<unknown>,
    current: number,
): void {
    const row = table.rows[current];
    const element = table.tr.value[current];
    table.activate(row, element);
}

function goToPreviousPage(table: FTableKeyboardAdapter<unknown>): void {
    dispatchPaginateDatasetEvent(table, "previous");
}

function goToNextPage(table: FTableKeyboardAdapter<unknown>): void {
    dispatchPaginateDatasetEvent(table, "next");
}

function dispatchPaginateDatasetEvent(
    table: FTableKeyboardAdapter<unknown>,
    type: "next" | "previous",
): void {
    assertRef(table.tr);
    const event = new CustomEvent(`paginateDataset:${type}`, {
        bubbles: true,
    });
    table.tr.value[0].dispatchEvent(event);
}

export function onKeydown<T>(
    table: FTableKeyboardAdapter<T>,
    event: KeyboardEvent,
    current: number,
): void {
    const fn = keybindings[event.key];
    if (fn) {
        event.preventDefault();
        fn(table, current);
    }
}
