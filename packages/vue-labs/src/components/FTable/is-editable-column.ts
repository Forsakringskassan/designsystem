import { isTextColumn } from "./is-text-column";
import {
    type TableColumn,
    type TableColumnCheckbox,
    type TableColumnSelect,
    type TableColumnText,
    type TableColumnType,
} from "./table-column";

/**
 * @internal
 */
export function isEditableColumn<T, K extends keyof T = keyof T>(
    column: TableColumn<T, K> & { type?: TableColumnType },
): column is
    | TableColumnCheckbox<T, K>
    | TableColumnText<T, K>
    | TableColumnSelect<T, K> {
    if (!column.type) {
        return false;
    }

    return (
        column.type === "checkbox" ||
        isTextColumn(column) ||
        column.type === "select"
    );
}
