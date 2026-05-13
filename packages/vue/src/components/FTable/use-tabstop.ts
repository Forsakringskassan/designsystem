import { type Ref, type ShallowRef, onUpdated, ref, watch } from "vue";
import { assertRef, assertSet } from "@fkui/logic";
import { getItemIdentifier } from "../../utils";
import { type FTableApi } from "./f-table-api";
import { activateCell, getCellTarget } from "./f-table.logic";
import { type MetaRow } from "./meta-row";

function matching(
    needle: MetaRow<unknown>,
): (item: MetaRow<unknown>) => boolean {
    const id = getItemIdentifier(needle.row);
    return (item) => getItemIdentifier(item.row) === id;
}

function findClosestRemainingRowIndex(
    oldRows: Array<MetaRow<unknown>>,
    newRows: Array<MetaRow<unknown>>,
    oldIndex: number,
    direction: "above" | "below",
): number | undefined {
    const isMatchingRow = (
        candidate: MetaRow<unknown>,
        index: number,
    ): boolean => {
        const isInDirection =
            direction === "above" ? index < oldIndex : index > oldIndex;

        return isInDirection && newRows.some(matching(candidate));
    };

    const index =
        direction === "above"
            ? oldRows.findLastIndex(isMatchingRow)
            : oldRows.findIndex(isMatchingRow);

    return index === -1 ? undefined : index;
}

/**
 * A table composable responsible for setting new tabstop and focus when a table row
 * with tabstop is removed.
 *
 * Since a row removal can occur because of multiple reasons, the default behavior
 * is to fallback to the first data cell.
 *
 * During a known row removal operation it is possible to alter this behavior by using
 * the function `withTabstopBehaviour` provided from this composable.
 *
 * ```
 * const { withTabstopBehaviour } = useTemplateRef("table");
 * withTabstopBehaviour("row-removal", removeRowLogic);
 * ```
 *
 * @internal
 */
export function useTabstop(
    tableRef: Readonly<ShallowRef<HTMLTableElement | null>>,
    metaRows: Readonly<Ref<Array<MetaRow<unknown>>>>,
): FTableApi {
    let pendingRowRemoval = false;
    const renderOptions = ref({ fallbackToFirstCell: false, focus: false });

    function fallbackToFirstCell(
        newRows: Array<MetaRow<unknown>>,
        oldRows: Array<MetaRow<unknown>>,
        focus: boolean,
    ): void {
        assertRef(tableRef);

        const needle = newRows[0];
        const newFirstRowOldIndex = oldRows.findIndex(matching(needle));
        if (newFirstRowOldIndex !== -1) {
            const target = getCellTarget(
                tableRef.value,
                newFirstRowOldIndex + 1,
                0,
            );
            activateCell(target, { focus });
        } else {
            renderOptions.value.focus = focus;
            renderOptions.value.fallbackToFirstCell = true;
        }
    }

    watch(metaRows, (newRows, oldRows) => {
        const tabFallback = pendingRowRemoval ? "sticky" : "first-cell";
        pendingRowRemoval = false;

        // resolve current tabstop details
        assertRef(tableRef);
        const oldTabstopElement =
            tableRef.value.querySelector<HTMLElement>(`[tabindex="0"]`);

        // if coming from a modal or outside of the table we need this guard
        if (!oldTabstopElement) {
            renderOptions.value.fallbackToFirstCell = true;
            renderOptions.value.focus = false;
            return;
        }
        assertSet(oldTabstopElement);
        const oldTabstopFocused = oldTabstopElement === document.activeElement;

        // if interacting with column, leave as is
        if (oldTabstopElement.closest("th")) {
            return;
        }

        // if no new rows, default to empty slot after render
        if (oldRows.length === 0 || newRows.length === 0) {
            renderOptions.value.fallbackToFirstCell = true;
            renderOptions.value.focus = oldTabstopFocused;
            return;
        }

        const oldTabstopTd = oldTabstopElement.closest("td");
        assertSet(oldTabstopTd);
        const oldTabstopTr = oldTabstopTd.parentElement as HTMLTableRowElement;
        const needle = oldRows[oldTabstopTr.rowIndex - 1];
        const isBeingRemoved = !newRows.some(matching(needle));

        // exit if only updated rows when tabstop focused (change triggered from inside table)
        if (oldTabstopFocused && !isBeingRemoved) {
            return;
        }

        if (!isBeingRemoved) {
            if (oldTabstopFocused) {
                return;
            } else {
                // changed from outside
                fallbackToFirstCell(newRows, oldRows, false);
                return;
            }
        }

        if (tabFallback === "first-cell") {
            fallbackToFirstCell(newRows, oldRows, oldTabstopFocused);
            return;
        }

        const oldIndex = oldTabstopTr.rowIndex - 1;
        const oldCellIndex = oldTabstopTd.cellIndex;

        const rowAboveIndex = findClosestRemainingRowIndex(
            oldRows,
            newRows,
            oldIndex,
            "above",
        );

        const rowBelowIndex = findClosestRemainingRowIndex(
            oldRows,
            newRows,
            oldIndex,
            "below",
        );

        const targetRowIndex = rowAboveIndex ?? rowBelowIndex;

        if (targetRowIndex !== undefined) {
            const target = getCellTarget(
                tableRef.value,
                targetRowIndex + 1,
                oldCellIndex,
            );
            activateCell(target, { focus: oldTabstopFocused });
        } else {
            fallbackToFirstCell(newRows, oldRows, oldTabstopFocused);
        }
    });

    onUpdated(() => {
        if (!renderOptions.value.fallbackToFirstCell) {
            return;
        }

        assertRef(tableRef);
        const target = getCellTarget(tableRef.value, 1, 0);
        activateCell(target, { focus: renderOptions.value.focus });
        renderOptions.value.fallbackToFirstCell = false;
    });

    async function withTabstopBehaviour(
        behaviour: "default" | "row-removal",
        action: () => void | Promise<void>,
    ): Promise<void> {
        if (behaviour === "row-removal") {
            pendingRowRemoval = true;
        }

        try {
            await action();
        } finally {
            pendingRowRemoval = false;
        }
    }

    return { withTabstopBehaviour };
}
