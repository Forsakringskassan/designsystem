/**
 * Controls how element metadata is handled when `toDataset()` writes to an
 * array whose elements already carry metadata from a previous dataset.
 *
 * - `"preserve"` – existing element metadata is kept as-is; only elements
 *   that have no metadata yet are indexed.
 * - `"reindex"` – every element's metadata is recalculated based on its
 *   current position in the new array.
 *
 * @public
 * @since %version%
 */
export type DatasetUpdateMode = "preserve" | "reindex";

let _currentMode: DatasetUpdateMode = "preserve";

/**
 * Returns the currently active dataset update mode.
 *
 * @internal
 */
export function getCurrentDatasetMode(): DatasetUpdateMode {
    return _currentMode;
}

/**
 * Executes `callback` while the given dataset-update mode is active.
 *
 * The mode is restored to its previous value when the callback returns,
 * so calls can be safely nested.
 *
 * @public
 * @since %version%
 */
export function withDatasetBehaviour<T>(
    mode: DatasetUpdateMode,
    callback: () => T,
): T;

/**
 * Executes `callback` while the given dataset-update mode is active.
 *
 * The mode is restored to its previous value when the returned `Promise`
 * settles, so sequential `await`ed calls can be safely nested.
 *
 * Note: concurrent async calls are not supported.
 *
 * @public
 * @since %version%
 */
export function withDatasetBehaviour<T>(
    mode: DatasetUpdateMode,
    callback: () => Promise<T>,
): Promise<T>;

export function withDatasetBehaviour<T>(
    mode: DatasetUpdateMode,
    callback: () => T | Promise<T>,
): T | Promise<T> {
    const previous = _currentMode;
    _currentMode = mode;
    let result: T | Promise<T>;
    try {
        result = callback();
    } catch (error) {
        _currentMode = previous;
        throw error;
    }
    if (result instanceof Promise) {
        return result.finally(() => {
            _currentMode = previous;
        });
    }
    _currentMode = previous;
    return result;
}
