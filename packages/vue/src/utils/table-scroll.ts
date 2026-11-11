/**
 * @public
 */
export enum TableScroll {
    HORIZONTAL = "horizontal",
    NONE = "none",
}

const scrollClasses: Record<TableScroll, string[]> = {
    [TableScroll.HORIZONTAL]: ["table__scroll", "table__scroll--horizontal"],
    [TableScroll.NONE]: [],
};

/**
 * Get list of classes to apply based on what scrolling is requested.
 *
 * @public
 */
export function tableScrollClasses(val: TableScroll): string[] {
    return scrollClasses[val];
}
