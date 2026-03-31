import {
    type Dataset,
    type DatasetNestedKeyOf,
    datasetSymbol,
} from "./dataset";
import { type DatasetArrayMetadata } from "./dataset-array-metadata";
import { type DatasetElementMetadata } from "./dataset-element-metadata";
import { getDatasetMetadata } from "./get-dataset-metadata";
import { isDataset } from "./is-dataset";

function createDataset<T extends object>(
    array: T[],
    nestedAttribute: DatasetNestedKeyOf<T> | undefined,
): Dataset<T> {
    for (const [index, element] of array.entries()) {
        if (Object.getOwnPropertyDescriptor(element, datasetSymbol)) {
            continue;
        }
        Object.defineProperty(element, datasetSymbol, {
            value: {
                rowIndex: index,
                ariaRowIndex: index + 1,
                ariaLevel: 1,
                ariaSetSize: array.length,
                ariaPosInSet: index + 1,
            } satisfies DatasetElementMetadata,
            enumerable: false,
            configurable: true,
            writable: true,
        });
    }

    const value: DatasetArrayMetadata<T> = {
        size: array.length,
        nestedAttribute,
    };

    /* The `Dataset<T>` interface declares branding with an opaque marker
     * `[datasetSymbol]: true`. The actual runtime value is an object which
     * satisfies the truthy branding. Code should use `isDataset()` to test if
     * an array is actually a `Dataset<T>` or `getDatasetMetadata()` to retrieve
     * the metadata. */
    return Object.defineProperty(array, datasetSymbol, {
        value,
        enumerable: false,
        configurable: true,
        writable: true,
    }) as Dataset<T>;
}

function inheritDataset<T extends object>(
    array: T[],
    originalDataset: Dataset<T>,
): Dataset<T> {
    const metadata = getDatasetMetadata(originalDataset);

    const value: DatasetArrayMetadata<T> = {
        get size() {
            return metadata.size;
        },
        get nestedAttribute() {
            return metadata.nestedAttribute;
        },
    };

    return Object.defineProperty(array, datasetSymbol, {
        value,
        enumerable: false,
        configurable: false,
        writable: false,
    }) as Dataset<T>;
}

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
    array: T[],
    nestedAttribute?: DatasetNestedKeyOf<T>,
): Dataset<T>;

/**
 * Creates a dataset based on another existing dataset.
 *
 * @internal
 * @since %version%
 */
export function toDataset<T extends object>(
    dataset: T[],
    originalDataset: Dataset<T>,
): Dataset<T>;

export function toDataset<T extends object>(
    array: T[],
    ...args:
        | [nestedAttribute?: DatasetNestedKeyOf<T>]
        | [originalDataset: Dataset<T>]
): Dataset<T> {
    if (isDataset(array)) {
        return array;
    }

    const [arg] = args;
    if (Array.isArray(arg)) {
        return inheritDataset(array, arg);
    } else {
        return createDataset(array, arg);
    }
}
