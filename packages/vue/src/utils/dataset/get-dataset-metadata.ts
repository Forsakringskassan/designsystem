import { toRaw } from "vue";
import { type Dataset, datasetSymbol } from "./dataset";
import {
    type DatasetArrayMetadata,
    type InternalDatasetArrayMetadata,
} from "./dataset-array-metadata";
import { type DatasetElementMetadata } from "./dataset-element-metadata";

/**
 * @internal
 */
export function getArrayMetadata<T extends object>(
    dataset: Dataset<T>,
): InternalDatasetArrayMetadata<T>;

/**
 * @internal
 */
export function getArrayMetadata<T extends object>(
    dataset: T[],
): InternalDatasetArrayMetadata<T> | undefined;

/**
 * @internal
 */
export function getArrayMetadata<T extends object>(
    dataset: T[] | Dataset<T>,
): InternalDatasetArrayMetadata<T> | undefined {
    const descriptor = Object.getOwnPropertyDescriptor(dataset, datasetSymbol);
    return descriptor?.value as InternalDatasetArrayMetadata<T> | undefined;
}

/**
 * Reads element metadata scoped to the specific dataset that owns it, so
 * elements shared between unrelated datasets do not clash. Used internally
 * by components (e.g. `FTable`) that already have the owning dataset at hand.
 *
 * @internal
 */
export function getRowMetadata<T extends object>(
    dataset: Dataset<T>,
    row: T,
): DatasetElementMetadata {
    const { elements } = getArrayMetadata(dataset);
    const metadata = elements.get(toRaw(row));
    if (!metadata) {
        throw new Error("Element not found in dataset");
    }
    return metadata;
}

/**
 * Best-effort fallback lookup used by the public single-argument
 * `getDatasetMetadata()` when the owning dataset is not known. Reads the
 * metadata last stamped directly on the element, which may be incorrect if
 * the element is shared between unrelated datasets.
 *
 * @internal
 */
export function getElementMetadata(
    element: object,
): DatasetElementMetadata | undefined {
    const descriptor = Object.getOwnPropertyDescriptor(element, datasetSymbol);
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
    }
    const metadata = getElementMetadata(item);
    if (!metadata) {
        throw new Error("Element not found in dataset");
    }
    return Object.freeze({ ...metadata });
}
