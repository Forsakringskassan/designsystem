<script setup lang="ts" generic="T, K extends keyof T">
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FTableActivateCellEvent } from "./events";
import { type NormalizedTableColumnCheckbox } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnCheckbox<T, K>;
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
    <td class="table-ng__cell table-ng__cell--checkbox" @table-activate-cell="onActivateCell">
        <input
            ref="input"
            :checked="column.value(row)"
            type="checkbox"
            :aria-label="column.header"
            :disabled="!column.editable(row)"
            tabindex="-1"
            @change="onChange"
        />
    </td>
</template>
