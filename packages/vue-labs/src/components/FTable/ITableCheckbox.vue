<script setup lang="ts" generic="T, K extends keyof T">
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { type FTableActivateCellEvent } from "./events";
import { type NormalizedTableColumnCheckbox } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnCheckbox<T, K>;
    row: T;
}>();

const targetElement = useTemplateRef("target");

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(targetElement);
    targetElement.value.tabIndex = 0;

    if (e.detail.focus) {
        targetElement.value.focus();
    }
}

function onChange(e: Event): void {
    const checked = (e.target as HTMLInputElement).checked;
    column.update(row, checked, !checked);
}
</script>

<template>
    <td
        v-if="column.editable(row)"
        class="table-ng__cell table-ng__cell--checkbox"
        @table-activate-cell="onActivateCell"
    >
        <input
            ref="target"
            :checked="column.value(row)"
            type="checkbox"
            :aria-label="column.header"
            tabindex="-1"
            @change="onChange"
        />
    </td>
    <td
        v-else
        ref="target"
        tabindex="-1"
        class="table-ng__cell table-ng__cell--checkbox"
        @table-activate-cell="onActivateCell"
    >
        <input :checked="column.value(row)" type="checkbox" :aria-label="column.header" />
    </td>
</template>
