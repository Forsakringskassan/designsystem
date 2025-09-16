<script
    setup
    lang="ts"
    generic="T, KeyAttribute extends keyof T = keyof T, ExpandableAttribute extends keyof T = keyof T"
>
import { type Ref, computed, onMounted, provide, ref, useSlots, useTemplateRef, watchEffect } from "vue";
import { assertRef } from "@fkui/logic";
import { FSortFilterDatasetInjected, setInternalKeys } from "@fkui/vue";
import {
    dispatchActivateCellEvent,
    getMetaRows,
    maybeNavigateToCell,
    setDefaultCellTarget as setDefaultCellTarget,
    stopEdit,
} from "./FTable.logic";
import ITableRow from "./ITableRow.vue";
import {
    type NormalizedTableColumnCheckbox,
    type TableColumn,
    type NormalizedTableColumnRadio,
    type NormalizedTableColumn,
    normalizeTableColumns,
} from "./table-column";
import ITableSelect from "./ITableSelect.vue";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableRadio from "./ITableRadio.vue";
import ITableAnchor from "./ITableAnchor.vue";
import ITableButton from "./ITableButton.vue";
import ITableText from "./ITableText.vue";
import ITablePager from "./ITablePager.vue";
import ITableHeader from "./ITableHeader.vue";
import { stopEditKey } from "./start-stop-edit";
import { type MetaRow } from "./MetaRow";

type ExpandedContent = Required<T>[ExpandableAttribute] extends unknown[]
    ? Required<T>[ExpandableAttribute][number]
    : never;

const {
    columns: rawColumns,
    rows,
    keyAttribute = undefined,
    expandableAttribute = undefined,
    striped = false,
    selectable = undefined,
    paginerated = false,
} = defineProps<{
    columns: Array<TableColumn<T, KeyAttribute>>;
    rows: T[];
    keyAttribute?: KeyAttribute;
    expandableAttribute?: ExpandableAttribute;
    striped?: boolean;
    selectable?: "single" | "multi";
    paginerated?: boolean;
}>();
const selectedRows = defineModel<T[]>("selectedRows", { default: [] });
const tableRef = useTemplateRef("table");
const selectAllRef = useTemplateRef("selectAll");
const expandedKeys: Ref<string[]> = ref([]);
const keyedRows = computed(() => setInternalKeys(rows, keyAttribute, expandableAttribute));
const metaRows = computed(
    (): Array<MetaRow<T>> => getMetaRows(keyedRows.value, expandedKeys.value, expandableAttribute),
);
const isTreegrid = computed(() => Boolean(expandableAttribute));
const role = computed(() => (isTreegrid.value ? "treegrid" : "grid"));

const rowsFromPaginator = ref(metaRows.value);
const viewRows = computed((): Array<MetaRow<T>> => {
    return paginerated ? (rowsFromPaginator.value as Array<MetaRow<T>>) : metaRows.value;
});

const multiSelectColumn: NormalizedTableColumnCheckbox<T, KeyAttribute> = {
    type: "checkbox",
    header: "selectable",
    sortable: null,
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
    header: "Välj en rad",
    sortable: null,
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
        dispatchActivateCellEvent(td, { focus: true });
    }
}

function onTableFocusout(e: FocusEvent): void {
    assertRef(tableRef);
    const outsideTable = !e.relatedTarget || !tableRef.value.contains(e.relatedTarget as HTMLElement);

    if (outsideTable) {
        const td = (e.target as HTMLElement).closest("td");

        if (td) {
            dispatchActivateCellEvent(td, { focus: false });
        }
    } else {
        (e.target as HTMLElement).tabIndex = -1;
    }
}

function onItemRangeUpdate(items: T[]): void {
    rowsFromPaginator.value = items as Array<MetaRow<T>>;
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

onMounted(() => {
    assertRef(tableRef);
    setDefaultCellTarget(tableRef.value);
    registerCallbackOnMount(callbackSortableColumns);
    registerCallbackOnSort(callbackOnSort);
});
</script>

<template>
    <table ref="table" :role :class="tableClasses" @focusout="onTableFocusout" @click="onClick" @keydown="onKeydown">
        <thead>
            <tr class="table-ng__row">
                <th v-if="isMultiSelect" scope="col" class="table-ng__column table-ng__column--checkbox">
                    <input
                        ref="selectAll"
                        type="checkbox"
                        aria-label="select all"
                        tabindex="-1"
                        indeterminate
                        @change="onSelectAllChange"
                    />
                </th>
                <th v-if="isSingleSelect" scope="col">{{ singleSelectColumn.header }}</th>
                <th v-if="isTreegrid" scope="col" tabindex="-1" class="table-ng__column"></th>
                <!-- [html-validate-disable-next element-permitted-content -- transparent th] -->
                <i-table-header
                    v-for="column in columns"
                    :key="column.header"
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
            <!-- [html-validate-disable-next element-permitted-content -- transparent tr] -->
            <i-table-row
                v-for="{ key, row, rowIndex, level, setsize, posinset, isExpandable, isExpanded } in viewRows"
                :key
                :row-key="key"
                :aria-rowindex="rowIndex"
                :aria-level="level"
                :aria-setsize="setsize"
                :aria-posinset="posinset"
                :is-treegrid
                :is-expandable
                :is-expanded
                @toggle="onToggleExpanded"
            >
                <template v-if="level! > 1 && hasExpandableSlot">
                    <td :colspan="columns.length">
                        <!-- @todo "typeof row" is a lie, row is not T but T | T[ExpandableAttribute] -->
                        <slot name="expandable" v-bind="{ row: row as ExpandedContent }" />
                    </td>
                </template>
                <template v-else>
                    <i-table-checkbox v-if="isMultiSelect" :row :column="multiSelectColumn"></i-table-checkbox>
                    <i-table-radio v-if="isSingleSelect" :row :column="singleSelectColumn"></i-table-radio>
                    <template v-for="column in columns" :key="column.header">
                        <template v-if="column.type === 'checkbox'">
                            <i-table-checkbox :row :column></i-table-checkbox>
                        </template>
                        <template v-else-if="column.type === 'text'">
                            <i-table-text :row :column></i-table-text>
                        </template>
                        <template v-else-if="column.type === 'anchor'">
                            <i-table-anchor :row :column></i-table-anchor>
                        </template>
                        <template v-else-if="column.type === 'button'">
                            <i-table-button :row :column></i-table-button>
                        </template>
                        <template v-else-if="column.type === 'select'">
                            <i-table-select :row :column></i-table-select>
                        </template>
                        <template v-else-if="'render' in column">
                            <component :is="column.render(row)" :row></component>
                        </template>
                    </template>
                </template>
            </i-table-row>
        </tbody>
    </table>
    <div v-if="paginerated">
        <i-table-pager :items="metaRows as T[]" @item-range="onItemRangeUpdate" />
    </div>
    <slot name="footer"></slot>
</template>
