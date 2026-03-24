import { getDatasetMetadata } from "./get-dataset-metadata";
import { toDataset } from "./to-dataset";
import { useDatasetRef } from "./use-dataset-ref";

describe("getDatasetMetadata()", () => {
    it("when called with only dataset parameter should return metadata about array", () => {
        expect.assertions(1);
        const dataset = toDataset([{ id: 1 }, { id: 2 }, { id: 3 }]);
        const metadata = getDatasetMetadata(dataset);
        expect(metadata).toEqual({ size: 3 });
    });

    it("when called with element parameter should return metadata about element", () => {
        expect.assertions(4);
        const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const dataset = toDataset(items);
        expect(dataset).toHaveLength(3);
        expect(getDatasetMetadata(dataset[0])).toEqual({
            rowIndex: 0,
            ariaRowIndex: 1,
            ariaLevel: 1,
            ariaSetSize: 3,
            ariaPosInSet: 1,
        });
        expect(getDatasetMetadata(dataset[1])).toEqual({
            rowIndex: 1,
            ariaRowIndex: 2,
            ariaLevel: 1,
            ariaSetSize: 3,
            ariaPosInSet: 2,
        });
        expect(getDatasetMetadata(dataset[2])).toEqual({
            rowIndex: 2,
            ariaRowIndex: 3,
            ariaLevel: 1,
            ariaSetSize: 3,
            ariaPosInSet: 3,
        });
    });

    it("should be persistent after filtering dataset", () => {
        expect.assertions(3);
        const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const dataset = toDataset(items);
        const filtered = toDataset(dataset.filter((item) => item.id !== 2));
        expect(filtered).toHaveLength(2);
        expect(getDatasetMetadata(filtered[0])).toEqual({
            rowIndex: 0,
            ariaRowIndex: 1,
            ariaLevel: 1,
            ariaSetSize: 3,
            ariaPosInSet: 1,
        });
        expect(getDatasetMetadata(filtered[1])).toEqual({
            rowIndex: 2,
            ariaRowIndex: 3,
            ariaLevel: 1,
            ariaSetSize: 3,
            ariaPosInSet: 3,
        });
    });

    it("should throw when element is not in the dataset", () => {
        expect.assertions(1);
        const item = { id: 3 };
        expect(() => getDatasetMetadata(item)).toThrow(
            "Element not found in dataset",
        );
    });

    it("documentation example 1", () => {
        expect.assertions(1);
        const dataset = useDatasetRef([
            { id: 1, name: "Äpple" },
            { id: 2, name: "Banan" },
        ]);
        expect(getDatasetMetadata(dataset.value).size).toBe(2);
    });

    it("documentation example 2", () => {
        expect.assertions(2);
        const dataset = useDatasetRef([
            { id: 1, name: "Äpple" },
            { id: 2, name: "Banan" },
        ]);
        expect(getDatasetMetadata(dataset.value[0]).ariaRowIndex).toBe(1);
        expect(getDatasetMetadata(dataset.value[1]).ariaRowIndex).toBe(2);
    });
});
