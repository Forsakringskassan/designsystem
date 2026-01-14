import { ref, toValue } from "vue";
import { setItemIdentifiers } from "@fkui/vue";
import { flushPromises } from "@vue/test-utils";
import { useSelectable } from "./use-selectable";

interface Row {
    id: number;
    value?: string;
}

describe("selectableRowState(row)", () => {
    it("should return `true` when selected row", () => {
        const rows: Row[] = [{ id: 1 }, { id: 2 }];
        setItemIdentifiers(rows);
        const selectedRows = ref([rows[1]]);

        const { selectableRowState } = useSelectable({
            selectable: "multi",
            selectedRows,
            rows,
        });

        expect(selectableRowState(rows[1])).toBeTruthy();
    });

    it("should return `false` when not selected row", () => {
        const rows: Row[] = [{ id: 1 }, { id: 2 }];
        setItemIdentifiers(rows);
        const selectedRows = ref([rows[0]]);

        const { selectableRowState } = useSelectable({
            selectable: "multi",
            selectedRows,
            rows,
        });

        expect(selectableRowState(rows[1])).toBeFalsy();
    });
});

describe("single select", () => {
    describe("toggleSelectableRow(row", () => {
        it("should select row when nothing selected", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([]);

            const { toggleSelectableRow, selectableRowState } = useSelectable({
                selectable: "single",
                selectedRows,
                rows,
            });

            expect(selectableRowState(rows[0])).toBeFalsy();
            expect(selectableRowState(rows[1])).toBeFalsy();
            toggleSelectableRow(rows[0]);
            expect(selectableRowState(rows[0])).toBeTruthy();
            expect(selectableRowState(rows[1])).toBeFalsy();
        });

        it("should select row and unselect previous selected row", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([rows[0]]);

            const { toggleSelectableRow, selectableRowState } = useSelectable({
                selectable: "single",
                selectedRows,
                rows,
            });

            expect(selectableRowState(rows[0])).toBeTruthy();
            expect(selectableRowState(rows[1])).toBeFalsy();
            toggleSelectableRow(rows[1]);
            expect(selectableRowState(rows[0])).toBeFalsy();
            expect(selectableRowState(rows[1])).toBeTruthy();
        });
    });
});

describe("multi select", () => {
    describe("selectableHeaderState", () => {
        it("should return `false` when no rows selected", () => {
            const { selectableHeaderState } = useSelectable({
                selectable: "multi",
                selectedRows: ref([]),
                rows: [],
            });

            expect(selectableHeaderState()).toBeFalsy();
        });

        it("should return `indeterminate` when some rows selected", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([rows[1]]);

            const { selectableHeaderState } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
            });

            expect(selectableHeaderState()).toBe("indeterminate");
        });

        it("should return `true` when all rows selected", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([...rows]);

            const { selectableHeaderState } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
            });

            expect(selectableHeaderState()).toBeTruthy();
        });
    });

    describe("toggleSelectableHeader()", () => {
        it("should trigger checked state and select all rows when unchecked state", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([]);

            const { selectableHeaderState, toggleSelectableHeader } =
                useSelectable({
                    selectable: "multi",
                    selectedRows,
                    rows,
                });

            expect(selectableHeaderState()).toBeFalsy();
            toggleSelectableHeader();
            expect(selectableHeaderState()).toBeTruthy();
            expect(selectedRows.value).toHaveLength(2);
        });

        it("should trigger checked state and select all rows when indeterminate state", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([rows[1]]);

            const { selectableHeaderState, toggleSelectableHeader } =
                useSelectable({
                    selectable: "multi",
                    selectedRows,
                    rows,
                });

            expect(selectableHeaderState()).toBe("indeterminate");
            toggleSelectableHeader();
            expect(selectableHeaderState()).toBeTruthy();
            expect(selectedRows.value).toHaveLength(2);
        });

        it("should trigger unchecked state and unselect all rows when checked state", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([...rows]);

            const { selectableHeaderState, toggleSelectableHeader } =
                useSelectable({
                    selectable: "multi",
                    selectedRows,
                    rows,
                });

            expect(selectableHeaderState()).toBeTruthy();
            toggleSelectableHeader();
            expect(selectableHeaderState()).toBeFalsy();
            expect(selectedRows.value).toHaveLength(0);
        });
    });

    describe("toggleSelectableRow(row)", () => {
        it("should get header state `indeterminate` and row state `checked` when nothing selected", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([]);

            const {
                selectableHeaderState,
                toggleSelectableRow,
                selectableRowState,
            } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
            });

            toggleSelectableRow(rows[1]);
            expect(selectableHeaderState()).toBe("indeterminate");
            expect(selectableRowState(rows[1])).toBeTruthy();
        });

        it("should get header state checked and all rows checked when selecting row by row", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([]);

            const {
                selectableHeaderState,
                toggleSelectableRow,
                selectableRowState,
            } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
            });

            toggleSelectableRow(rows[0]);
            toggleSelectableRow(rows[1]);
            expect(selectableHeaderState()).toBeTruthy();
            expect(selectableRowState(rows[0])).toBeTruthy();
            expect(selectableRowState(rows[1])).toBeTruthy();
        });

        it("should get header state `indeterminate` and row unchecked when all selected", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            setItemIdentifiers(rows);
            const selectedRows = ref([...rows]);

            const {
                selectableHeaderState,
                toggleSelectableRow,
                selectableRowState,
            } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
            });

            expect(selectableHeaderState()).toBeTruthy();
            toggleSelectableRow(rows[1]);
            expect(selectableHeaderState()).toBe("indeterminate");
            expect(selectableRowState(rows[0])).toBeTruthy();
            expect(selectableRowState(rows[1])).toBeFalsy();
        });
    });
});

describe("7.7 Dataset change resets selection", () => {
    it("should clear all selected rows and bulk checkbox when a row is added", async () => {
        const rows = ref<Row[]>([{ id: 1 }, { id: 2 }]);
        setItemIdentifiers(rows.value);
        const selectedRows = ref([toValue(rows)[0]]);

        const { selectableRowState, selectableHeaderState } = useSelectable({
            selectable: "multi",
            selectedRows,
            rows,
        });

        expect(selectableHeaderState()).toBe("indeterminate");
        expect(selectableRowState(toValue(rows)[0])).toBeTruthy();

        rows.value.push({ id: 3 });
        setItemIdentifiers(rows.value);
        await flushPromises();

        expect(selectedRows.value).toEqual([]);
        expect(selectableRowState(toValue(rows)[0])).toBeFalsy();
        expect(selectableHeaderState()).toBeFalsy();
    });

    it("should clear all selected rows and bulk checkbox when a row is removed", async () => {
        const rows = ref<Row[]>([{ id: 1 }, { id: 2 }]);
        setItemIdentifiers(rows.value);
        const selectedRows = ref([toValue(rows)[0]]);

        const { selectableRowState, selectableHeaderState } = useSelectable({
            selectable: "multi",
            selectedRows,
            rows,
        });

        expect(selectableHeaderState()).toBe("indeterminate");
        expect(selectableRowState(toValue(rows)[0])).toBeTruthy();

        rows.value.splice(1, 1);
        await flushPromises();

        expect(selectedRows.value).toEqual([]);
        expect(selectableRowState(toValue(rows)[0])).toBeFalsy();
        expect(selectableHeaderState()).toBeFalsy();
    });

    it("should clear all selected rows and bulk checkbox when rows are replaced", async () => {
        const rows = ref<Row[]>([{ id: 1 }, { id: 2 }]);
        setItemIdentifiers(rows.value);
        const selectedRows = ref([toValue(rows)[0]]);

        const { selectableRowState, selectableHeaderState } = useSelectable({
            selectable: "multi",
            selectedRows,
            rows,
        });

        expect(selectableHeaderState()).toBe("indeterminate");
        expect(selectableRowState(toValue(rows)[0])).toBeTruthy();

        rows.value = [{ id: 2 }, { id: 3 }];
        setItemIdentifiers(rows.value);
        await flushPromises();

        expect(selectedRows.value).toEqual([]);
        expect(selectableRowState(toValue(rows)[0])).toBeFalsy();
        expect(selectableHeaderState()).toBeFalsy();
    });

    it("should not clear selected rows when row details are updated", async () => {
        const rows = ref<Row[]>([
            { id: 1, value: "foo" },
            { id: 2, value: "baz" },
        ]);
        setItemIdentifiers(rows.value);
        const selectedRows = ref([toValue(rows)[0]]);
        const { selectableRowState, selectableHeaderState } = useSelectable({
            selectable: "multi",
            selectedRows,
            rows,
        });

        expect(selectableHeaderState()).toBe("indeterminate");
        expect(selectableRowState(toValue(rows)[0])).toBeTruthy();

        rows.value[0].value = "baz";
        await flushPromises();

        expect(selectableHeaderState()).toBe("indeterminate");
        expect(selectableRowState(toValue(rows)[0])).toBeTruthy();
    });

    it("should not clear selected rows when rows are sorted", async () => {
        const rows = ref<Row[]>([
            { id: 1, value: "foo" },
            { id: 2, value: "baz" },
        ]);
        setItemIdentifiers(rows.value);
        const selectedRows = ref([toValue(rows)[0]]);

        const { selectableRowState, selectableHeaderState } = useSelectable({
            selectable: "multi",
            selectedRows,
            rows,
        });

        expect(selectableHeaderState()).toBe("indeterminate");
        expect(selectableRowState(toValue(rows)[0])).toBeTruthy();
        expect(selectableRowState(toValue(rows)[1])).toBeFalsy();

        const newRows = [...rows.value].reverse();
        setItemIdentifiers(newRows);
        rows.value = newRows;
        await flushPromises();

        expect(selectableHeaderState()).toBe("indeterminate");
        expect(selectableRowState(toValue(rows)[0])).toBeFalsy();
        expect(selectableRowState(toValue(rows)[1])).toBeTruthy();
    });
});
