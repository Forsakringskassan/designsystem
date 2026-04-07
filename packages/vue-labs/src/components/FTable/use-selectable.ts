import { type MaybeRefOrGetter, type Ref, computed, toValue, watch } from "vue";
import { assertRef } from "@fkui/logic";
import { type ItemIdentifier, findItemIdentifier } from "@fkui/vue";

function rowKey(row: unknown): ItemIdentifier {
    return findItemIdentifier(row) ?? "";
}

/** @internal */
export function useSelectable<T>(options: {
    selectable?: "single" | "multi";
    selectedRows: Ref<T[]>;
    rows: MaybeRefOrGetter<T[]>;
}): {
    selectableHeaderState: () => boolean | "indeterminate";
    toggleSelectableHeader: () => void;
    selectableRowState: (row: T) => boolean;
    toggleSelectableRow: (row: T) => void;
} {
    const { selectable, selectedRows, rows } = options;

    if (!selectable) {
        return {
            selectableHeaderState: () => false,
            toggleSelectableHeader: () => undefined,
            selectableRowState: () => false,
            toggleSelectableRow: () => undefined,
        };
    }

    const isIndeterminate = computed(() => {
        return (
            selectedRows.value.length > 0 &&
            selectedRows.value.length < toValue(rows).length
        );
    });

    const isAllRowsSelected = computed((): boolean => {
        return (
            selectedRows.value.length > 0 &&
            selectedRows.value.length === toValue(rows).length
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
            selectedRows.value = [...toValue(rows)];
        }
    }

    function toggleSelectableRow(row: T): void {
        assertRef(selectedRows);

        if (selectable === "single") {
            selectedRows.value = [row];
        } else {
            const index = selectedRows.value.indexOf(row);

            if (index === -1) {
                selectedRows.value.push(row);
            } else {
                selectedRows.value.splice(index, 1);
            }
        }
    }

    function selectableRowState(row: T): boolean {
        const key = rowKey(row);
        return selectedRows.value.some(
            (selectedRow) => rowKey(selectedRow) === key,
        );
    }

    watch(
        () => toValue(rows),
        (newValue) => {
            selectedRows.value = selectedRows.value.filter((it) =>
                newValue.includes(it),
            );
        },
        { deep: 1, immediate: true },
    );

    return {
        toggleSelectableHeader,
        toggleSelectableRow,
        selectableHeaderState,
        selectableRowState,
    };
}
