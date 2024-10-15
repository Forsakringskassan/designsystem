import { type ListArray, type ListItem } from "../../types";
import { type FTableColumnData } from "../FTableColumn";

/**
 * @public
 */
export interface FInteractiveTableData {
    activeRow: ListItem | undefined;
    columns: FTableColumnData[];
    selectedRows: ListArray;
    tr: HTMLElement[];
}
