<script setup lang="ts" generic="T, K extends keyof T">
import { assertRef } from "@fkui/logic";
import { computed, useTemplateRef } from "vue";
import { type FTableActivateCellEvent } from "./events";
import { type NormalizedTableColumnAnchor } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnAnchor<T, K>;
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

const renderAnchor = computed(() => {
    return column.enabled(row) && column.value(row) !== null;
});
</script>

<template>
    <td v-if="renderAnchor" class="table-ng__cell table-ng__cell--anchor" @table-activate-cell="onActivateCell">
        <a ref="target" class="anchor anchor--block" target="_blank" :href="column.href" tabindex="-1">
            {{ column.value(row) }}
        </a>
    </td>
    <td v-else ref="target" tabindex="-1" class="table-ng__cell" @table-activate-cell="onActivateCell"></td>
</template>
