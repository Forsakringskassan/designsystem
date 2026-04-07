/**
 * Extracts the keys of `T` whose value type is assignable to `T[]`.
 * Used to constrain the `nestedAttribute` parameter to only keys that
 * actually hold a nested array of the same type.
 *
 * @public
 * @since v6.41.0
 */
export type DatasetNestedKeyOf<T> = {
    [K in keyof T]: NonNullable<T[K]> extends T[] ? K : never;
}[keyof T];

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
