/**
 * @public
 */
export enum FTableColumnType {
    TEXT = "text",
    DATE = "date",
    NUMERIC = "numeric",
    ACTION = "action",
}

export enum FTableColumnSize {
    EXPAND = "table__column--expand",
    SHRINK = "table__column--shrink",
}

export enum FTableColumnSort {
    UNSORTED = "unsorted",
    ASCENDING = "ascending",
    DESCENDING = "descending",
}

export interface FTableColumnData {
    id: string;
    name: string;
    title: string;
    description?: string;
    size: FTableColumnSize;
    type: FTableColumnType;
    visible: boolean;
    sortable: boolean;
    sort: FTableColumnSort;
}

export function addColumn(
    src: FTableColumnData[],
    column: FTableColumnData,
): FTableColumnData[] {
    if (!src.some((col) => col.name === column.name)) {
        return [...src, column];
    }
    return src;
}

export function setVisibilityColumn(
    src: FTableColumnData[],
    id: string,
    visible: boolean,
): void {
    const column = src.find((col) => col.name === id);
    if (column) {
        column.visible = visible;
    }
}

export function updateSortOrder(
    src: FTableColumnData[],
    columnName: string,
    ascending: boolean,
): void {
    src.forEach((column) => {
        if (column.name === columnName) {
            column.sort = ascending
                ? FTableColumnSort.ASCENDING
                : FTableColumnSort.DESCENDING;
        } else {
            column.sort = FTableColumnSort.UNSORTED;
        }
    });
}

export function setSortableColumns(
    src: FTableColumnData[],
    columnNames: string[],
): void {
    for (const columnName of columnNames) {
        const foundColumn = src.find((col) => col.name === columnName);
        if (foundColumn) {
            foundColumn.sortable = true;
        }
    }
}

export function getSortableIconName(column: FTableColumnData): string {
    switch (column.sort) {
        case FTableColumnSort.UNSORTED:
            return "sort";
        case FTableColumnSort.ASCENDING:
            return "caret-up";
        case FTableColumnSort.DESCENDING:
            return "caret-down";
        default:
            return "";
    }
}

export function getSortableIconClasses(column: FTableColumnData): string[] {
    const classes = ["table__column__header__icon"];
    if (column.sort === FTableColumnSort.UNSORTED) {
        classes.push("table__column__header__icon--discrete");
    }
    return classes;
}

/**
 * @internal
 */
export function isTableColumnType(value: string): value is FTableColumnType {
    return ["text", "date", "numeric", "action"].includes(value);
}
