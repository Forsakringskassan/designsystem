import { type Dataset, datasetSymbol } from "./dataset";
import { isDataset } from "./is-dataset";

/**
 * Creates a dataset from an array.
 *
 * @internal
 * @since v6.39.0
 */
export function toDataset<T extends object>(dataset: T[]): Dataset<T> {
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
