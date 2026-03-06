<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { activateCell } from "./FTable.logic";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnRadio } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnRadio<T, K>;
    row: T;
}>();

const inputElement = useTemplateRef("input");
const ariaLabel = computed(() => {
    const value = column.label(row);
    return value.length > 0 ? value : undefined;
});

const checked = computed(() => {
    return Boolean(column.checked(row));
});

function onClickInput(e: Event): void {
    e.stopPropagation();
    assertRef(inputElement);
    activateCell(inputElement.value, { focus: true });
    column.update(row, checked.value, !checked.value);
}

function onClickTd(e: Event): void {
    e.stopPropagation();
    assertRef(inputElement);
    activateCell(inputElement.value, { focus: true });
    column.update(row, !checked.value, checked.value);
}

const expose: FTableCellApi = { tabstopEl: inputElement };
defineExpose(expose);
</script>

<template>
    <td class="table-ng__cell table-ng__cell--radio" @click="onClickTd">
        <input ref="input" type="radio" :checked :aria-label tabindex="-1" @click="onClickInput" />
    </td>
</template>
