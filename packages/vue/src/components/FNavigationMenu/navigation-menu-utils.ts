import { getElementFromVueRef } from "../../utils";

/**
 * Find the first focusable anchor item inside the given `IPopupMenu` object
 *
 * @internal
 *
 * @param ref - A reference to a focusable `IPopupMenu` object
 * @returns The first anchor element found
 */
export function findPopupMenuFirstItem(ref: unknown): HTMLElement | null {
    const selector = "li:first-child a";
    return getElementFromVueRef(ref).querySelector(selector);
}

/**
 * Returns the overflow index based on the real overflow index. This is to ensure
 * that there are always 2 or more items in the popupmenu
 *
 * @internal
 */
export function calcOverflowIndexFromIndex(index: number): number {
    return index === -1 ? -1 : index - 1;
}
