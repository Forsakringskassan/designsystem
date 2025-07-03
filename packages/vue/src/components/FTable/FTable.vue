<script setup lang="ts" generic="T extends Record<string, any>, K extends keyof T">
import { computed, onMounted, provide, type Ref, ref, useTemplateRef } from "vue";
import { createReusableTemplate } from "@vueuse/core";
import { guardSet, guardRef } from "@fkui/logic";
import { getInternalKey, setInternalKeys } from "../../utils/internal-key";
import { navigate } from "./FTable.logic";
import ITableSet from "./ITableSet.vue";
import ITableRow from "./ITableRow.vue";

const { rows, keyAttribute, expandableAttribute } = defineProps<{
    rows: T[];
    keyAttribute?: K;
    expandableAttribute?: string;
}>();

const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
const tableRef = useTemplateRef("table");
const activeCellTarget: Ref<HTMLElement | null> = ref(null);

async function startEdit(focusElement: HTMLElement): Promise<void> {
    if (activeCellTarget.value) {
        activeCellTarget.value.tabIndex = -1;
    }

    focusElement.focus();
}

async function stopEdit(reason: "enter" | "escape" | "tab" | "shift-tab" | "blur"): Promise<void> {
    guardRef(tableRef);
    guardRef(activeCellTarget);

    const td = getTd(activeCellTarget.value);
    const rowIndex = getTr(td).rowIndex;
    const cellIndex = td.cellIndex;
    const lastRowIndex = getLastRowIndex(tableRef.value);
    const lastCellIndex = getLastCellIndex(tableRef.value);

    switch (reason) {
        case "enter": {
            if (rowIndex !== lastRowIndex) {
                const target = getCellElementTarget(tableRef.value, rowIndex + 1, cellIndex);
                setActiveCellTarget(target);
                activeCellTarget.value?.focus();
            } else {
                activeCellTarget.value.tabIndex = 0;
                activeCellTarget.value.focus();
            }
            break;
        }
        case "escape": {
            activeCellTarget.value.tabIndex = 0;
            activeCellTarget.value.focus();
            break;
        }
        case "tab": {
            if (cellIndex === lastCellIndex && rowIndex === lastRowIndex) {
                activeCellTarget.value.tabIndex = 0;
                activeCellTarget.value.focus();
            } else if (cellIndex === lastCellIndex) {
                const target = getCellElementTarget(tableRef.value, rowIndex + 1, 0);
                setActiveCellTarget(target);
                activeCellTarget.value?.focus();
            } else {
                const target = getCellElementTarget(tableRef.value, rowIndex, cellIndex + 1);
                setActiveCellTarget(target);
                activeCellTarget.value?.focus();
            }
            break;
        }
        case "shift-tab": {
            if (cellIndex === 0 && rowIndex === 1) {
                activeCellTarget.value.tabIndex = 0;
                activeCellTarget.value.focus();
            } else if (cellIndex === 0) {
                const target = getCellElementTarget(tableRef.value, rowIndex - 1, 0);
                setActiveCellTarget(target);
                activeCellTarget.value?.focus();
            } else {
                const target = getCellElementTarget(tableRef.value, rowIndex, cellIndex - 1);
                setActiveCellTarget(target);
                activeCellTarget.value?.focus();
            }
            break;
        }
        case "blur": {
            activeCellTarget.value.tabIndex = 0;
            break;
        }

        default: {
            throw new Error(`invalid stop edit reason: ${reason}`);
        }
    }
}

provide("startEdit", startEdit);
provide("stopEdit", stopEdit);

function getLastRowIndex(tableElement: HTMLTableElement): number {
    return tableElement.rows.length - 1;
}

function getLastCellIndex(tableElement: HTMLTableElement): number {
    return tableElement.rows[0].cells.length - 1;
}

function getCellElementTarget(tableElement: HTMLTableElement, rowIndex: number, cellIndex: number): HTMLElement {
    const cellElement = tableElement.rows[rowIndex].cells[cellIndex];
    return getCellOrAction(cellElement);
}

function getCellOrAction(cell: HTMLTableCellElement): HTMLElement {
    if (cell.firstElementChild?.tagName.toLowerCase() === "button") {
        return cell.firstElementChild as HTMLButtonElement;
    }

    return cell;
}

function setActiveCellTarget(target: HTMLElement): void {
    if (activeCellTarget.value) {
        activeCellTarget.value.tabIndex = -1;
    }

    activeCellTarget.value = target;
    activeCellTarget.value.tabIndex = 0;
}

function isTd(
    element: (HTMLElement & { cellIndex?: number }) | null,
): element is HTMLTableCellElement & { parentElement: HTMLTableRowElement } {
    return element !== null && element.cellIndex !== undefined;
}

function getTr(td: HTMLTableCellElement): HTMLTableRowElement {
    return td.parentElement as HTMLTableRowElement;
}

function getTd(element: HTMLElement): HTMLTableCellElement {
    if (isTd(element)) {
        return element;
    } else if (isTd(element.parentElement)) {
        return element.parentElement;
    } else {
        throw new Error("td not found");
    }
}

function onKeydown(e: KeyboardEvent): void {
    guardRef(tableRef);
    const td = getTd(e.target as HTMLElement);
    const rowIndex = getTr(td).rowIndex;
    const cellIndex = td.cellIndex;

    const navigateTo = navigate(
        e,
        rowIndex,
        cellIndex,
        getLastRowIndex(tableRef.value),
        getLastCellIndex(tableRef.value),
    );

    if (navigateTo) {
        const target = getCellElementTarget(tableRef.value, navigateTo.row, navigateTo.cell);
        setActiveCellTarget(target);
        activeCellTarget.value?.focus();
    }
}

function onClick(e: MouseEvent): void {
    guardSet(e.target);
    setActiveCellTarget(e.target as HTMLElement);
    guardRef(activeCellTarget);
    activeCellTarget.value.focus();
}

const keyedRows = computed(() => setInternalKeys(rows, keyAttribute, expandableAttribute));
const internalKey = getInternalKey<T>();

function rowKey(row: T): string {
    return String(row[internalKey]);
}

provide("rowKey", rowKey);
provide("expandableAttribute", expandableAttribute);

const expandedKeys: Ref<string[]> = ref([]);
provide("expandedKeys", expandedKeys);

function walk<T extends Record<string, unknown>, K extends keyof T>(
    array: T[],
    visit: (item: T) => void,
    childKey?: K,
): void {
    for (const item of array) {
        visit(item);

        if (childKey && item[childKey]) {
            walk(item[childKey] as T[], visit, childKey);
        }
    }
}

const ariaRowindexes = computed(() => {
    const array: string[] = [];
    walk(keyedRows.value, (row) => array.push(rowKey(row)), expandableAttribute);
    return array;
});
provide("ariaRowindexes", ariaRowindexes);

const role = computed(() => (expandableAttribute ? "treegrid" : "grid"));

onMounted(() => {
    guardRef(tableRef);
    const target = getCellElementTarget(tableRef.value, 1, 0);
    setActiveCellTarget(target);
});
</script>

<template>
    <define-template v-slot="{ row = {} }">
        <slot v-bind="{ row }"></slot>
    </define-template>

    <table ref="table" :role class="table table--striped">
        <thead>
            <!-- [html-validate-disable-next element-permitted-content -- transparent tr] -->
            <i-table-row render-header>
                <reuse-template />
            </i-table-row>
        </thead>

        <tbody @click="onClick" @keydown="onKeydown">
            <!-- [html-validate-disable-next element-permitted-content -- set of tr] -->
            <i-table-set :set="keyedRows">
                <template #default="{ row }">
                    <reuse-template :row />
                </template>
            </i-table-set>
        </tbody>
    </table>
</template>
