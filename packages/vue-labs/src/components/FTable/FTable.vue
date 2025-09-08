<script
    setup
    lang="ts"
    generic="T, KeyAttribute extends keyof T = keyof T, ExpandableAttribute extends keyof T = keyof T"
>
import { computed, onMounted, provide, type Ref, ref, useSlots, useTemplateRef, watchEffect } from "vue";
import { assertRef } from "@fkui/logic";
import { setInternalKeys } from "@fkui/vue";
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
    normalizeTableColumns,
    type NormalizedTableColumnRadio,
} from "./table-column";
import ITableSelect from "./ITableSelect.vue";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableRadio from "./ITableRadio.vue";
import ITableAnchor from "./ITableAnchor.vue";
import ITableButton from "./ITableButton.vue";
import ITableText from "./ITableText.vue";
import { stopEditKey } from "./start-stop-edit";

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
} = defineProps<{
    columns: Array<TableColumn<T, KeyAttribute>>;
    rows: T[];
    keyAttribute?: KeyAttribute;
    expandableAttribute?: ExpandableAttribute;
    striped?: boolean;
    selectable?: "single" | "multi";
}>();
const model = defineModel<T[]>({ default: [] });
const tableRef = useTemplateRef("table");
const selectAllRef = useTemplateRef("selectAll");
const expandedKeys: Ref<string[]> = ref([]);
const keyedRows = computed(() => setInternalKeys(rows, keyAttribute, expandableAttribute));
const metaRows = computed(() => getMetaRows(keyedRows.value, expandedKeys.value, expandableAttribute));
const isTreegrid = computed(() => Boolean(expandableAttribute));
const role = computed(() => (isTreegrid.value ? "treegrid" : "grid"));

const multiSelectColumn: NormalizedTableColumnCheckbox<T> = {
    type: "checkbox",
    header: "selectable",
    value(row) {
        if (!keyAttribute) {
            return false;
        }

        return model.value.some((it) => {
            return row[keyAttribute] === it[keyAttribute];
        });
    },
    update(row, _newValue, _oldValue) {
        assertRef(model);
        const index = model.value.indexOf(row);

        if (index < 0) {
            model.value.push(row);
        } else {
            model.value.splice(index, 1);
        }
    },
};

const singleSelectColumn: NormalizedTableColumnRadio<T> = {
    type: "radio",
    header: "Välj en rad",
    value(row) {
        if (!keyAttribute) {
            return false;
        }

        return model.value.some((it) => {
            return row[keyAttribute] === it[keyAttribute];
        });
    },
    update(row, _newValue, _oldValue) {
        assertRef(model);
        model.value = [row];
    },
};

const isIndeterminate = computed(() => {
    return model.value.length > 0 && model.value.length < rows.length;
});

const isAllRowsSelected = computed((): boolean => {
    return model.value.length > 0 && model.value.length === rows.length;
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
        model.value = [...rows];
    } else {
        model.value = [];
    }
}

const columns = computed(() => normalizeTableColumns(rawColumns));

const tableClasses = computed(() => {
    return striped ? "table-ng table-ng--striped" : "table-ng";
});

const slots = useSlots();
const hasExpandableSlot = computed(() => {
    return Boolean(slots["expandable"]);
});

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

onMounted(() => {
    assertRef(tableRef);
    setDefaultCellTarget(tableRef.value);
});
</script>

<template>
    <table ref="table" :role :class="tableClasses" @focusout="onTableFocusout">
        <thead>
            <tr class="table-ng__row">
                <th v-if="isMultiSelect" class="table-ng__checkbox">
                    <input
                        ref="selectAll"
                        type="checkbox"
                        aria-label="select all"
                        tabindex="-1"
                        indeterminate
                        @change="onSelectAllChange"
                    />
                </th>
                <th v-if="isSingleSelect">{{ singleSelectColumn.header }}</th>
                <th v-if="isTreegrid" scope="col" tabindex="-1" class="table-ng__column"></th>
                <th v-for="column in columns" :key="column.header" scope="col" class="table-ng__column">
                    {{ column.header }}
                </th>
            </tr>
        </thead>

        <tbody @click="onClick" @keydown="onKeydown">
            <!-- [html-validate-disable-next element-permitted-content -- transparent tr] -->
            <i-table-row
                v-for="{ key, row, rowIndex, level, setsize, posinset, isExpandable, isExpanded } in metaRows"
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
    <slot name="footer"></slot>
</template>
