import { type ListArray, type ListItem } from "../../types";
import { Operation } from "./operation";

/**
 * @public
 */
export interface FCrudDatasetData {
    result: ListArray;
    Operation: typeof Operation;
    operation: Operation;
    item: null | ListItem;
    originalItemToUpdate: null | ListItem;
    isFormModalOpen: boolean;
    isConfirmModalOpen: boolean;
    callbackAfterItemAdd(item: ListItem): void;
    callbackBeforeItemDelete(item: ListItem): void;
}
