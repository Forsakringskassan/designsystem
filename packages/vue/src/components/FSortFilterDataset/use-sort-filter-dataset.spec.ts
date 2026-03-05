import { nextTick, ref } from "vue";
import { useSortFilterDataset } from "./use-sort-filter-dataset";

describe("filtered rows", () => {
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

    it("should update filtered rows when data is added", async () => {
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
                foo: "barbaz",
            },
            {
                foo: "baz",
            },
            {
                foo: "foo",
            },
        ]);
    });

    it("should update filtered rows when data is removed", async () => {
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
    });

    it("should update filtered rows when data is edited", async () => {
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
