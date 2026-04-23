import { type MaybeRef, toValue } from "vue";
import {
    type Dataset,
    type DatasetNestedKeyOf,
    getDatasetMetadata,
} from "@fkui/vue";

/**
 * Removes given row(s) from existing dataset.
 *
 * Note: The array is mutated.
 *
 * @public
 * @since %version%
 * @param dataset - The row array
 * @param rows - The row(s) to remove (expected to exist in the dataset)
 */
export function removeDatasetRows<T extends object>(
    dataset: MaybeRef<Dataset<T>>,
    rows: MaybeRef<T | T[]>,
): void {
    const datasetValue = toValue(dataset);
    const rowsValue = toValue(rows);
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
        if (Array.isArray(nestedRows)) {
            const index = nestedRows.indexOf(row);
            if (index !== -1) {
                nestedRows.splice(index, 1);
            }
        }
    }
}
