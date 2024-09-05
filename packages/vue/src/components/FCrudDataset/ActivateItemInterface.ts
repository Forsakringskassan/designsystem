import { inject } from "vue";
import { ListItem } from "../../types";

/**
 * @public
 */
export type ActivateItemCallback = (item: ListItem) => void;

/**
 * @public
 */
export interface ActivateItemInterface {
    // After an item is added it should be active
    registerCallbackAfterItemAdd(callback: ActivateItemCallback): void;
    // When an item is deleted the item above it should be set to active and have focus.
    registerCallbackBeforeItemDelete(callback: ActivateItemCallback): void;
}

/**
 * @public
 */
export function ActivateItemInjected(): ActivateItemInterface {
    return {
        registerCallbackAfterItemAdd: inject(
            "registerCallbackAfterItemAdd",
            () => undefined,
        ) as (callback: ActivateItemCallback) => void,
        registerCallbackBeforeItemDelete: inject(
            "registerCallbackBeforeItemDelete",
            () => undefined,
        ) as (callback: ActivateItemCallback) => void,
    };
}
