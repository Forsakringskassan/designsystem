/**
 * @public
 */
export interface ContextMenuTextItem {
    label: string;
    key: string;
    icon?: string;
    iconLibrary?: string;
}

/**
 * @public
 */
export interface ContextMenuSeparatorItem {
    separator: true;
}

/**
 * @public
 */
export type ContextMenuItem = ContextMenuTextItem | ContextMenuSeparatorItem;

/**
 * @public
 */
export function isContextMenuTextItem(
    value: ContextMenuItem & { key?: string },
): value is ContextMenuTextItem {
    return typeof value.key === "string";
}

/**
 * @public
 */
export function isContextMenuSeparatorItem(
    value: ContextMenuItem & { separator?: true },
): value is ContextMenuSeparatorItem {
    return typeof value.separator === "boolean" && value.separator;
}
