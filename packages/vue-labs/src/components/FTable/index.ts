import { type FTableCellApi, type tableCellApiSymbol } from "./f-table-api";

export { default as FTable } from "./FTable.vue";
export { type FTableApi, type FTableCellApi } from "./f-table-api";
export {
    type MaybeSortableTableColumn,
    getTableSortableAttributes,
} from "./get-table-sortable-attributes";
export { removeDatasetRows } from "./remove-dataset-rows";
export {
    type TableColumn,
    type TableColumnAnchor,
    type TableColumnBase,
    type TableColumnButton,
    type TableColumnCheckbox,
    type TableColumnMenu,
    type TableColumnNumber,
    type TableColumnRender,
    type TableColumnRowHeader,
    type TableColumnSelect,
    type TableColumnSimple,
    type TableColumnSize,
    type TableColumnText,
    type TableColumnType,
    defineTableColumns,
} from "./table-column";

export {
    type InputType,
    type InputTypeBase,
    type InputTypeNumber,
    type InputTypeText,
    baseTypes,
    numberTypes,
    textTypes,
} from "./input-fields-config";

declare global {
    interface HTMLElement {
        [tableCellApiSymbol]?: FTableCellApi;
    }
}
