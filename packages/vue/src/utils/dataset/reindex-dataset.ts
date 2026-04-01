import { type Dataset, type DatasetNestedKeyOf } from "./dataset";
import { setArrayMetadata } from "./dataset-array-metadata";
import { setElementMetadata } from "./dataset-element-metadata";
import { getSize } from "./get-size";

function reindex<T extends object>(
    array: T[],
    nestedAttribute: DatasetNestedKeyOf<T> | undefined,
    options: {
        depth: number;
        rowCounter: { value: number };
    },
): void {
    const { depth, rowCounter } = options;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        setElementMetadata(element, {
            rowIndex: rowCounter.value,
            ariaRowIndex: rowCounter.value + 1,
            ariaLevel: depth + 1,
            ariaSetSize: array.length,
            ariaPosInSet: i + 1,
        });
        rowCounter.value++;

        if (nestedAttribute) {
            const nested = element[nestedAttribute] as T[];
            if (Array.isArray(nested)) {
                reindex(nested, nestedAttribute, {
                    depth: depth + 1,
                    rowCounter,
                });
            }
        }
    }
}

/**
 * @internal
 */
export function reindexDataset<T extends object>(
    dataset: Dataset<T>,
    nestedAttribute: DatasetNestedKeyOf<T> | undefined,
): void {
    setArrayMetadata(dataset, {
        size: getSize(dataset, nestedAttribute),
        nestedAttribute,
    });
    reindex(dataset, nestedAttribute, {
        depth: 0,
        rowCounter: { value: 0 },
    });
}
