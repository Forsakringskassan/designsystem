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
    watchEffect,
} from "vue";
import { assertRef, assertSet } from "@fkui/logic";
import { FSortFilterDatasetInjected, setInternalKeys, useTranslate } from "@fkui/vue";
import { activateCell, getMetaRows, maybeNavigateToCell, setDefaultCellTarget, stopEdit } from "./FTable.logic";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableExpandButton from "./ITableExpandButton.vue";
import ITableExpandable from "./ITableExpandable.vue";
import ITableHeader from "./ITableHeader.vue";
import ITableHeaderSelectable from "./ITableHeaderSelectable.vue";
import ITableRadio from "./ITableRadio.vue";
import { type MetaRow } from "./MetaRow";
import { isFTableCellApi, tableCellApiSymbol } from "./f-table-api";
import { getBodyRowCount } from "./get-body-row-count";
import { stopEditKey } from "./start-stop-edit";
import {
    type NormalizedTableColumn,
    type NormalizedTableColumnCheckbox,
    type NormalizedTableColumnRadio,
    type TableColumn,
    normalizeTableColumns,
} from "./table-column";
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
const $t = useTranslate();
const tableRef = useTemplateRef("table");
const selectAllRef = ref<HTMLInputElement | null>(null);
const expandedKeys: Ref<string[]> = ref([]);
const keyedRows = computed(() => setInternalKeys(rows, keyAttribute, expandableAttribute));
const metaRows = computed(
    (): Array<MetaRow<T>> => getMetaRows(keyedRows.value, expandedKeys.value, expandableAttribute),
);
const isTreegrid = computed(() => Boolean(expandableAttribute));
const role = computed(() => (isTreegrid.value ? "treegrid" : "grid"));

const isEmpty = computed((): boolean => {
    return metaRows.value.length === 0;
});

const ariaRowcount = computed((): number => {
    // +1 to include header row.
    return getBodyRowCount(keyedRows.value, expandableAttribute) + 1;
});

const columnCount = computed((): number => {
    const expandCol = isTreegrid.value ? 1 : 0;
    const selectCol = selectable ? 1 : 0;
    const count = columns.value.length + expandCol + selectCol;
    return Math.max(1, count);
});

const multiSelectColumn: NormalizedTableColumnCheckbox<T, KeyAttribute> = {
    type: "checkbox",
    id: Symbol("multi-select"),
    header: ref("selectable"),
    description: ref(null),
    sortable: null,
    component: ITableCheckbox,
    label() {
        /** Screen reader text for checkbox in multi select table row. */
        return $t("fkui.table.selectable.checkbox", "Välj rad");
    },
    value(row) {
        if (!keyAttribute) {
            return false;
        }

        return selectedRows.value.some((it) => {
            return row[keyAttribute] === it[keyAttribute];
        });
    },
    editable() {
        return true;
    },
    update(row, _newValue, _oldValue) {
        assertRef(selectedRows);
        const index = selectedRows.value.indexOf(row);

        if (index < 0) {
            selectedRows.value.push(row);
        } else {
            selectedRows.value.splice(index, 1);
        }
    },
};

const singleSelectColumn: NormalizedTableColumnRadio<T, KeyAttribute> = {
    type: "radio",
    id: Symbol("single-select"),
    header: ref("Välj en rad"),
    description: ref(null),
    sortable: null,
    component: ITableRadio,
    label() {
        /** Screen reader text for radio button in single select table row. */
        return $t("fkui.table.selectable.radio", "Välj rad");
    },
    value(row) {
        if (!keyAttribute) {
            return false;
        }

        return selectedRows.value.some((it) => {
            return row[keyAttribute] === it[keyAttribute];
        });
    },
    update(row, _newValue, _oldValue) {
        assertRef(selectedRows);
        selectedRows.value = [row];
    },
};

const isIndeterminate = computed(() => {
    return selectedRows.value.length > 0 && selectedRows.value.length < rows.length;
});

const isAllRowsSelected = computed((): boolean => {
    return selectedRows.value.length > 0 && selectedRows.value.length === rows.length;
});

const isSingleSelect = computed(() => {
    return selectable === "single";
});

const isMultiSelect = computed(() => {
    return selectable === "multi";
});

watchEffect(() => {
    if (selectAllRef.value) {
        selectAllRef.value.indeterminate = isIndeterminate.value;
        selectAllRef.value.checked = isAllRowsSelected.value;
    }
});

function onSelectAllChange(): void {
    if (selectAllRef.value?.checked) {
        selectedRows.value = [...rows];
    } else {
        selectedRows.value = [];
    }
}

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

function onToggleExpanded(key: string): void {
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
    const td = (e.target as HTMLElement).closest("td");

    if (td) {
        activateCell(td, { focus: true });
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
    const outsideTable = !relatedTarget || !tableRef.value.contains(relatedTarget);

    if (outsideTable) {
        const td = target.closest("td");

        if (td) {
            activateCell(td, { focus: false });
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

function bindSelectableCellApiRef(ref: Element | ComponentPublicInstance | null): void {
    if (!isFTableCellApi(ref)) {
        return;
    }

    bindCellApiRef(ref);
    selectAllRef.value = toValue(ref.tabstopEl) as HTMLInputElement | null;
}

const tableApi = useTabstop(tableRef, metaRows);
defineExpose(tableApi);

onMounted(() => {
    assertRef(tableRef);
    registerCallbackOnMount(callbackSortableColumns);
    registerCallbackOnSort(callbackOnSort);
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
        <thead>
            <tr class="table-ng__row" aria-rowindex="1">
                <th v-if="isTreegrid" scope="col" tabindex="-1" class="table-ng__column"></th>
                <i-table-header-selectable
                    v-if="isMultiSelect"
                    :ref="bindSelectableCellApiRef"
                    @change="onSelectAllChange"
                />
                <th v-if="isSingleSelect" scope="col">{{ singleSelectColumn.header }}</th>
                <i-table-header
                    v-for="column in columns"
                    :key="column.id"
                    :column
                    :sort-enabled="isSortEnabled(column)"
                    :sort-order="getSortOrder(column)"
                    scope="col"
                    class="table-ng__column"
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
                    <i-table-checkbox
                        v-if="isMultiSelect"
                        :ref="bindCellApiRef"
                        :row
                        :column="multiSelectColumn"
                        class="table-ng__cell--select"
                    ></i-table-checkbox>
                    <i-table-radio
                        v-if="isSingleSelect"
                        :ref="bindCellApiRef"
                        :row
                        :column="singleSelectColumn"
                        class="table-ng__cell--select"
                    ></i-table-radio>
                    <template v-for="column in columns" :key="column.id">
                        <component
                            :is="column.component"
                            v-if="'component' in column"
                            :ref="bindCellApiRef"
                            :row
                            :column
                        ></component>
                        <component :is="column.render(row)" v-else-if="'render' in column" :row></component>
                    </template>
                </template>
            </tr>
        </tbody>
    </table>
    <slot name="footer"></slot>
</template>
