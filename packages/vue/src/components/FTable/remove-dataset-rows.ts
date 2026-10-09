import { type MaybeRef, toValue } from "vue";
import {
    type Dataset,
    type DatasetNestedKeyOf,
    getDatasetMetadata,
} from "../../utils";
import { isDataset } from "../../utils/dataset";
import { removeTableRows } from "./remove-table-rows";

/**
 * Removes given row(s) from an existing dataset or table row array.
 *
 * Note: The array is mutated.
 *
 * Note: When passing a non-dataset array, it won't be able to remove nested rows (use `removeTableRows` in this case).
 *
 * @public
 * @since v6.44.0
 * @param dataset - The row array or dataset
 * @param rows - The row(s) to remove (expected to exist in the row array)
 */
export function removeDatasetRows<T extends object>(
    dataset: MaybeRef<Dataset<T> | T[]>,
    rows: MaybeRef<T | T[]>,
): void {
    const datasetValue = toValue(dataset);
    const rowsValue = toValue(rows);

    if (!isDataset(datasetValue)) {
        removeTableRows(datasetValue, rowsValue);
        return;
    }

    const nestedAttribute = getDatasetMetadata(datasetValue).nestedAttribute;
    const normalizedRows = Array.isArray(rowsValue) ? rowsValue : [rowsValue];

    for (const row of normalizedRows) {
        removeRow(datasetValue, row, nestedAttribute);
    }
}

function removeRow<T>(
    dataset: T[],
    row: T,
    nestedAttribute?: DatasetNestedKeyOf<T>,
): void {
    const rowIndex = dataset.indexOf(row);
    if (rowIndex !== -1) {
        dataset.splice(rowIndex, 1);
    } else if (nestedAttribute) {
        removeNestedRows(dataset, row, nestedAttribute);
    }
}

function removeNestedRows<T>(
    dataset: T[],
    row: T,
    nestedAttribute: DatasetNestedKeyOf<T>,
): void {
    for (const currentRow of dataset) {
        const nestedRows = currentRow[nestedAttribute];
        if (!Array.isArray(nestedRows)) {
            continue;
        }
        const index = nestedRows.indexOf(row);
        if (index !== -1) {
            nestedRows.splice(index, 1);
        }
    }
}
