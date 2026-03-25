import { applyArrayMetadata } from "./apply-array-metadata";
import { applyElementMetadata } from "./apply-element-metadata";
import { type Dataset } from "./dataset";
import { isDataset } from "./is-dataset";
import { getCurrentDatasetMode } from "./with-dataset-behaviour";

/**
 * Creates a dataset from an array.
 *
 * Each element in the array is annotated with `DatasetElementMetadata`. The
 * exact behaviour depends on the mode returned by `getCurrentDatasetMode()`:
 *
 * - **`"preserve"`** (default): Elements that already carry metadata keep their
 *   existing values; only elements without metadata are annotated for the first
 *   time.  This means elements retain their original position information when
 *   a subset is created (e.g. by calling `Array.filter()`).
 *
 * - **`"reindex"`:** `applyElementMetadata` unconditionally overwrites the
 *   metadata of every element in the array, replacing any previously assigned
 *   `rowIndex`, `ariaRowIndex`, etc. with values derived from the elements
 *   current position.
 *
 * Reusing element references across **unrelated** datasets is not supported and
 * will produce incorrect metadata in the second dataset.
 *
 * @internal
 * @since v6.39.0
 */
export function toDataset<T extends object>(array: T[]): Dataset<T> {
    if (isDataset(array)) {
        return array;
    }

    const mode = getCurrentDatasetMode();

    applyArrayMetadata(array);
    applyElementMetadata(array, mode);

    return array;
}
