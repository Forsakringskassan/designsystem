import { type Ref, ref } from "vue";

const datasetSymbol = Symbol("dataset");

/**
 * Dataset contains row metadata for components such as `FSortFilterDataset`
 * and `FTable`.
 *
 * Use `useDatasetRef()` to create a new dataset.
 *
 * @public
 * @since v6.39.0
 */
export type Dataset<T> = T[] & {
    readonly [datasetSymbol]: true;

    /**
     * Type tag for better type inference. Not used at runtime.
     *
     * @internal
     */
    readonly __type: T;
};

/**
 * Check if a dataset is a dataset.
 *
 * @internal
 * @since v6.39.0
 */
export function isDataset<T>(
    dataset: T[] | null | undefined,
): dataset is Dataset<T> {
    if (!Array.isArray(dataset)) {
        return false;
    }
    const descriptor = Object.getOwnPropertyDescriptor(dataset, datasetSymbol);
    return descriptor?.value === true;
}

/**
 * Creates a dataset from an array.
 *
 * @internal
 * @since v6.39.0
 */
export function toDataset<T>(dataset: T[]): Dataset<T> {
    if (isDataset(dataset)) {
        return dataset;
    }
    return Object.defineProperty(dataset, datasetSymbol, {
        value: true,
        enumerable: false,
        configurable: false,
        writable: false,
    }) as Dataset<T>;
}

/**
 * Creates a dataset as a Vue ref.
 *
 * @public
 * @since v6.39.0
 */
export function useDatasetRef<T>(initial?: T[]): Ref<Dataset<T>> {
    return ref(toDataset(initial ?? [])) as Ref<Dataset<T>>;
}
