import { type Dataset } from "./dataset";
import { type DatasetElementMetadata } from "./dataset-element-metadata";
import { getDatasetMetadata } from "./get-dataset-metadata";

function* datasetGenerator<T extends object>(
    array: T[],
    nestedAttribute: keyof T | undefined,
): Generator<{ item: T; metadata: DatasetElementMetadata }> {
    for (const item of array) {
        yield { item, metadata: getDatasetMetadata(item) };
        if (nestedAttribute) {
            const nested = item[nestedAttribute];
            if (Array.isArray(nested)) {
                yield* datasetGenerator(nested, nestedAttribute);
            }
        }
    }
}

/**
 * Returns an iterator over the elements of a dataset, yielding each element
 * together with its metadata.
 *
 * @public
 * @since v6.42.0
 * @param dataset - The dataset to iterate over.
 * @param options - Options controlling iteration behaviour. Set `flat` to
 *   `true` to yield nested rows in depth-first pre-order after their parent.
 */
export function* datasetIterator<T extends object>(
    dataset: Dataset<T>,
    options?: { flat?: boolean },
): Generator<{ item: T; metadata: DatasetElementMetadata }> {
    const { flat = false } = options ?? {};
    const arrayMeta = getDatasetMetadata(dataset);
    const nestedAttribute = flat ? arrayMeta.nestedAttribute : undefined;
    yield* datasetGenerator(dataset, nestedAttribute);
}
