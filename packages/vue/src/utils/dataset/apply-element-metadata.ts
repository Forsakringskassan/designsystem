import { datasetSymbol } from "./dataset";
import { type DatasetElementMetadata } from "./dataset-element-metadata";
import { type DatasetUpdateMode } from "./with-dataset-behaviour";

function assignElementMetadata(
    element: object,
    index: number,
    totalSize: number,
): void {
    const value: DatasetElementMetadata = {
        rowIndex: index,
        ariaRowIndex: index + 1,
        ariaLevel: 1,
        ariaSetSize: totalSize,
        ariaPosInSet: index + 1,
    };
    Object.defineProperty(element, datasetSymbol, {
        value,
        enumerable: false,
        configurable: true,
        writable: true,
    });
}

function reindexDataset(dataset: object[]): void {
    for (let i = 0; i < dataset.length; i++) {
        assignElementMetadata(dataset[i], i, dataset.length);
    }
}

function preserveDataset(dataset: object[]): void {
    for (let i = 0; i < dataset.length; i++) {
        if (!Object.getOwnPropertyDescriptor(dataset[i], datasetSymbol)) {
            assignElementMetadata(dataset[i], i, dataset.length);
        }
    }
}

/**
 * @internal
 */
export function applyElementMetadata(
    dataset: object[],
    mode: DatasetUpdateMode,
): void {
    switch (mode) {
        case "reindex":
            reindexDataset(dataset);
            break;
        case "preserve":
            preserveDataset(dataset);
            break;
    }
}
