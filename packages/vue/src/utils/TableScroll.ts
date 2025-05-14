/**
 * @public
 */
export enum TableScroll {
    HORIZONTAL = "horizontal",
    /**
     * @deprecated Only horizontal is supported. Deprecated since 6.7.0.
     */
    VERTICAL = "vertical",
    /**
     * @deprecated Acts as horizontal. Recommended to use `TableScroll.HORIZONTAL` instead. Deprecated since 6.7.0.
     */
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
