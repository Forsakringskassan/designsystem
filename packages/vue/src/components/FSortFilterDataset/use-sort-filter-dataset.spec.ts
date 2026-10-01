import { nextTick, ref } from "vue";
import { describe, expect, it, vi } from "vitest";
import { getRowMetadata } from "../../utils/dataset";
import { useSortFilterDataset } from "./use-sort-filter-dataset";

it("should output filtered rows directly", () => {
    expect.assertions(1);
    const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);

    const { sortFilterResult } = useSortFilterDataset(
        data,
        { foo: "foo" },
        [],
        "foo",
        true,
    );

    expect(sortFilterResult.value).toMatchObject([
        {
            foo: "bar",
        },
        {
            foo: "baz",
        },
        {
            foo: "foo",
        },
    ]);
});

it("should give each independent view over the same source its own position metadata reflecting its own sort order", () => {
    expect.assertions(2);
    const data = ref([
        { name: "Banan" },
        { name: "Citron" },
        { name: "Apelsin" },
    ]);

    const ascending = useSortFilterDataset(
        data,
        { name: "Namn" },
        [],
        "name",
        true,
    );
    const descending = useSortFilterDataset(
        data,
        { name: "Namn" },
        [],
        "name",
        false,
    );

    const apelsinAscending = ascending.sortFilterResult.value.find(
        (row) => row.name === "Apelsin",
    )!;
    const apelsinDescending = descending.sortFilterResult.value.find(
        (row) => row.name === "Apelsin",
    )!;

    // Ascending: Apelsin, Banan, Citron -> Apelsin is first.
    expect(
        getRowMetadata(ascending.sortFilterResult.value, apelsinAscending)
            .ariaPosInSet,
    ).toBe(1);
    // Descending: Citron, Banan, Apelsin -> Apelsin is last, unaffected by
    // the ascending view's position for the same underlying row.
    expect(
        getRowMetadata(descending.sortFilterResult.value, apelsinDescending)
            .ariaPosInSet,
    ).toBe(3);
});

describe("filtered data after editing of input data", () => {
    it("should have new rows at the end of array", async () => {
        expect.assertions(2);
        const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);

        const { sortFilterResult } = useSortFilterDataset(
            data,
            { foo: "foo" },
            [],
            "foo",
            true,
        );

        data.value.push({ foo: "barbaz" });
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "bar",
            },
            {
                foo: "baz",
            },
            {
                foo: "foo",
            },
            {
                foo: "barbaz",
            },
        ]);

        data.value.unshift({ foo: "foobarbaz" });
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "bar",
            },
            {
                foo: "baz",
            },
            {
                foo: "foo",
            },
            {
                foo: "barbaz",
            },
            {
                foo: "foobarbaz",
            },
        ]);
    });

    it("should not contain removed rows", async () => {
        expect.assertions(2);
        const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);

        const { sortFilterResult } = useSortFilterDataset(
            data,
            { foo: "foo" },
            [],
            "foo",
            true,
        );

        data.value.shift();
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "bar",
            },
            {
                foo: "baz",
            },
        ]);

        data.value.shift();
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "baz",
            },
        ]);
    });

    it("should contain edit updates", async () => {
        expect.assertions(1);
        const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);

        const { sortFilterResult } = useSortFilterDataset(
            data,
            { foo: "foo" },
            [],
            "foo",
            true,
        );

        data.value[0].foo = "foobar";
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "bar",
            },
            {
                foo: "baz",
            },
            {
                foo: "foobar",
            },
        ]);
    });

    it("should not be resorted", async () => {
        expect.assertions(1);
        const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);

        const { sortFilterResult } = useSortFilterDataset(
            data,
            { foo: "foo" },
            [],
            "foo",
            true,
        );

        data.value[0].foo = "alpha";
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "bar",
            },
            {
                foo: "baz",
            },
            {
                foo: "alpha",
            },
        ]);
    });

    it("should not be refiltered", async () => {
        expect.assertions(2);
        const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);

        const { sortFilterResult, searchString } = useSortFilterDataset(
            data,
            { foo: "foo" },
            ["foo"],
            "foo",
            true,
        );

        searchString.value = "b";
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "bar",
            },
            {
                foo: "baz",
            },
        ]);

        data.value[0].foo = "barbaz";
        data.value[1].foo = "lorem";
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "lorem",
            },
            {
                foo: "baz",
            },
        ]);
    });

    it("should be resorted when data is replaced", async () => {
        expect.assertions(1);
        const data = ref([
            { value: "foo" },
            { value: "bar" },
            { value: "baz" },
        ]);

        const { sortFilterResult } = useSortFilterDataset(
            data,
            { value: "value" },
            [],
            "value",
            true,
        );

        data.value = [{ value: "zzz" }, { value: "aaa" }, { value: "mmm" }];
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                value: "aaa",
            },
            {
                value: "mmm",
            },
            {
                value: "zzz",
            },
        ]);
    });
});

describe("lazy callbacks", () => {
    it("should call onLazyRowsAdded when new rows are appended", async () => {
        expect.assertions(1);
        const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);
        const onLazyRowsAdded = vi.fn();

        useSortFilterDataset(data, { foo: "foo" }, [], "foo", true, {
            onLazyRowsAdded,
        });

        data.value.push({ foo: "added" });
        await nextTick();

        expect(onLazyRowsAdded).toHaveBeenCalledTimes(1);
    });

    it("should call onFilter and rerun full sort when refresh is called", async () => {
        expect.assertions(3);
        const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);
        const onFilter = vi.fn();

        const { sortFilterResult, refresh } = useSortFilterDataset(
            data,
            { foo: "foo" },
            [],
            "foo",
            true,
            { onFilter },
        );

        data.value[0].foo = "alpha";
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "bar",
            },
            {
                foo: "baz",
            },
            {
                foo: "alpha",
            },
        ]);

        refresh();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "alpha",
            },
            {
                foo: "bar",
            },
            {
                foo: "baz",
            },
        ]);
        expect(onFilter).toHaveBeenCalledTimes(1);
    });
});

describe("filtered data after replacement of input data", () => {
    it("should update filtered rows when data is replaced", async () => {
        expect.assertions(1);
        const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);

        const { sortFilterResult } = useSortFilterDataset(
            data,
            { foo: "foo" },
            [],
            "foo",
            true,
        );

        data.value = [
            {
                foo: "replaced",
            },
        ];
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "replaced",
            },
        ]);
    });
});
