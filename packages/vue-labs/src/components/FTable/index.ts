import { type FTableCellApi, type tableCellApiSymbol } from "./f-table-api";

export { default as FTable } from "./FTable.vue";
export { type FTableCellApi } from "./f-table-api";
export { type TableColumn, defineTableColumns } from "./table-column";

declare global {
    interface HTMLElement {
        [tableCellApiSymbol]?: FTableCellApi;
    }
}
