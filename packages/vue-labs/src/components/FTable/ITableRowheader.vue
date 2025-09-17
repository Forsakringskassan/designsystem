<script setup lang="ts" generic="T, K extends keyof T">
import { assertRef } from "@fkui/logic";
import { useTemplateRef } from "vue";
import { type FTableActivateCellEvent } from "./events";
import { type NormalizedTableColumnRowHeader } from "./table-column";

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnRowHeader<T, K>;
}>();

const thRef = useTemplateRef("th");

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(thRef);
    thRef.value.tabIndex = 0;

    if (e.detail.focus) {
        thRef.value.focus();
    }
}
</script>

<template>
    <th ref="th" class="table-ng__cell table-ng__cell--rowheader" scope="row" @table-activate-cell="onActivateCell">
        {{ column.value(row) }}
    </th>
</template>
