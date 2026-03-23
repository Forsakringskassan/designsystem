export const datasetSymbol: unique symbol = Symbol("dataset");

/**
 * Dataset contains row metadata for components such as `FSortFilterDataset`
 * and `FTable`.
 *
 * Use `useDatasetRef()` to create a new dataset.
 *
 * @public
 * @since v6.39.0
 */
export type Dataset<T extends object> = T[] & {
    readonly [datasetSymbol]: true;

    /**
     * Type tag for better type inference. Not used at runtime.
     *
     * @internal
     */
    readonly __type: T;
};
