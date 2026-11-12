import { type ListItem } from "../../types";

/**
 * @public
 */
export interface FCrudDatasetInterface {
    delete(item: ListItem): void;
    modify(item: ListItem): void;
}
