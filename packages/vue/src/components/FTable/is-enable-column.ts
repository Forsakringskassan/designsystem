import {
    type TableColumn,
    type TableColumnAnchor,
    type TableColumnButton,
    type TableColumnType,
} from "./table-column";

/**
 * @internal
 */
export function isEnableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K> & { type?: TableColumnType },
): column is TableColumnAnchor<T, K> | TableColumnButton<T, K> {
    if (!column.type) {
        return false;
    }

    return column.type === "anchor" || column.type === "button";
}
