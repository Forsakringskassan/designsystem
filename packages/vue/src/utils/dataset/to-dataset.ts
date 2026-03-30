import {
    type Dataset,
    type DatasetNestedKeyOf,
    datasetSymbol,
} from "./dataset";
import { type DatasetArrayMetadata } from "./dataset-array-metadata";
import { type DatasetElementMetadata } from "./dataset-element-metadata";
import { isDataset } from "./is-dataset";

/**
 * Creates a dataset from an array.
 *
 * Each element in the array is annotated with `DatasetElementMetadata` the
 * first time it is added to a dataset.  Subsequent calls to `toDataset()` that
 * include the same element reference will **not** overwrite its existing
 * metadata. This means that elements retain their original position information
 * when a subset is created (e.g. by calling `Array.filter()`).
 *
 * Reusing element references across **unrelated** datasets is not supported and
 * will produce incorrect metadata in the second dataset.
 *
 * @internal
 * @since v6.39.0
 */
export function toDataset<T extends object>(
    dataset: T[],
    nestedAttribute: DatasetNestedKeyOf<T> | undefined,
): Dataset<T> {
    if (isDataset(dataset)) {
        return dataset;
    }

    for (const [index, element] of dataset.entries()) {
        if (Object.getOwnPropertyDescriptor(element, datasetSymbol)) {
            continue;
        }
        Object.defineProperty(element, datasetSymbol, {
            value: {
                rowIndex: index,
                ariaRowIndex: index + 1,
                ariaLevel: 1,
                ariaSetSize: dataset.length,
                ariaPosInSet: index + 1,
            } satisfies DatasetElementMetadata,
            enumerable: false,
            configurable: true,
            writable: true,
        });
    }

    const value: DatasetArrayMetadata<T> = {
        size: dataset.length,
        nestedAttribute,
    };

    /* The `Dataset<T>` interface declares branding with an opaque marker
     * `[datasetSymbol]: true`. The actual runtime value is an object which
     * satisfies the truthy branding. Code should use `isDataset()` to test if
     * an array is actually a `Dataset<T>` or `getDatasetMetadata()` to retrieve
     * the metadata. */
    return Object.defineProperty(dataset, datasetSymbol, {
        value,
        enumerable: false,
        configurable: true,
        writable: true,
    }) as Dataset<T>;
}
