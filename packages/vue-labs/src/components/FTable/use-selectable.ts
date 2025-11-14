import { type Ref, computed } from "vue";
import { assertRef } from "@fkui/logic";

export function useSelectable<T>(options: {
    selectable?: "single" | "multi";
    selectedRows: Ref<T[]>;
    rows: T[];
    keyAttribute?: keyof T;
}): {
    selectableHeaderState: () => boolean | "indeterminate";
    toggleSelectableHeader: () => void;
    selectableRowState: (row: T) => boolean;
    toggleSelectableRow: (row: T) => void;
} {
    const { selectable, selectedRows, rows, keyAttribute } = options;

    const isIndeterminate = computed(() => {
        return (
            selectedRows.value.length > 0 &&
            selectedRows.value.length < rows.length
        );
    });

    const isAllRowsSelected = computed((): boolean => {
        return (
            selectedRows.value.length > 0 &&
            selectedRows.value.length === rows.length
        );
    });

    function selectableHeaderState(): boolean | "indeterminate" {
        return isIndeterminate.value
            ? "indeterminate"
            : isAllRowsSelected.value;
    }

    function toggleSelectableHeader(): void {
        if (isAllRowsSelected.value) {
            selectedRows.value = [];
        } else {
            selectedRows.value = [...rows];
        }
    }

    function toggleSelectableRow(row: T): void {
        assertRef(selectedRows);

        if (selectable === "single") {
            selectedRows.value = [row];
        } else {
            const index = selectedRows.value.indexOf(row);

            if (index < 0) {
                selectedRows.value.push(row);
            } else {
                selectedRows.value.splice(index, 1);
            }
        }
    }

    function selectableRowState(row: T): boolean {
        if (!keyAttribute) {
            return false;
        }
        return selectedRows.value.some((it) => {
            return row[keyAttribute] === it[keyAttribute];
        });
    }

    return {
        toggleSelectableHeader,
        toggleSelectableRow,
        selectableHeaderState,
        selectableRowState,
    };
}
