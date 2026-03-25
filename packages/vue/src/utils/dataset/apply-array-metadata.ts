import { type Dataset, datasetSymbol } from "./dataset";
import { type DatasetArrayMetadata } from "./dataset-array-metadata";

/**
 * @internal
 */
export function applyArrayMetadata<T extends object>(
    array: T[],
): asserts array is Dataset<T> {
    const value: DatasetArrayMetadata = {
        get size() {
            return array.length;
        },
    };

    /* The `Dataset<T>` interface declares branding with an opaque marker
     * `[datasetSymbol]: true`. The actual runtime value is an object which
     * satisfies the truthy branding. Code should use `isDataset()` to test if
     * an array is actually a `Dataset<T>` or `getDatasetMetadata()` to retrieve
     * the metadata. */
    Object.defineProperty(array, datasetSymbol, {
        value,
        enumerable: false,
        configurable: true,
        writable: true,
    });
}
