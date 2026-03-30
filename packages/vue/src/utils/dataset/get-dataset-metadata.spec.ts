import { getDatasetMetadata } from "./get-dataset-metadata";
import { toDataset } from "./to-dataset";
import { rowindex, treeSnapshot } from "./tree-snapshot";
import { useDatasetRef } from "./use-dataset-ref";

expect.addSnapshotSerializer({
    test(value) {
        return typeof value === "string";
    },
    serialize(value) {
        return String(value);
    },
});

describe("getDatasetMetadata()", () => {
    it("when called with only dataset parameter should return metadata about array", () => {
        expect.assertions(1);
        const dataset = toDataset([{ id: 1 }, { id: 2 }, { id: 3 }], undefined);
        const metadata = getDatasetMetadata(dataset);
        expect(metadata).toEqual({ size: 3, nestedAttribute: undefined });
    });

    it("when called with element parameter should return metadata about element", () => {
        expect.assertions(4);
        const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const dataset = toDataset(items, undefined);
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
        expect.assertions(2);
        const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const dataset = toDataset(items, undefined);
        const filtered = toDataset(
            dataset.filter((item) => item.id !== 2),
            undefined,
        );
        const before = treeSnapshot(dataset, rowindex);
        const after = treeSnapshot(filtered, rowindex);
        expect(before).toMatchInlineSnapshot(`
            length=3 size=3
            ├─ id:1 row-index=0
            ├─ id:2 row-index=1
            └─ id:3 row-index=2
        `);
        expect(after).toMatchInlineSnapshot(`
            length=2 size=2
            ├─ id:1 row-index=0
            └─ id:3 row-index=2
        `);
    });

    it("should return undefined when used when creating the dataset without nested rows", () => {
        expect.assertions(1);
        const rows = [{ id: 1, nested: [] }];
        const dataset = toDataset(rows, undefined);
        const metadata = getDatasetMetadata(dataset);
        expect(metadata).toEqual(
            expect.objectContaining({ nestedAttribute: undefined }),
        );
    });

    it("should return the nested attribute used when creating the dataset", () => {
        expect.assertions(1);
        const rows = [{ id: 1, nested: [] }];
        const dataset = toDataset(rows, "nested");
        const metadata = getDatasetMetadata(dataset);
        expect(metadata).toEqual(
            expect.objectContaining({ nestedAttribute: "nested" }),
        );
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
