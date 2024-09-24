import { type ListArray, type ListItem } from "../../types";
import { type FTableColumnData } from "../FTableColumn";

/**
 * @public
 */
export interface FInteractiveTableData {
    activeRow: ListItem | undefined;
    columns: FTableColumnData[];
    emptyRow: Record<string, unknown>;
    selectedRows: ListArray;
    tr: HTMLElement[];
}
