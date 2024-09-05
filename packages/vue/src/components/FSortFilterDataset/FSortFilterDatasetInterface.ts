import { inject } from "vue";

/**
 * @public
 * @param attribute - is the field that got sorted
 * @param ascending - is the order the fields got sorted
 */
export type FSortFilterDatasetSortCallback = (
    attribute: string,
    ascending: boolean,
) => void;

/**
 * @public
 */
export type FSortFilterDatasetMountCallback = (columnNames: string[]) => void;

/**
 * This interface can be implemented (provided) by Vue components
 * supporting filtering. Not required.
 *
 * @public
 */
export interface FSortFilterDatasetInterface {
    /**
     * Sort the dataset
     * @param attribute - is the field that gets sorted
     * @param ascending - is the order the fields get sorted
     */
    sort(attribute: string, ascending: boolean): void;

    /**
     * Callback function that is called when dataset get sorted
     */
    registerCallbackOnSort(callback: FSortFilterDatasetSortCallback): void;

    /**
     * Called when FSortFilterDataset is mounted.
     * Returns the sortable field names.
     */
    registerCallbackOnMount(callback: FSortFilterDatasetMountCallback): void;
}

/**
 * Empty dummy methods to be used when no FSortFilterDataset is used
 *
 * @public
 */
export function FSortFilterDatasetInjected(): FSortFilterDatasetInterface {
    return {
        sort: inject("sort", () => undefined) as (
            attribute: string,
            ascending: boolean,
        ) => void,
        registerCallbackOnSort: inject(
            "registerCallbackOnSort",
            () => undefined,
        ) as (callback: FSortFilterDatasetSortCallback) => void,
        registerCallbackOnMount: inject(
            "registerCallbackOnMount",
            () => undefined,
        ) as (callback: FSortFilterDatasetMountCallback) => void,
    };
}
