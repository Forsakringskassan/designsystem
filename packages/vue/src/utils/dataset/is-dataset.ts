import { type Dataset, datasetSymbol } from "./dataset";

/**
 * Check if a dataset is a dataset.
 *
 * @internal
 * @since v6.39.0
 */
export function isDataset<T extends object>(
    dataset: T[] | null | undefined,
): dataset is Dataset<T> {
    if (!Array.isArray(dataset)) {
        return false;
    }
    return Boolean(Object.getOwnPropertyDescriptor(dataset, datasetSymbol));
}
