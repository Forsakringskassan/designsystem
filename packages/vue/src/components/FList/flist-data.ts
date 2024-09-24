import { type ListArray, type ListItem } from "../../types";

/**
 * @public
 */
export interface FListData {
    selectedItems: ListArray;
    activeItem: ListItem | undefined;
}
