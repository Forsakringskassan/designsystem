<script setup lang="ts" generic="T, K extends keyof T">
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { type TableColumnCheckbox } from "./table-column";
import { FTableActivateCellEvent } from "./events";

const { column, row } = defineProps<{
    column: TableColumnCheckbox<T, K>;
    row: T;
}>();

const inputElement = useTemplateRef("input");

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(inputElement);
    inputElement.value.tabIndex = 0;

    if (e.detail.focus) {
        inputElement.value.focus();
    }
}
</script>

<template>
    <td tabindex="-1" @table-activate-cell="onActivateCell">
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <input ref="input" v-model="row[column.key!]" type="checkbox" :aria-label="column.header" tabindex="-1" />
    </td>
</template>
