import { computed, ref } from "vue";
import { describe, expect, it } from "vitest";
import { removeTableRows } from "./remove-table-rows";

describe("removeTableRows", () => {
    interface Row {
        id: number;
        children?: Row[];
    }

    it("should remove rows from expandable rows", () => {
        expect.assertions(1);
        const rows: Row[] = [{ id: 1, children: [{ id: 11 }, { id: 12 }] }];

        removeTableRows(rows, rows[0].children![0], "children");

        expect(rows[0].children).toEqual([{ id: 12 }]);
    });

    it("should remove an array of rows", () => {
        expect.assertions(1);
        const rows: Row[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

        removeTableRows(rows, [rows[0], rows[2]]);

        expect(rows).toEqual([{ id: 2 }]);
    });

    it("should remove rows from a ref", () => {
        expect.assertions(1);
        const rows = ref<Row[]>([{ id: 1 }, { id: 2 }, { id: 3 }]);
        const rowsToRemove = ref<Row[]>([rows.value[0], rows.value[2]]);

        removeTableRows(rows, rowsToRemove);

        expect(rows.value).toEqual([{ id: 2 }]);
    });

    it("should remove nested rows from a ref", () => {
        expect.assertions(1);
        const rows = ref<Row[]>([
            { id: 1, children: [{ id: 11 }, { id: 12 }] },
        ]);
        const rowToRemove = ref(rows.value[0].children![0]);

        removeTableRows(
            rows,
            rowToRemove,
            computed(() => "children"),
        );

        expect(rows.value[0].children).toEqual([{ id: 12 }]);
    });
});
