/**
 * @public
 */
export enum FTableColumnType {
    TEXT = "text",
    DATE = "date",
    NUMERIC = "numeric",
    ACTION = "action",
}

/**
 * @public
 */
export enum FTableColumnSize {
    EXPAND = "table__column--expand",
    SHRINK = "table__column--shrink",
}

/**
 * @public
 */
export enum FTableColumnSort {
    UNSORTED = "unsorted",
    ASCENDING = "ascending",
    DESCENDING = "descending",
}

/**
 * @public
 */
export interface FTableColumnData {
    id: string;
    name?: string;
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
    if (column.name) {
        const hasDuplicateName = src.some((it) => it.name === column.name);
        if (hasDuplicateName) {
            throw new Error(
                `Expected FTableColumn to have a unique name but encountered duplicate of "${column.name}"`,
            );
        }
    }

    if (!src.some((col) => col.id === column.id)) {
        return [...src, column];
    }
    return src;
}

export function setVisibilityColumn(
    src: FTableColumnData[],
    id: string,
    visible: boolean,
): void {
    const column = src.find((col) => col.id === id);
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
