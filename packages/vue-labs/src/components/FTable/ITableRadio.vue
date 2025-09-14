<script setup lang="ts" generic="T, K extends keyof T">
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { type FTableActivateCellEvent } from "./events";
import { type NormalizedTableColumnRadio } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnRadio<T, K>;
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

function onChange(_e: Event): void {
    assertRef(inputElement);
    column.update(row, inputElement.value.checked, !inputElement.value.checked);
}
</script>

<template>
    <td class="table-ng__cell table-ng__cell--radio" @table-activate-cell="onActivateCell">
        <input
            ref="input"
            type="radio"
            :checked="column.value(row)"
            :aria-label="column.header"
            tabindex="-1"
            @change="onChange"
        />
    </td>
</template>
