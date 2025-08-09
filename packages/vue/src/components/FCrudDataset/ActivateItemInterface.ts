import { inject } from "vue";

/**
 * @public
 */
export type ActivateItemCallback<T> = (item: T) => void;

/**
 * @public
 */
export interface ActivateItemInterface<T> {
    // After an item is added it should be active
    registerCallbackAfterItemAdd(callback: ActivateItemCallback<T>): void;
    // When an item is deleted the item above it should be set to active and have focus.
    registerCallbackBeforeItemDelete(callback: ActivateItemCallback<T>): void;
    // Set key for nested items to enable deletion.
    setNestedKey(key: keyof T): void;
}

/**
 * @public
 */
export function ActivateItemInjected<T>(): ActivateItemInterface<T> {
    return {
        registerCallbackAfterItemAdd: inject(
            "registerCallbackAfterItemAdd",
            () => undefined,
        ) as (callback: ActivateItemCallback<T>) => void,
        registerCallbackBeforeItemDelete: inject(
            "registerCallbackBeforeItemDelete",
            () => undefined,
        ) as (callback: ActivateItemCallback<T>) => void,
        setNestedKey: inject("setNestedKey", () => undefined) as (
            key: keyof T,
        ) => void,
    };
}
