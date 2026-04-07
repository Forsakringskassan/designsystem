import { type DatasetElementMetadata } from "./dataset-element-metadata";
import { datasetIterator } from "./dataset-iterator";
import { toDataset } from "./to-dataset";
import { useDatasetRef } from "./use-dataset-ref";

interface Row {
    id: number;
    children?: Row[];
}

expect.addSnapshotSerializer({
    test(value) {
        return typeof value === "string";
    },
    serialize(value) {
        return String(value);
    },
});

function rowindex({
    item,
    metadata,
}: {
    item: { id: unknown };
    metadata: DatasetElementMetadata;
}): string {
    return `id:${item.id} rowIndex=${metadata.rowIndex}`;
}

describe("datasetIterator()", () => {
    it("should yield top-level items with their metadata", () => {
        expect.assertions(1);
        const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const dataset = toDataset(items, undefined);
        const result = Array.from(datasetIterator(dataset), rowindex);
        expect(result).toEqual([
            "id:1 rowIndex=0",
            "id:2 rowIndex=1",
            "id:3 rowIndex=2",
        ]);
    });

    it("should not yield nested items when flat is false", () => {
        expect.assertions(1);
        const items: Row[] = [
            { id: 1, children: [{ id: 3 }, { id: 4 }] },
            { id: 2, children: [{ id: 5 }] },
        ];
        const dataset = toDataset(items, "children");
        const result = Array.from(datasetIterator(dataset), rowindex);
        expect(result).toEqual(["id:1 rowIndex=0", "id:2 rowIndex=3"]);
    });

    it("should yield nested items in depth-first order when flat is true", () => {
        expect.assertions(1);
        const items: Row[] = [
            { id: 1, children: [{ id: 3 }, { id: 4 }] },
            { id: 2, children: [{ id: 5 }] },
        ];
        const dataset = toDataset(items, "children");
        const result = Array.from(
            datasetIterator(dataset, { flat: true }),
            rowindex,
        );
        expect(result).toEqual([
            "id:1 rowIndex=0",
            "id:3 rowIndex=1",
            "id:4 rowIndex=2",
            "id:2 rowIndex=3",
            "id:5 rowIndex=4",
        ]);
    });

    it("documentation example 1", () => {
        expect.assertions(3);
        const rows = [
            {
                name: "Äpple",
                nested: [{ name: "Pink Lady" }, { name: "Granny Smith" }],
            },
            {
                name: "Banan",
            },
        ];
        const dataset = useDatasetRef(rows, "nested");

        const array = Array.from(
            datasetIterator(dataset.value),
            ({ metadata, item }) => ({
                ariaRowIndex: metadata.ariaRowIndex,
                name: item.name,
            }),
        );
        expect(array).toHaveLength(2);
        expect(array[0]).toEqual({ ariaRowIndex: 1, name: "Äpple" });
        expect(array[1]).toEqual({ ariaRowIndex: 4, name: "Banan" });
    });

    it("documentation example 2", () => {
        expect.assertions(5);
        const rows = [
            {
                name: "Äpple",
                nested: [{ name: "Pink Lady" }, { name: "Granny Smith" }],
            },
            {
                name: "Banan",
            },
        ];
        const dataset = useDatasetRef(rows, "nested");

        const array = Array.from(
            datasetIterator(dataset.value, { flat: true }),
            ({ metadata, item }) => ({
                ariaRowIndex: metadata.ariaRowIndex,
                name: item.name,
            }),
        );
        expect(array).toHaveLength(4);
        expect(array[0]).toEqual({ ariaRowIndex: 1, name: "Äpple" });
        expect(array[1]).toEqual({ ariaRowIndex: 2, name: "Pink Lady" });
        expect(array[2]).toEqual({ ariaRowIndex: 3, name: "Granny Smith" });
        expect(array[3]).toEqual({ ariaRowIndex: 4, name: "Banan" });
    });
});
