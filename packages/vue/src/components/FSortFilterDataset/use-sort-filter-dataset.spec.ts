import { nextTick, ref } from "vue";
import { useSortFilterDataset } from "./use-sort-filter-dataset";

it("should output filtered rows directly", async () => {
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

describe("filtered data after mutation of input data", () => {
    it("should have new rows at the end of array", async () => {
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
        const data = ref([{ foo: "foo" }, { foo: "bar" }, { foo: "baz" }]);

        const { sortFilterResult } = useSortFilterDataset(
            data,
            { foo: "foo" },
            [],
            "foo",
            true,
        );

        data.value.splice(0, 1);
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "bar",
            },
            {
                foo: "baz",
            },
        ]);

        data.value.splice(0, 1);
        await nextTick();

        expect(sortFilterResult.value).toMatchObject([
            {
                foo: "baz",
            },
        ]);
    });

    it("should contain edit updates", async () => {
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
});

describe("filtered data after replacement of input data", () => {
    it("should update filtered rows when data is replaced", async () => {
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
