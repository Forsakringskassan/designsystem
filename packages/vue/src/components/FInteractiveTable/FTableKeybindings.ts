import { type ListArray, type ListItem } from "../../types";

interface FTableKeyboardAdapter {
    rows: ListArray;
    tr: HTMLElement[];

    activate(row: ListItem, element: HTMLElement): void;
}

type Callback = (this: FTableKeyboardAdapter, current: number) => void;

const keybindings: Record<string, Callback> = Object.fromEntries([
    ["Up", focusTrAbove],
    ["Down", focusTrBelow],
    ["ArrowUp", focusTrAbove],
    ["ArrowDown", focusTrBelow],
    [" ", activateRow],
    ["Spacebar", activateRow],
]);

export function focusTrAbove(
    this: FTableKeyboardAdapter,
    current: number,
): void {
    if (current > 0) {
        this.tr[current - 1].focus();
    } else {
        this.tr[this.tr.length - 1].focus();
    }
}

export function focusTrBelow(
    this: FTableKeyboardAdapter,
    current: number,
): void {
    if (current < this.tr.length - 1) {
        this.tr[current + 1].focus();
    } else {
        this.tr[0].focus();
    }
}

export function activateRow(
    this: FTableKeyboardAdapter,
    current: number,
): void {
    const row = this.rows[current];
    const element = this.tr[current];
    this.activate(row, element);
}

export function onKeydown(
    this: FTableKeyboardAdapter,
    event: KeyboardEvent,
    current: number,
): void {
    const fn = keybindings[event.key];
    if (fn) {
        event.preventDefault();
        fn.call(this, current);
    }
}
