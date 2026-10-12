import {
    type Dataset,
    type DatasetNestedKeyOf,
    datasetSymbol,
} from "./dataset";

/**
 * Metadata about a dataset (entire array).
 *
 * @deprecated Dataset metadata is no longer required; use regular arrays instead.
 * @public
 * @since %version%
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

/**
 * @internal
 */
export function setArrayMetadata<T extends object>(
    array: T[],
    value: DatasetArrayMetadata<T>,
): Dataset<T> {
    return Object.defineProperty(array, datasetSymbol, {
        value,
        enumerable: false,
        configurable: true,
        writable: true,
    }) as Dataset<T>;
}
