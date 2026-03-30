import { type DatasetNestedKeyOf } from "./dataset";

/**
 * Metadata about a dataset (entire array).
 *
 * @public
 * @since v6.40.0
 */
export interface DatasetArrayMetadata<T> {
    /** Total original number of elements in the dataset. */
    readonly size: number;

    /**
     * If the dataset was created with a nested attribute this is the attribute
     * key used for looking up nested arrays
     */
    readonly nestedAttribute: DatasetNestedKeyOf<T> | undefined;
}
