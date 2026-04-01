import { isDataset } from "./is-dataset";
import { all, treeSnapshot } from "./tree-snapshot";
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

describe("useDatasetRef()", () => {
    it("should create a ref with dataset", () => {
        expect.assertions(2);
        const initial = [{ foo: "bar" }];
        const dataset = useDatasetRef(initial);
        expect(isDataset(dataset.value)).toBeTruthy();
        expect(dataset.value).toEqual(initial);
    });

    it("should create an empty dataset if no initial value is provided", () => {
        expect.assertions(2);
        const dataset = useDatasetRef();
        expect(isDataset(dataset.value)).toBeTruthy();
        expect(dataset.value).toEqual([]);
    });

    it("should reindex metadata when value is pushed", () => {
        expect.assertions(2);
        const dsRef = useDatasetRef<Row>([{ id: 1 }, { id: 2 }], "children");
        const before = treeSnapshot(dsRef.value, all);
        dsRef.value.push({ id: 3 });
        const after = treeSnapshot(dsRef.value, all);
        expect(before).toMatchInlineSnapshot(`
            length=2 size=2
            ├─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=2 aria-posinset=1
            └─ id:2 row-index=1 aria-rowindex=2 aria-level=1 aria-setsize=2 aria-posinset=2
        `);
        expect(after).toMatchInlineSnapshot(`
            length=3 size=3
            ├─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=3 aria-posinset=1
            ├─ id:2 row-index=1 aria-rowindex=2 aria-level=1 aria-setsize=3 aria-posinset=2
            └─ id:3 row-index=2 aria-rowindex=3 aria-level=1 aria-setsize=3 aria-posinset=3
        `);
    });

    it("should reindex metadata when value is unshifted", () => {
        expect.assertions(2);
        const dsRef = useDatasetRef<Row>([{ id: 1 }, { id: 2 }], "children");
        const before = treeSnapshot(dsRef.value, all);
        dsRef.value.unshift({ id: 3 });
        const after = treeSnapshot(dsRef.value, all);
        expect(before).toMatchInlineSnapshot(`
            length=2 size=2
            ├─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=2 aria-posinset=1
            └─ id:2 row-index=1 aria-rowindex=2 aria-level=1 aria-setsize=2 aria-posinset=2
        `);
        expect(after).toMatchInlineSnapshot(`
            length=3 size=3
            ├─ id:3 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=3 aria-posinset=1
            ├─ id:1 row-index=1 aria-rowindex=2 aria-level=1 aria-setsize=3 aria-posinset=2
            └─ id:2 row-index=2 aria-rowindex=3 aria-level=1 aria-setsize=3 aria-posinset=3
        `);
    });

    it("should reindex metadata when value is spliced", () => {
        expect.assertions(2);
        const dsRef = useDatasetRef<Row>([{ id: 1 }, { id: 2 }], "children");
        const before = treeSnapshot(dsRef.value, all);
        dsRef.value.splice(1, 1, { id: 3 });
        const after = treeSnapshot(dsRef.value, all);
        expect(before).toMatchInlineSnapshot(`
            length=2 size=2
            ├─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=2 aria-posinset=1
            └─ id:2 row-index=1 aria-rowindex=2 aria-level=1 aria-setsize=2 aria-posinset=2
        `);
        expect(after).toMatchInlineSnapshot(`
            length=2 size=2
            ├─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=2 aria-posinset=1
            └─ id:3 row-index=1 aria-rowindex=2 aria-level=1 aria-setsize=2 aria-posinset=2
        `);
    });

    it("should reindex metadata when value is popped", () => {
        expect.assertions(2);
        const dsRef = useDatasetRef<Row>([{ id: 1 }, { id: 2 }], "children");
        const before = treeSnapshot(dsRef.value, all);
        dsRef.value.pop();
        const after = treeSnapshot(dsRef.value, all);
        expect(before).toMatchInlineSnapshot(`
            length=2 size=2
            ├─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=2 aria-posinset=1
            └─ id:2 row-index=1 aria-rowindex=2 aria-level=1 aria-setsize=2 aria-posinset=2
        `);
        expect(after).toMatchInlineSnapshot(`
            length=1 size=1
            └─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=1 aria-posinset=1
        `);
    });

    it("should reindex metadata when value is assigned", () => {
        expect.assertions(2);
        const dsRef = useDatasetRef<Row>([], "children");
        const before = treeSnapshot(dsRef.value, all);
        dsRef.value = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const after = treeSnapshot(dsRef.value, all);
        expect(before).toMatchInlineSnapshot(`
            length=0 size=0

        `);
        expect(after).toMatchInlineSnapshot(`
            length=3 size=3
            ├─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=3 aria-posinset=1
            ├─ id:2 row-index=1 aria-rowindex=2 aria-level=1 aria-setsize=3 aria-posinset=2
            └─ id:3 row-index=2 aria-rowindex=3 aria-level=1 aria-setsize=3 aria-posinset=3
        `);
    });

    it("should reindex nested metadata when value is assigned", () => {
        expect.assertions(2);
        const dsRef = useDatasetRef<Row>([], "children");
        const before = treeSnapshot(dsRef.value, all);
        dsRef.value = [
            { id: 1, children: [{ id: 2 }, { id: 3 }] },
            { id: 4, children: [{ id: 5 }, { id: 6 }] },
        ];
        const after = treeSnapshot(dsRef.value, all);
        expect(before).toMatchInlineSnapshot(`
            length=0 size=0

        `);
        expect(after).toMatchInlineSnapshot(`
            length=2 size=6
            ├─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=2 aria-posinset=1
            │  ├─ id:2 row-index=1 aria-rowindex=2 aria-level=2 aria-setsize=2 aria-posinset=1
            │  └─ id:3 row-index=2 aria-rowindex=3 aria-level=2 aria-setsize=2 aria-posinset=2
            └─ id:4 row-index=3 aria-rowindex=4 aria-level=1 aria-setsize=2 aria-posinset=2
               ├─ id:5 row-index=4 aria-rowindex=5 aria-level=2 aria-setsize=2 aria-posinset=1
               └─ id:6 row-index=5 aria-rowindex=6 aria-level=2 aria-setsize=2 aria-posinset=2
        `);
    });

    it("should handle reassigning array of same size", () => {
        expect.assertions(2);
        const dsRef = useDatasetRef<Row>([{ id: 1 }], "children");
        const before = treeSnapshot(dsRef.value, all);
        dsRef.value = [{ id: 2 }];
        const after = treeSnapshot(dsRef.value, all);
        expect(before).toMatchInlineSnapshot(`
            length=1 size=1
            └─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=1 aria-posinset=1
        `);
        expect(after).toMatchInlineSnapshot(`
            length=1 size=1
            └─ id:2 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=1 aria-posinset=1
        `);
    });

    it("should handle reassigning nested children", () => {
        expect.assertions(2);
        const dsRef = useDatasetRef<Row>([{ id: 1 }], "children");
        const before = treeSnapshot(dsRef.value, all);
        dsRef.value[0].children = [{ id: 2 }];
        const after = treeSnapshot(dsRef.value, all);
        expect(before).toMatchInlineSnapshot(`
            length=1 size=1
            └─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=1 aria-posinset=1
        `);
        expect(after).toMatchInlineSnapshot(`
            length=1 size=2
            └─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=1 aria-posinset=1
               └─ id:2 row-index=1 aria-rowindex=2 aria-level=2 aria-setsize=1 aria-posinset=1
        `);
    });

    it("should handle assigning existing dataset", () => {
        expect.assertions(2);
        const ds1 = useDatasetRef<Row>([{ id: 1 }]);
        const ds2 = useDatasetRef<Row>([{ id: 2 }]);
        const before = treeSnapshot(ds1.value, all);
        ds1.value = ds2.value;
        const after = treeSnapshot(ds1.value, all);
        expect(before).toMatchInlineSnapshot(`
            length=1 size=1
            └─ id:1 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=1 aria-posinset=1
        `);
        expect(after).toMatchInlineSnapshot(`
            length=1 size=1
            └─ id:2 row-index=0 aria-rowindex=1 aria-level=1 aria-setsize=1 aria-posinset=1
        `);
    });
});
