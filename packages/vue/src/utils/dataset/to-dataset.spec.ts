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
    });
});
