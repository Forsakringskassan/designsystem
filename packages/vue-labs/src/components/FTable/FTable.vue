<script
    setup
    lang="ts"
    generic="T, KeyAttribute extends keyof T = keyof T, ExpandableAttribute extends keyof T = keyof T"
>
import {
    type ComponentPublicInstance,
    type Ref,
    computed,
    onMounted,
    provide,
    ref,
    toValue,
    useSlots,
    useTemplateRef,
} from "vue";
import { assertRef, assertSet } from "@fkui/logic";
import { type ItemIdentifier, FSortFilterDatasetInjected, setItemIdentifiers, useSlotUtils } from "@fkui/vue";
import { activateCell, maybeNavigateToCell, setDefaultCellTarget, stopEdit } from "./FTable.logic";
import ITableExpandButton from "./ITableExpandButton.vue";
import ITableExpandable from "./ITableExpandable.vue";
import ITableHeader from "./ITableHeader.vue";
import ITableHeaderSelectable from "./ITableHeaderSelectable.vue";
import ITableSelectable from "./ITableSelectable.vue";
import { type MetaRow } from "./MetaRow";
import { isFTableCellApi, tableCellApiSymbol } from "./f-table-api";
import { getBodyRowCount } from "./get-body-row-count";
import { getMetaRows } from "./get-meta-rows";
import { stopEditKey } from "./start-stop-edit";
import { type NormalizedTableColumn, type TableColumn, normalizeTableColumns } from "./table-column";
import { usePopupError } from "./use-popup-error";
import { useSelectable } from "./use-selectable";
import { useTabstop } from "./use-tabstop";

type ExpandedContent = Required<T>[ExpandableAttribute] extends unknown[]
    ? Required<T>[ExpandableAttribute][number]
    : never;

const selectedRows = defineModel<T[]>("selectedRows", { default: [] });

const {
    columns: rawColumns,
    rows,
    keyAttribute = undefined,
    expandableAttribute = undefined,
    striped,
    selectable = undefined,
} = defineProps<{
    columns: Array<TableColumn<T, KeyAttribute>>;
    rows: T[];
    keyAttribute?: KeyAttribute;
    expandableAttribute?: ExpandableAttribute;
    striped?: boolean;
    selectable?: "single" | "multi";
}>();

defineSlots<{
    /**
     * Slot for table caption
     */
    caption?(): void;
    /**
     * Slot for content when table is empty
     */
    empty?(): void;
    /**
     * Slot for table footer
     */
    footer?(): void;
    /**
     * Slot for rendering custom expandable content
     */
    expandable?(bindings: {
        /**
         * The expanded row (from `expandableAttribute` of the parent row)
         */
        row: ExpandedContent;
    }): void;
}>();

const { hasSlot } = useSlotUtils();
const tableRef = useTemplateRef("table");
const expandedKeys: Ref<ItemIdentifier[]> = ref([]);
const keyedRows = computed(() => setItemIdentifiers(rows, keyAttribute, expandableAttribute));
const metaRows = computed(
    (): Array<MetaRow<T>> => getMetaRows(keyedRows.value, expandedKeys.value, expandableAttribute),
);
const isTreegrid = computed(() => Boolean(expandableAttribute));
const role = computed(() => (isTreegrid.value ? "treegrid" : "grid"));

const hasCaption = computed(() => {
    return hasSlot("caption", {}, { stripClasses: [] });
});

const isEmpty = computed((): boolean => {
    return metaRows.value.length === 0;
});

const ariaRowcount = computed((): number => {
    const headerRow = 1;
    const footerRow = hasFooter.value ? 1 : 0;
    return getBodyRowCount(keyedRows.value, expandableAttribute) + headerRow + footerRow;
});

const columnCount = computed((): number => {
    const expandCol = isTreegrid.value ? 1 : 0;
    const selectCol = selectable ? 1 : 0;
    const count = columns.value.length + expandCol + selectCol;
    return Math.max(1, count);
});

const hasFooter = computed((): boolean => {
    return hasSlot("footer");
});
const columns = computed(() => normalizeTableColumns(rawColumns));

const tableClasses = computed(() => {
    return striped ? "table-ng table-ng--striped" : "table-ng";
});

const slots = useSlots();
const hasExpandableSlot = computed(() => {
    return Boolean(slots.expandable);
});

/* eslint-disable-next-line @typescript-eslint/require-await -- technical debt */
async function stopEditHandler(
    element: HTMLElement,
    reason: "enter" | "escape" | "tab" | "shift-tab" | "blur",
): Promise<void> {
    stopEdit(element, reason);
}

provide(stopEditKey, stopEditHandler);

function onToggleExpanded(key: ItemIdentifier): void {
    const index = expandedKeys.value.indexOf(key);

    if (index < 0) {
        expandedKeys.value.push(key);
    } else {
        expandedKeys.value.splice(index, 1);
    }
}

function onKeydown(e: KeyboardEvent): void {
    maybeNavigateToCell(e);
}

function onClick(e: MouseEvent): void {
    const cell = (e.target as HTMLElement).closest<HTMLElement>("td, th");

    if (cell) {
        activateCell(cell, { focus: true });
    }
}

function onTableFocusin(e: FocusEvent): void {
    assertRef(tableRef);

    tableRef.value.querySelectorAll(`[tabindex="0"]`).forEach((it) => {
        if (it !== e.target) {
            it.setAttribute("tabindex", "-1");
        }
    });
}

function isInExpandable(el: HTMLElement): boolean {
    if (!el.parentElement) {
        return false;
    }
    return Boolean(el.parentElement.closest(".table-ng__custom-expandable"));
}

function onTableFocusout(e: FocusEvent): void {
    const { target, relatedTarget } = e;
    const validFocus = target instanceof HTMLElement && relatedTarget instanceof HTMLElement;
    if (!validFocus) {
        return;
    }
    if (isInExpandable(target)) {
        return;
    }

    if (!tableRef.value) {
        return;
    }
    /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- technical debt */
    const outsideTable = !relatedTarget || !tableRef.value.contains(relatedTarget);

    if (outsideTable) {
        const cell = target.closest<HTMLElement>("td, th");

        if (cell) {
            activateCell(cell, { focus: false });
        }
    } else {
        target.tabIndex = -1;
    }
}

const { sort, registerCallbackOnSort, registerCallbackOnMount } = FSortFilterDatasetInjected();
const sortableColumns = ref<string[]>([]);
const sortedColumn = ref("");
const sortedAscending = ref(false);

function callbackSortableColumns(columnNames: string[]): void {
    sortableColumns.value = columnNames;
}

function callbackOnSort(columnName: string, ascending: boolean): void {
    sortedColumn.value = columnName;
    sortedAscending.value = ascending;
}

function isSortEnabled(column: NormalizedTableColumn<T, KeyAttribute>): boolean {
    if (!column.sortable) {
        return false;
    }

    /* eslint-disable-next-line @typescript-eslint/prefer-includes -- technical debt */
    return sortableColumns.value.indexOf(String(column.sortable)) > -1;
}

function getSortOrder(column: NormalizedTableColumn<T, KeyAttribute>): "unsorted" | "ascending" | "descending" {
    if (sortedColumn.value !== column.sortable) {
        return "unsorted";
    } else {
        return sortedAscending.value ? "ascending" : "descending";
    }
}

function onToggleSortOrder(sortable: string): void {
    if (sortable === sortedColumn.value) {
        if (sortedAscending.value) {
            sort(sortable, false);
        } else {
            sort("", true);
        }
    } else {
        sort(sortable, true);
    }
}

function bindCellApiRef(ref: Element | ComponentPublicInstance | null): void {
    if (!isFTableCellApi(ref)) {
        return;
    }

    const apiEl = toValue(ref.tabstopEl);
    if (!apiEl) {
        return;
    }

    const cell = apiEl.closest<HTMLElement>("td, th");
    assertSet(cell);
    cell[tableCellApiSymbol] = ref;
}

function isAriaSelected(level: number = 1, row: T): boolean {
    return level < 2 && selectableRowState(row);
}

const { onPopupError, onClosePopupError, activeErrorAnchor } = usePopupError();

const { selectableHeaderState, toggleSelectableHeader, selectableRowState, toggleSelectableRow } = useSelectable({
    selectable,
    selectedRows,
    rows: keyedRows,
});

const tableApi = useTabstop(tableRef, keyedRows);
defineExpose(tableApi);

onMounted(() => {
    assertRef(tableRef);
    registerCallbackOnMount(callbackSortableColumns);
    registerCallbackOnSort(callbackOnSort);
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
    setDefaultCellTarget(tableRef.value);
});
</script>

<template>
    <table
        ref="table"
        :role
        :class="tableClasses"
        :aria-rowcount
        @focusin="onTableFocusin"
        @focusout="onTableFocusout"
        @click="onClick"
        @keydown="onKeydown"
    >
        <caption v-if="hasCaption" data-test="caption">
            <slot name="caption"></slot>
        </caption>
        <thead>
            <tr class="table-ng__row" aria-rowindex="1">
                <th v-if="isTreegrid" scope="col" tabindex="-1" class="table-ng__column"></th>
                <i-table-header-selectable
                    v-if="selectable"
                    :ref="bindCellApiRef"
                    :state="selectableHeaderState()"
                    :selectable
                    @toggle="toggleSelectableHeader"
                />

                <i-table-header
                    v-for="column in columns"
                    :key="column.id"
                    :column
                    :sort-enabled="isSortEnabled(column)"
                    :sort-order="getSortOrder(column)"
                    scope="col"
                    @toggle-sort-order="onToggleSortOrder"
                ></i-table-header>
            </tr>
        </thead>

        <tbody>
            <template v-if="isEmpty">
                <tr class="table-ng__row--empty">
                    <td :colspan="columnCount" class="table-ng__cell">
                        <slot name="empty"> Tabellen är tom </slot>
                    </td>
                </tr>
            </template>
            <tr
                v-for="{ key, row, rowIndex, level, setsize, posinset, isExpandable, isExpanded } in metaRows"
                v-else
                :key
                class="table-ng__row"
                :aria-level="level"
                :aria-rowindex="rowIndex"
                :aria-setsize="setsize"
                :aria-posinset="posinset"
                :aria-selected="isAriaSelected(level, row)"
            >
                <i-table-expand-button
                    v-if="isTreegrid"
                    :ref="bindCellApiRef"
                    :is-expandable
                    :is-expanded
                    :row-key="key"
                    @toggle="onToggleExpanded"
                ></i-table-expand-button>

                <i-table-expandable v-if="level! > 1 && hasExpandableSlot" :colspan="columns.length">
                    <!-- @todo "typeof row" is a lie, row is not T but T | T[ExpandableAttribute] -->
                    <slot name="expandable" v-bind="{ row: row as ExpandedContent }" />
                </i-table-expandable>

                <template v-else>
                    <i-table-selectable
                        v-if="selectable"
                        :ref="bindCellApiRef"
                        :level
                        :selectable
                        :state="selectableRowState(row)"
                        :row
                        @toggle="toggleSelectableRow"
                    />

                    <template v-for="column in columns" :key="column.id">
                        <component
                            :is="column.component"
                            v-if="'component' in column"
                            :ref="bindCellApiRef"
                            :row
                            :column
                            :active-error-anchor
                            @close-error="onClosePopupError"
                            @on-error="onPopupError"
                        ></component>
                        <component :is="column.render(row)" v-else-if="'render' in column" :row></component>
                    </template>
                </template>
            </tr>
        </tbody>
        <tfoot v-if="hasFooter">
            <tr class="table-ng__row" :aria-rowindex="ariaRowcount">
                <td :colspan="columnCount" class="table-ng__cell--custom">
                    <slot name="footer"></slot>
                </td>
            </tr>
        </tfoot>
    </table>
</template>
