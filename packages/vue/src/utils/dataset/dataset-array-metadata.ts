import {
    type Dataset,
    type DatasetNestedKeyOf,
    datasetSymbol,
} from "./dataset";
import { type ElementMetadataStore } from "./dataset-element-metadata";

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

/**
 * Internal shape of `DatasetArrayMetadata` that additionally carries the
 * store used to look up element metadata scoped to this dataset lineage.
 * The `elements` field is kept non-enumerable so it is not exposed through
 * the public `getDatasetMetadata()` spread.
 *
 * @internal
 */
export interface InternalDatasetArrayMetadata<
    T,
> extends DatasetArrayMetadata<T> {
    readonly elements: ElementMetadataStore;
}

/**
 * @internal
 */
export function setArrayMetadata<T extends object>(
    array: T[],
    value: DatasetArrayMetadata<T>,
    elements: ElementMetadataStore,
): Dataset<T> {
    Object.defineProperty(value, "elements", {
        value: elements,
        enumerable: false,
        configurable: true,
        writable: false,
    });
    return Object.defineProperty(array, datasetSymbol, {
        value,
        enumerable: false,
        configurable: true,
        writable: true,
    }) as Dataset<T>;
}
