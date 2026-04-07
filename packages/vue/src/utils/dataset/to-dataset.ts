import { type Dataset, type DatasetNestedKeyOf } from "./dataset";
import { setArrayMetadata } from "./dataset-array-metadata";
import { getDatasetMetadata } from "./get-dataset-metadata";
import { isDataset } from "./is-dataset";
import { preserveDataset } from "./preserve-dataset";
import { reindexDataset } from "./reindex-dataset";

function createDataset<T extends object>(
    array: T[],
    nestedAttribute: DatasetNestedKeyOf<T> | undefined,
): Dataset<T> {
    setArrayMetadata(array, {
        size: 0, // intermediate value, will be overwritten when reindexing
        nestedAttribute,
    });
    const dataset = array as Dataset<T>;

    reindexDataset(dataset, nestedAttribute);

    return dataset;
}

function inheritDataset<T extends object>(
    array: T[],
    originalDataset: Dataset<T>,
): Dataset<T> {
    const metadata = getDatasetMetadata(originalDataset);

    const result = setArrayMetadata(array, {
        get size() {
            return metadata.size;
        },
        get nestedAttribute() {
            return metadata.nestedAttribute;
        },
    });

    preserveDataset(result);

    return result;
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
 * As a convenience, this function accepts a regular `T[]` but passing a
 * non-dataset argument will create a new dataset without retaining any element
 * metadata, i.e. behave as if no original dataset was passed.
 *
 * Note: the new dataset must be a subset of the original dataset, that is all
 * the elements passed into the new array or dataset must exist in the original.
 *
 * @internal
 * @since v6.41.0
 */
export function toDataset<T extends object>(
    dataset: T[],
    originalDataset: Dataset<T> | T[],
): Dataset<T>;

export function toDataset<T extends object>(
    array: T[],
    ...args:
        | [nestedAttribute?: DatasetNestedKeyOf<T>]
        | [originalDataset: Dataset<T> | T[]]
): Dataset<T> {
    if (isDataset(array)) {
        return array;
    }

    const [arg] = args;
    if (Array.isArray(arg)) {
        if (isDataset(arg)) {
            return inheritDataset(array, arg);
        } else {
            return createDataset(array, undefined);
        }
    } else {
        return createDataset(array, arg);
    }
}
