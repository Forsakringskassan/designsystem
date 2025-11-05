import { ref } from "vue";
import { useSelectable } from "./use-selectable";

interface Row {
    id: number;
}

describe("selectableRowState(row)", () => {
    it("should return `true` when selected row", () => {
        const rows: Row[] = [{ id: 1 }, { id: 2 }];
        const selectedRows = ref([rows[1]]);

        const { selectableRowState } = useSelectable({
            selectable: "multi",
            selectedRows,
            rows,
            keyAttribute: "id",
        });

        expect(selectableRowState(rows[1])).toBeTruthy();
    });

    it("should return `false` when not selected row", () => {
        const rows: Row[] = [{ id: 1 }, { id: 2 }];
        const selectedRows = ref([rows[0]]);

        const { selectableRowState } = useSelectable({
            selectable: "multi",
            selectedRows,
            rows,
            keyAttribute: "id",
        });

        expect(selectableRowState(rows[1])).toBeFalsy();
    });
});

describe("single select", () => {
    describe("toggleSelectableRow(row", () => {
        it("should select row when nothing selected", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            const selectedRows = ref([]);

            const { toggleSelectableRow, selectableRowState } = useSelectable({
                selectable: "single",
                selectedRows,
                rows,
                keyAttribute: "id",
            });

            expect(selectableRowState(rows[0])).toBeFalsy();
            expect(selectableRowState(rows[1])).toBeFalsy();
            toggleSelectableRow(rows[0]);
            expect(selectableRowState(rows[0])).toBeTruthy();
            expect(selectableRowState(rows[1])).toBeFalsy();
        });

        it("should select row and unselect previous selected row", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            const selectedRows = ref([rows[0]]);

            const { toggleSelectableRow, selectableRowState } = useSelectable({
                selectable: "single",
                selectedRows,
                rows,
                keyAttribute: "id",
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
                keyAttribute: "id",
            });

            expect(selectableHeaderState()).toBeFalsy();
        });

        it("should return `indeterminate` when some rows selected", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            const selectedRows = ref([rows[1]]);

            const { selectableHeaderState } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
                keyAttribute: "id",
            });

            expect(selectableHeaderState()).toBe("indeterminate");
        });

        it("should return `true` when all rows selected", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            const selectedRows = ref([...rows]);

            const { selectableHeaderState } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
                keyAttribute: "id",
            });

            expect(selectableHeaderState()).toBeTruthy();
        });
    });

    describe("toggleSelectableHeader()", () => {
        it("should trigger checked state and select all rows when unchecked state", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            const selectedRows = ref([]);

            const { selectableHeaderState, toggleSelectableHeader } =
                useSelectable({
                    selectable: "multi",
                    selectedRows,
                    rows,
                    keyAttribute: "id",
                });

            expect(selectableHeaderState()).toBeFalsy();
            toggleSelectableHeader();
            expect(selectableHeaderState()).toBeTruthy();
            expect(selectedRows.value).toHaveLength(2);
        });

        it("should trigger checked state and select all rows when indeterminate state", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            const selectedRows = ref([rows[1]]);

            const { selectableHeaderState, toggleSelectableHeader } =
                useSelectable({
                    selectable: "multi",
                    selectedRows,
                    rows,
                    keyAttribute: "id",
                });

            expect(selectableHeaderState()).toBe("indeterminate");
            toggleSelectableHeader();
            expect(selectableHeaderState()).toBeTruthy();
            expect(selectedRows.value).toHaveLength(2);
        });

        it("should trigger unchecked state and unselect all rows when checked state", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            const selectedRows = ref([...rows]);

            const { selectableHeaderState, toggleSelectableHeader } =
                useSelectable({
                    selectable: "multi",
                    selectedRows,
                    rows,
                    keyAttribute: "id",
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
            const selectedRows = ref([]);

            const {
                selectableHeaderState,
                toggleSelectableRow,
                selectableRowState,
            } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
                keyAttribute: "id",
            });

            toggleSelectableRow(rows[1]);
            expect(selectableHeaderState()).toBe("indeterminate");
            expect(selectableRowState(rows[1])).toBeTruthy();
        });

        it("should get header state checked and all rows checked when selecting row by row", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            const selectedRows = ref([]);

            const {
                selectableHeaderState,
                toggleSelectableRow,
                selectableRowState,
            } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
                keyAttribute: "id",
            });

            toggleSelectableRow(rows[0]);
            toggleSelectableRow(rows[1]);
            expect(selectableHeaderState()).toBeTruthy();
            expect(selectableRowState(rows[0])).toBeTruthy();
            expect(selectableRowState(rows[1])).toBeTruthy();
        });

        it("should get header state `indeterminate` and row unchecked when all selected", () => {
            const rows: Row[] = [{ id: 1 }, { id: 2 }];
            const selectedRows = ref([...rows]);

            const {
                selectableHeaderState,
                toggleSelectableRow,
                selectableRowState,
            } = useSelectable({
                selectable: "multi",
                selectedRows,
                rows,
                keyAttribute: "id",
            });

            expect(selectableHeaderState()).toBeTruthy();
            toggleSelectableRow(rows[1]);
            expect(selectableHeaderState()).toBe("indeterminate");
            expect(selectableRowState(rows[0])).toBeTruthy();
            expect(selectableRowState(rows[1])).toBeFalsy();
        });
    });
});
