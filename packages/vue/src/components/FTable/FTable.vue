<script setup lang="ts" generic="T extends Record<string, unknown>, K extends keyof T = keyof T">
import { computed, onMounted, provide, type Ref, ref, useSlots, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { setInternalKeys } from "../../utils/internal-key";
import {
    getMetaRows,
    maybeNavigateToCell,
    setDefaultCellTarget as setDefaultCellTarget,
    switchTabbable,
    stopEdit,
    setTabbable,
    getTd,
} from "./FTable.logic";
import ITableRow from "./ITableRow.vue";
import { type TableColumn, normalizeTableColumns } from "./table-column";
import ITableSelect from "./ITableSelect.vue";
import ITableCheckbox from "./ITableCheckbox.vue";
import ITableAnchor from "./ITableAnchor.vue";
import ITableButton from "./ITableButton.vue";
import ITableText from "./ITableText.vue";
import { startEditKey, stopEditKey } from "./start-stop-edit";

const {
    columns: rawColumns,
    rows,
    keyAttribute = undefined,
    expandableAttribute = undefined,
    striped = false,
} = defineProps<{
    columns: Array<TableColumn<T, K>>;
    rows: T[];
    keyAttribute?: K;
    expandableAttribute?: K;
    striped?: boolean;
}>();

const tableRef = useTemplateRef("table");
const expandedKeys: Ref<string[]> = ref([]);
const keyedRows = computed(() => setInternalKeys(rows, keyAttribute, expandableAttribute));
const metaRows = computed(() => getMetaRows(keyedRows.value, expandedKeys.value, expandableAttribute));
const isTreegrid = computed(() => Boolean(expandableAttribute));
const role = computed(() => (isTreegrid.value ? "treegrid" : "grid"));
const columns = computed(() => normalizeTableColumns(rawColumns));

const tableClasses = computed(() => {
    return striped ? "table-ng table-ng--striped" : "table-ng";
});

const slots = useSlots();
const hasExpandableSlot = computed(() => {
    return Boolean(slots["expandable"]);
});

/**
 * Current td or action (e.g. button) element.
 * Tabbable when not in edit mode.
 * May be focused when not in edit mode.
 */
const currentCellTarget: Ref<HTMLElement | null> = ref(null);

async function startEditHandler(focusElement: HTMLElement): Promise<void> {
    assertRef(currentCellTarget);
    setTabbable(currentCellTarget.value, false);
    currentCellTarget.value = getTd(focusElement);

    focusElement.focus();
}

async function stopEditHandler(reason: "enter" | "escape" | "tab" | "shift-tab" | "blur"): Promise<void> {
    assertRef(tableRef);
    assertRef(currentCellTarget);
    currentCellTarget.value = stopEdit(tableRef.value, currentCellTarget.value, reason);
}

provide(startEditKey, startEditHandler);
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
    assertRef(tableRef);
    assertRef(currentCellTarget);
    currentCellTarget.value = maybeNavigateToCell(e, tableRef.value, currentCellTarget.value);
}

function onClick(e: MouseEvent): void {
    const newCellTarget = e.target as HTMLElement;
    switchTabbable(newCellTarget, currentCellTarget.value);
    currentCellTarget.value = newCellTarget;
    currentCellTarget.value.focus();
}

onMounted(() => {
    assertRef(tableRef);
    currentCellTarget.value = setDefaultCellTarget(tableRef.value);
});
</script>

<template>
    <table ref="table" :role :class="tableClasses">
        <thead>
            <tr class="table-ng__row">
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
                        <slot name="expandable" v-bind="{ row: row as unknown as T[K] }" />
                    </td>
                </template>
                <template v-else>
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
</template>
