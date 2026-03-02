import { inject } from "vue";

/**
 * @public
 * @param attribute - is the field that got sorted
 * @param ascending - is the order the fields got sorted
 */
export type FSortFilterDatasetSortCallback<TKeys = PropertyKey> = (
    attribute: TKeys,
    ascending: boolean,
) => void;

/**
 * @public
 */
export type FSortFilterDatasetMountCallback<TKeys = PropertyKey> = (
    columnNames: TKeys[],
) => void;

/**
 * This interface can be implemented (provided) by Vue components
 * supporting filtering. Not required.
 *
 * @public
 */
export interface FSortFilterDatasetInterface<TKeys = PropertyKey> {
    /**
     * Sort the dataset
     * @param attribute - is the field that gets sorted
     * @param ascending - is the order the fields get sorted
     */
    sort(this: void, attribute: TKeys, ascending: boolean): void;

    /**
     * Callback function that is called when dataset get sorted
     */
    registerCallbackOnSort(
        this: void,
        callback: FSortFilterDatasetSortCallback<TKeys>,
    ): void;

    /**
     * Called when FSortFilterDataset is mounted.
     * Returns the sortable field names.
     */
    registerCallbackOnMount(
        this: void,
        callback: FSortFilterDatasetMountCallback<TKeys>,
    ): void;
}

/**
 * Empty dummy methods to be used when no FSortFilterDataset is used
 *
 * @public
 */
export function FSortFilterDatasetInjected<
    TKeys = PropertyKey,
>(): FSortFilterDatasetInterface<TKeys> {
    return {
        sort: inject("sort", () => undefined) as (
            attribute: TKeys,
            ascending: boolean,
        ) => void,
        registerCallbackOnSort: inject(
            "registerCallbackOnSort",
            () => undefined,
        ) as (callback: FSortFilterDatasetSortCallback<TKeys>) => void,
        registerCallbackOnMount: inject(
            "registerCallbackOnMount",
            () => undefined,
        ) as (callback: FSortFilterDatasetMountCallback<TKeys>) => void,
    };
}
