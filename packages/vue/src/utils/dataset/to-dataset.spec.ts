import { DatasetElementMetadata } from "./dataset-element-metadata";
import { getDatasetMetadata } from "./get-dataset-metadata";
import { isDataset } from "./is-dataset";
import { toDataset } from "./to-dataset";
import { rowindex, treeSnapshot } from "./tree-snapshot";

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

function ariaLevel({
    item,
    metadata,
}: {
    item: { id: unknown };
    metadata: DatasetElementMetadata;
}): string {
    return `id:${item.id} aria-level="${metadata.ariaLevel}"`;
}

function ariaRowIndex({
    item,
    metadata,
}: {
    item: { id: unknown };
    metadata: DatasetElementMetadata;
}): string {
    return `id:${item.id} aria-rowindex="${metadata.ariaRowIndex}"`;
}

describe("toDataset", () => {
    it("should create a dataset from array", () => {
        expect.assertions(1);
        const dataset = [{ foo: "bar", baz: 42 }];
        const result = toDataset(dataset, undefined);
        expect(isDataset(result)).toBeTruthy();
    });

    it("should be idempotent", () => {
        expect.assertions(3);
        const dataset = [{ foo: "bar" }];
        const first = toDataset(dataset, undefined);
        const second = toDataset(first, undefined);
        expect(first).toBe(second);
        expect(isDataset(first)).toBeTruthy();
        expect(isDataset(second)).toBeTruthy();
    });

    it("should not add enumerable properties", () => {
        expect.assertions(3);
        const dataset = [{ foo: "bar", spam: "ham" }];
        const result = toDataset(dataset, undefined);
        expect(Object.keys(result)).toEqual(["0"]); // indices
        expect(Object.keys(result[0])).toEqual(["foo", "spam"]);
        expect(JSON.stringify(result)).toBe(JSON.stringify(dataset));
    });

    it("should assign ariaLevel based on nesting depth", () => {
        expect.assertions(1);
        const items: Row[] = [
            {
                id: 1,
                children: [{ id: 3, children: [{ id: 5 }] }],
            },
            { id: 2, children: [{ id: 4 }] },
        ];
        const dataset = toDataset(items, "children");
        const tree = treeSnapshot(dataset, ariaLevel);
        expect(tree).toMatchInlineSnapshot(`
            length=2 size=5
            ├─ id:1 aria-level="1"
            │  └─ id:3 aria-level="2"
            │     └─ id:5 aria-level="3"
            └─ id:2 aria-level="1"
               └─ id:4 aria-level="2"
        `);
    });

    it("should assign correct row index to nested rows", () => {
        expect.assertions(1);
        const items: Row[] = [
            { id: 1, children: [{ id: 3 }, { id: 4 }] },
            { id: 2, children: [{ id: 5 }] },
        ];
        const dataset = toDataset(items, "children");
        const tree = treeSnapshot(dataset, ariaRowIndex);
        expect(tree).toMatchInlineSnapshot(`
            length=2 size=5
            ├─ id:1 aria-rowindex="1"
            │  ├─ id:3 aria-rowindex="2"
            │  └─ id:4 aria-rowindex="3"
            └─ id:2 aria-rowindex="4"
               └─ id:5 aria-rowindex="5"
        `);
    });

    it("should assign correct position metadata to nested rows", () => {
        expect.assertions(1);
        const items: Row[] = [
            { id: 1, children: [{ id: 3 }, { id: 4 }] },
            { id: 2, children: [{ id: 5 }] },
        ];
        const dataset = toDataset(items, "children");
        const tree = treeSnapshot(dataset, ({ item, metadata }) => {
            return `id:${item.id} aria-setsize="${metadata.ariaSetSize}" aria-posinset="${metadata.ariaPosInSet}"`;
        });
        expect(tree).toMatchInlineSnapshot(`
            length=2 size=5
            ├─ id:1 aria-setsize="2" aria-posinset="1"
            │  ├─ id:3 aria-setsize="2" aria-posinset="1"
            │  └─ id:4 aria-setsize="2" aria-posinset="2"
            └─ id:2 aria-setsize="2" aria-posinset="2"
               └─ id:5 aria-setsize="1" aria-posinset="1"
        `);
    });

    describe("with originalDataset", () => {
        it("should create a dataset from filtered array", () => {
            expect.assertions(2);
            const items: Row[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
            const original = toDataset(items);
            const filtered = toDataset(
                original.filter((it) => it.id !== 2),
                original,
            );
            const before = treeSnapshot(original, rowindex);
            const after = treeSnapshot(filtered, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:1 row-index=0
                ├─ id:2 row-index=1
                └─ id:3 row-index=2
            `);
            expect(after).toMatchInlineSnapshot(`
                length=2 size=3
                ├─ id:1 row-index=0
                └─ id:3 row-index=2
            `);
        });

        it("should inherit size from the original dataset", () => {
            expect.assertions(2);
            const original = toDataset([{ id: 1 }, { id: 2 }, { id: 3 }]);
            const filtered = toDataset([], original);
            const { size } = getDatasetMetadata(filtered);
            expect(filtered).toHaveLength(0);
            expect(size).toBe(3);
        });

        it("should inherit nestedAttribute from the original dataset", () => {
            expect.assertions(1);
            const items: Row[] = [];
            const original = toDataset(items, "children");
            const filtered = toDataset([], original);
            const { nestedAttribute } = getDatasetMetadata(filtered);
            expect(nestedAttribute).toBe("children");
        });

        it("should preserve original row indices for nested rows in filtered dataset", () => {
            expect.assertions(2);
            const items: Row[] = [
                { id: 1, children: [{ id: 3 }, { id: 4 }] },
                { id: 2, children: [{ id: 5 }] },
            ];
            const original = toDataset(items, "children");
            const filtered = toDataset([original[1]], original);
            const before = treeSnapshot(original, ariaRowIndex);
            const after = treeSnapshot(filtered, ariaRowIndex);
            expect(before).toMatchInlineSnapshot(`
                length=2 size=5
                ├─ id:1 aria-rowindex="1"
                │  ├─ id:3 aria-rowindex="2"
                │  └─ id:4 aria-rowindex="3"
                └─ id:2 aria-rowindex="4"
                   └─ id:5 aria-rowindex="5"
            `);
            expect(after).toMatchInlineSnapshot(`
                length=1 size=5
                └─ id:2 aria-rowindex="4"
                   └─ id:5 aria-rowindex="5"
            `);
        });
    });
});
