import { type Dataset, datasetSymbol } from "./dataset";
import { type DatasetArrayMetadata } from "./dataset-array-metadata";
import { type DatasetElementMetadata } from "./dataset-element-metadata";

function getArrayMetadata<T extends object>(
    dataset: Dataset<T>,
): DatasetArrayMetadata<T>;
function getArrayMetadata<T extends object>(
    dataset: T[],
): DatasetArrayMetadata<T> | undefined;
function getArrayMetadata<T extends object>(
    dataset: T[] | Dataset<T>,
): DatasetArrayMetadata<T> | undefined {
    const descriptor = Object.getOwnPropertyDescriptor(dataset, datasetSymbol);
    return descriptor?.value as DatasetArrayMetadata<T> | undefined;
}

function getElementMetadata(
    dataset: object,
): DatasetElementMetadata | undefined {
    const descriptor = Object.getOwnPropertyDescriptor(dataset, datasetSymbol);
    return descriptor?.value as DatasetElementMetadata | undefined;
}

/**
 * Returns metadata about a dataset.
 *
 * @public
 * @since v6.40.0
 */
export function getDatasetMetadata<T extends object>(
    dataset: Dataset<T>,
): DatasetArrayMetadata<T>;

/**
 * Returns metadata about an element within a dataset.
 *
 * @public
 * @since v6.40.0
 */
export function getDatasetMetadata(element: object): DatasetElementMetadata;

export function getDatasetMetadata<T extends object>(
    item: T | Dataset<T>,
): DatasetArrayMetadata<T> | DatasetElementMetadata {
    if (Array.isArray(item)) {
        const metadata = getArrayMetadata(item);
        return Object.freeze({ ...metadata });
    } else {
        const metadata = getElementMetadata(item);
        if (!metadata) {
            throw new Error("Element not found in dataset");
        }
        return Object.freeze({ ...metadata });
    }
}
