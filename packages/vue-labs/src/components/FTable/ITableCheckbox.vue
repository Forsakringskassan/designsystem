<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { activateCell } from "./FTable.logic";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnCheckbox } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnCheckbox<T, K>;
    row: T;
}>();

const targetElement = useTemplateRef("target");
const ariaLabel = computed(() => {
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});

const checked = computed(() => {
    return Boolean(column.checked(row));
});

function onClickInput(e: Event): void {
    e.stopPropagation();
    assertRef(targetElement);
    activateCell(targetElement.value, { focus: true });
    column.update(row, checked.value, !checked.value);
}

function onClickTd(e: Event): void {
    e.stopPropagation();
    assertRef(targetElement);
    activateCell(targetElement.value, { focus: true });
    column.update(row, !checked.value, checked.value);
}

const expose: FTableCellApi = { tabstopEl: targetElement };
defineExpose(expose);
</script>

<template>
    <td v-if="column.editable(row)" class="table-ng__cell table-ng__cell--checkbox" @click="onClickTd">
        <input ref="target" :checked type="checkbox" :aria-label tabindex="-1" @click="onClickInput" />
    </td>
    <td v-else ref="target" tabindex="-1" class="table-ng__cell table-ng__cell--checkbox">
        <input :checked="Boolean(column.checked(row))" type="checkbox" :aria-label />
    </td>
</template>
