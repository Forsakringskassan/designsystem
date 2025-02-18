import { type ShallowRef } from "vue";
import { type ListArray, type ListItem } from "../../types";

interface FTableKeyboardAdapter {
    readonly rows: ListArray;
    readonly tr: ShallowRef<HTMLElement[]>;
    activate(row: ListItem, element: HTMLElement): void;
}

type Callback = (table: FTableKeyboardAdapter, current: number) => void;

const keybindings: Partial<Record<string, Callback>> = {
    Up: focusTrAbove,
    Down: focusTrBelow,
    ArrowUp: focusTrAbove,
    ArrowDown: focusTrBelow,
    " ": activateRow,
    Spacebar: activateRow,
};

export function focusTrAbove(
    table: FTableKeyboardAdapter,
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
    table: FTableKeyboardAdapter,
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
    table: FTableKeyboardAdapter,
    current: number,
): void {
    const row = table.rows[current];
    const element = table.tr.value[current];
    table.activate(row, element);
}

export function onKeydown(
    table: FTableKeyboardAdapter,
    event: KeyboardEvent,
    current: number,
): void {
    const fn = keybindings[event.key];
    if (fn) {
        event.preventDefault();
        fn(table, current);
    }
}
