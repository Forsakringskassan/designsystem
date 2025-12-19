import { type FTableCellApi, type tableCellApiSymbol } from "./f-table-api";

export { default as FTable } from "./FTable.vue";
export { type FTableApi, type FTableCellApi } from "./f-table-api";
export {
    type TableColumn,
    type TableColumnSize,
    type TableColumnType,
    defineTableColumns,
} from "./table-column";

declare global {
    interface HTMLElement {
        [tableCellApiSymbol]?: FTableCellApi;
    }
}
