import { isTextColumn } from "./is-text-column";
import {
    type TableColumn,
    type TableColumnText,
    type TableColumnType,
} from "./table-column";

/**
 * @internal
 */
export function isEditableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K> & { type?: TableColumnType },
): column is TableColumnText<T, K> {
    if (!column.type) {
        return false;
    }

    return isTextColumn(column);
}
