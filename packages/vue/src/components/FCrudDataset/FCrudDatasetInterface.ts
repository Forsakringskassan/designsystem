import { inject } from "vue";
import { ListItem } from "../../types";

/**
 * @public
 */
export interface FCrudDatasetInterface {
    delete(item: ListItem): void;
    modify(item: ListItem): void;
}

export function FCrudDatasetInjected(): FCrudDatasetInterface {
    return {
        delete: inject("delete") as (item: ListItem) => void,
        modify: inject("modify") as (item: ListItem) => void,
    };
}
