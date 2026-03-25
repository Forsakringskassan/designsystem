import { getDatasetMetadata } from "./get-dataset-metadata";
import { rowindex, treeSnapshot } from "./tree-snapshot";
import { useDatasetRef } from "./use-dataset-ref";
import {
    getCurrentDatasetMode,
    withDatasetBehaviour,
} from "./with-dataset-behaviour";

expect.addSnapshotSerializer({
    test(value) {
        return typeof value === "string";
    },
    serialize(value) {
        return String(value);
    },
});

describe("withDatasetBehaviour()", () => {
    describe('"preserve" mode', () => {
        it("should preserve existing element metadata when adding elements", () => {
            expect.assertions(2);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }]);
            const before = treeSnapshot(dsRef.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:1 row-index=0
                └─ id:2 row-index=1
            `);
            withDatasetBehaviour("preserve", () => {
                dsRef.value.push({ id: 3 });
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:1 row-index=0
                ├─ id:2 row-index=1
                └─ id:3 row-index=2
            `);
        });

        it("should preserve element metadata after filtering", () => {
            expect.assertions(2);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }, { id: 3 }]);
            const before = treeSnapshot(dsRef.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:1 row-index=0
                ├─ id:2 row-index=1
                └─ id:3 row-index=2
            `);
            withDatasetBehaviour("preserve", () => {
                dsRef.value = dsRef.value.filter((item) => item.id !== 2);
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:1 row-index=0
                └─ id:3 row-index=2
            `);
        });

        it("should apply metadata when value is reassigned", () => {
            expect.assertions(2);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }]);
            const before = treeSnapshot(dsRef.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:1 row-index=0
                └─ id:2 row-index=1
            `);
            withDatasetBehaviour("preserve", () => {
                dsRef.value = [{ id: 3 }, { id: 4 }, { id: 5 }];
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:3 row-index=0
                ├─ id:4 row-index=1
                └─ id:5 row-index=2
            `);
        });

        it("should preserve existing metadata when reassigning with elements from another dataset", () => {
            expect.assertions(3);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }]);
            const source = useDatasetRef([
                { id: 0 },
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
            ]);
            const before = treeSnapshot(dsRef.value, rowindex);
            const sourceTree = treeSnapshot(source.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:1 row-index=0
                └─ id:2 row-index=1
            `);
            expect(sourceTree).toMatchInlineSnapshot(`
                length=5 size=5
                ├─ id:0 row-index=0
                ├─ id:1 row-index=1
                ├─ id:2 row-index=2
                ├─ id:3 row-index=3
                └─ id:4 row-index=4
            `);
            withDatasetBehaviour("preserve", () => {
                dsRef.value = source.value.slice(2);
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:2 row-index=2
                ├─ id:3 row-index=3
                └─ id:4 row-index=4
            `);
        });

        it("should preserve existing element metadata when removing an element with splice", () => {
            expect.assertions(2);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }, { id: 3 }]);
            const before = treeSnapshot(dsRef.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:1 row-index=0
                ├─ id:2 row-index=1
                └─ id:3 row-index=2
            `);
            withDatasetBehaviour("preserve", () => {
                dsRef.value.splice(0, 1);
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:2 row-index=1
                └─ id:3 row-index=2
            `);
        });
    });

    describe('"reindex" mode', () => {
        it("should reindex all elements when adding a new element", () => {
            expect.assertions(2);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }]);
            const before = treeSnapshot(dsRef.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:1 row-index=0
                └─ id:2 row-index=1
            `);
            withDatasetBehaviour("reindex", () => {
                dsRef.value.push({ id: 3 });
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:1 row-index=0
                ├─ id:2 row-index=1
                └─ id:3 row-index=2
            `);
        });

        it("should reindex remaining elements after filtering", () => {
            expect.assertions(2);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }, { id: 3 }]);
            const before = treeSnapshot(dsRef.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:1 row-index=0
                ├─ id:2 row-index=1
                └─ id:3 row-index=2
            `);
            withDatasetBehaviour("reindex", () => {
                dsRef.value = dsRef.value.filter((item) => item.id !== 1);
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:2 row-index=0
                └─ id:3 row-index=1
            `);
        });

        it("should apply metadata when value is reassigned", () => {
            expect.assertions(2);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }]);
            const before = treeSnapshot(dsRef.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:1 row-index=0
                └─ id:2 row-index=1
            `);
            withDatasetBehaviour("reindex", () => {
                dsRef.value = [{ id: 3 }, { id: 4 }, { id: 5 }];
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:3 row-index=0
                ├─ id:4 row-index=1
                └─ id:5 row-index=2
            `);
        });

        it("should reindex elements from another dataset when reassigning", () => {
            expect.assertions(3);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }]);
            const source = useDatasetRef([
                { id: 0 },
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
            ]);
            const before = treeSnapshot(dsRef.value, rowindex);
            const sourceTree = treeSnapshot(source.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:1 row-index=0
                └─ id:2 row-index=1
            `);
            expect(sourceTree).toMatchInlineSnapshot(`
                length=5 size=5
                ├─ id:0 row-index=0
                ├─ id:1 row-index=1
                ├─ id:2 row-index=2
                ├─ id:3 row-index=3
                └─ id:4 row-index=4
            `);
            withDatasetBehaviour("reindex", () => {
                dsRef.value = source.value.slice(2);
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:2 row-index=0
                ├─ id:3 row-index=1
                └─ id:4 row-index=2
            `);
        });

        it("should reindex remaining elements when removing an element with splice", () => {
            expect.assertions(2);
            const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }, { id: 3 }]);
            const before = treeSnapshot(dsRef.value, rowindex);
            expect(before).toMatchInlineSnapshot(`
                length=3 size=3
                ├─ id:1 row-index=0
                ├─ id:2 row-index=1
                └─ id:3 row-index=2
            `);
            withDatasetBehaviour("reindex", () => {
                dsRef.value.splice(0, 1);
            });
            const after = treeSnapshot(dsRef.value, rowindex);
            expect(after).toMatchInlineSnapshot(`
                length=2 size=2
                ├─ id:2 row-index=0
                └─ id:3 row-index=1
            `);
        });
    });

    it("should restore the previous mode after a nested callback returns", () => {
        expect.assertions(7);
        const dsRef = useDatasetRef([{ id: 1 }, { id: 2 }]);

        expect(dsRef.value).toHaveLength(2);
        expect(getDatasetMetadata(dsRef.value[0]).rowIndex).toBe(0);
        expect(getDatasetMetadata(dsRef.value[1]).rowIndex).toBe(1);

        withDatasetBehaviour("preserve", () => {
            withDatasetBehaviour("reindex", () => {
                /* no-op */
            });
            dsRef.value.push({ id: 3 });
        });
        expect(dsRef.value).toHaveLength(3);
        expect(getDatasetMetadata(dsRef.value[0]).rowIndex).toBe(0);
        expect(getDatasetMetadata(dsRef.value[1]).rowIndex).toBe(1);
        expect(getDatasetMetadata(dsRef.value[2]).rowIndex).toBe(2);
    });

    it("should return the result from a sync callback", () => {
        expect.assertions(1);
        const result = withDatasetBehaviour("reindex", () => "foobar");
        expect(result).toBe("foobar");
    });

    it("should return undefined when a sync callback returns nothing", () => {
        expect.assertions(1);
        const result = withDatasetBehaviour("reindex", () => {
            /* no-op */
        });
        expect(result).toBeUndefined();
    });

    it("should resolve to the result from an async callback", async () => {
        expect.assertions(1);
        const result = await withDatasetBehaviour("reindex", async () => 42);
        expect(result).toBe(42);
    });

    it("should return a Promise for an async callback", () => {
        expect.assertions(1);
        const result = withDatasetBehaviour("reindex", async () => {
            /* no-op */
        });
        expect(result).toBeInstanceOf(Promise);
    });

    it("should restore the previous mode after a sync callback returns", () => {
        expect.assertions(3);
        expect(getCurrentDatasetMode()).toBe("preserve");
        withDatasetBehaviour("reindex", () => {
            expect(getCurrentDatasetMode()).toBe("reindex");
        });
        expect(getCurrentDatasetMode()).toBe("preserve");
    });

    it("should restore the previous mode after a sync callback throws", () => {
        expect.assertions(3);
        expect(getCurrentDatasetMode()).toBe("preserve");
        expect(() =>
            withDatasetBehaviour("reindex", () => {
                throw new Error("oops");
            }),
        ).toThrow("oops");
        expect(getCurrentDatasetMode()).toBe("preserve");
    });

    it("should restore the previous mode after async callback resolves", async () => {
        expect.assertions(3);
        expect(getCurrentDatasetMode()).toBe("preserve");
        await withDatasetBehaviour("reindex", async () => {
            expect(getCurrentDatasetMode()).toBe("reindex");
        });
        expect(getCurrentDatasetMode()).toBe("preserve");
    });

    it("should restore the previous mode after async callback rejects", async () => {
        expect.assertions(3);
        expect(getCurrentDatasetMode()).toBe("preserve");
        await expect(
            withDatasetBehaviour("reindex", async () => {
                throw new Error("oops");
            }),
        ).rejects.toThrow("oops");
        expect(getCurrentDatasetMode()).toBe("preserve");
    });

    it("documentation example 1", () => {
        expect.assertions(7);
        const dataset = useDatasetRef([
            { id: 1, name: "Äpple" },
            { id: 2, name: "Banan" },
            { id: 3, name: "Citron" },
        ]);

        expect(dataset.value).toHaveLength(3);
        expect(getDatasetMetadata(dataset.value[0]).ariaRowIndex).toBe(1);
        expect(getDatasetMetadata(dataset.value[1]).ariaRowIndex).toBe(2);
        expect(getDatasetMetadata(dataset.value[2]).ariaRowIndex).toBe(3);

        /* remove a row */
        withDatasetBehaviour("preserve", () => {
            dataset.value = dataset.value.filter((it) => it.id !== 2);
        });

        expect(dataset.value).toHaveLength(2);
        expect(getDatasetMetadata(dataset.value[0]).ariaRowIndex).toBe(1);
        expect(getDatasetMetadata(dataset.value[1]).ariaRowIndex).toBe(3);
    });

    it("documentation example 2", () => {
        expect.assertions(7);
        const dataset = useDatasetRef([
            { id: 1, name: "Äpple" },
            { id: 2, name: "Banan" },
            { id: 3, name: "Citron" },
        ]);

        expect(dataset.value).toHaveLength(3);
        expect(getDatasetMetadata(dataset.value[0]).ariaRowIndex).toBe(1);
        expect(getDatasetMetadata(dataset.value[1]).ariaRowIndex).toBe(2);
        expect(getDatasetMetadata(dataset.value[2]).ariaRowIndex).toBe(3);

        /* remove a row */
        withDatasetBehaviour("reindex", () => {
            dataset.value = dataset.value.filter((it) => it.id !== 2);
        });

        expect(dataset.value).toHaveLength(2);
        expect(getDatasetMetadata(dataset.value[0]).ariaRowIndex).toBe(1);
        expect(getDatasetMetadata(dataset.value[1]).ariaRowIndex).toBe(2);
    });
});
