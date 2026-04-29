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
    registerCallbackAfterItemAdd(
        this: void,
        callback: ActivateItemCallback<T>,
    ): void;
    // When an item is deleted the item above it should be set to active and have focus.
    registerCallbackBeforeItemDelete(
        this: void,
        callback: ActivateItemCallback<T>,
    ): void;
    // Set key for nested items to enable deletion.
    setNestedKey(this: void, key: keyof T | null | undefined): void;
}

/**
 * @public
 */
export function ActivateItemInjected<T>(): ActivateItemInterface<T> {
    return {
        registerCallbackAfterItemAdd: inject(
            "registerCallbackAfterItemAdd",
            () => undefined,
        ),
        registerCallbackBeforeItemDelete: inject(
            "registerCallbackBeforeItemDelete",
            () => undefined,
        ),
        setNestedKey: inject("setNestedKey", () => undefined),
    };
}
