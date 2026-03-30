import { type Ref } from "vue";

/**
 * @public
 * @since %version%
 */
export interface MaybeSortableTableColumn {
    key?: PropertyKey;
    header: string | Readonly<Ref<string>>;
    sort?: boolean;
}

interface SortableTableColumn {
    key: PropertyKey;
    header: string | Readonly<Ref<string>>;
    sort: true;
}

function isSortable(
    column: MaybeSortableTableColumn,
): column is SortableTableColumn {
    return "key" in column && column.key !== undefined && column.sort !== false;
}

function toEntry(
    column: SortableTableColumn,
): [PropertyKey, string | Readonly<Ref<string>>] {
    return [column.key, column.header];
}

/**
 * Get sortable attributes for use with `FSortFilterDataset`.
 *
 * @public
 * @since %version%
 * @param columns - Table columns to get sortable attributes from.
 */
export function getTableSortableAttributes(
    columns: MaybeSortableTableColumn[],
): Record<PropertyKey, string | Readonly<Ref<string>>> {
    const sortable = columns.filter(isSortable);
    const attributes = sortable.map(toEntry);
    return Object.fromEntries(attributes);
}
