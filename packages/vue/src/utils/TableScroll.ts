/**
 * @public
 */
export enum TableScroll {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    BOTH = "both",
    NONE = "none",
}

const scrollClasses: Record<TableScroll, string[]> = {
    [TableScroll.HORIZONTAL]: ["table__scroll", "table__scroll--horizontal"],
    [TableScroll.VERTICAL]: ["table__scroll", "table__scroll--vertical"],
    [TableScroll.BOTH]: [
        "table__scroll",
        "table__scroll--horizontal",
        "table__scroll--vertical",
    ],
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
