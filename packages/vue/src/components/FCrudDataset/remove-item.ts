import { removeNestedItem } from "../../utils/remove-nested-item";

/**
 * Returns a new array with `target` removed.
 *
 * When `nested` is given, nested items are searched recursively (at any
 * depth). A nested item is removed from its parent's array in place, the
 * parent item itself keeps its identity so consumers tracking it (e.g.
 * expanded state in a table) are unaffected.
 */
export function removeItem<T>(
    items: T[],
    target: T,
    nested?: keyof T | null,
): T[] {
    const newItems = [...items];
    removeNestedItem(newItems, target, nested);
    return newItems;
}
