<script setup lang="ts" generic="T extends Record<string, unknown>, K extends keyof T">
import { computed, onMounted, provide, type Ref, ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { setInternalKeys } from "../../utils/internal-key";
import {
    getMetaRows,
    maybeNavigateToCell,
    setDefaultCellTarget as setDefaultCellTarget,
    switchTabbable,
    stopEdit,
    setTabbable,
} from "./FTable.logic";
import ITableRow from "./ITableRow.vue";

const {
    rows,
    keyAttribute = undefined,
    expandableAttribute = undefined,
    striped = false,
} = defineProps<{
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

const tableClasses = computed(() => {
    return striped ? "table--striped" : "";
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
    focusElement.focus();
}

async function stopEditHandler(reason: "enter" | "escape" | "tab" | "shift-tab" | "blur"): Promise<void> {
    assertRef(tableRef);
    assertRef(currentCellTarget);
    currentCellTarget.value = stopEdit(tableRef.value, currentCellTarget.value, reason);
}

provide("startEdit", startEditHandler);
provide("stopEdit", stopEditHandler);

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
    <table ref="table" :role class="table" :tableClasses>
        <thead>
            <!-- [html-validate-disable-next element-permitted-content -- transparent tr] -->
            <i-table-row render-header :is-treegrid>
                <slot v-bind="{ row: {} }"></slot>
            </i-table-row>
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
                <slot v-bind="{ row }"></slot>
            </i-table-row>
        </tbody>
    </table>
</template>
