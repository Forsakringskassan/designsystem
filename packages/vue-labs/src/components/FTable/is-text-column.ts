import { type TableColumn, type TableColumnText } from "./table-column";

/**
 * @internal
 */
export function isTextColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K> & { type?: string },
): column is TableColumnText<T, K> {
    if (!column.type) {
        return false;
    }

    return column.type.startsWith("text");
}
