import { type Dataset, type DatasetNestedKeyOf } from "./dataset";
import { setElementMetadata } from "./dataset-element-metadata";
import { getArrayMetadata, getElementMetadata } from "./get-dataset-metadata";

function assignElementMetadata(options: {
    element: object;
    index: number;
    ariaRowIndex: number;
    totalSize: number;
    ariaLevel: number;
}): void {
    const { element, index, ariaRowIndex, totalSize, ariaLevel } = options;
    setElementMetadata(element, {
        rowIndex: index,
        ariaRowIndex,
        ariaLevel,
        ariaSetSize: totalSize,
        ariaPosInSet: index + 1,
    });
}

function applyElementMetadata<T extends object>(
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
        const metadata = getElementMetadata(element);
        if (!metadata) {
            rowCounter.value++;
            assignElementMetadata({
                element,
                index: i,
                ariaRowIndex: rowCounter.value,
                totalSize: array.length,
                ariaLevel: depth,
            });
        }

        if (nestedAttribute) {
            const nested = element[nestedAttribute] as T[];
            if (Array.isArray(nested) && nested.length > 0) {
                applyElementMetadata(nested, nestedAttribute, {
                    depth: depth + 1,
                    rowCounter,
                });
            }
        }
    }
}

/**
 * Applies metadata to new elements only. All elements with existing metadata is
 * preserved.
 *
 * @internal
 */
export function preserveDataset<T extends object>(dataset: Dataset<T>): void {
    const { size, nestedAttribute } = getArrayMetadata(dataset);
    applyElementMetadata(dataset, nestedAttribute, {
        depth: 1,
        /* when new elements are detected the rowindex will start att current
         * size instead of starting over at 0 */
        rowCounter: { value: size },
    });
}
