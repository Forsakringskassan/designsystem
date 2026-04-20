import {
    type MaybeRefOrGetter,
    type Ref,
    ref,
    toValue,
    watch,
    watchEffect,
} from "vue";
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

    const headerState = ref<boolean | "indeterminate">(false);

    function selectableHeaderState(): boolean | "indeterminate" {
        return headerState.value;
    }

    // `selectedRows` update resolves new `headerState`
    watchEffect(() => {
        switch (selectedRows.value.length) {
            case 0:
                headerState.value = false;
                break;
            case toValue(rows).length:
                headerState.value = true;
                break;
            default:
                headerState.value = "indeterminate";
                break;
        }
    });

    function toggleSelectableHeader(): void {
        // if empty table, just toggle visual state (don't resolve from `selectedRows`)
        if (toValue(rows).length === 0) {
            headerState.value = headerState.value !== true;
            return;
        }

        if (headerState.value !== true) {
            selectedRows.value = [...toValue(rows)];
        } else {
            selectedRows.value = [];
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
