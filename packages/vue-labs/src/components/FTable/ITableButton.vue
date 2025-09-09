<script setup lang="ts" generic="T, K extends keyof T">
import { computed, nextTick, useTemplateRef } from "vue";
import { assertSet } from "@fkui/logic";
import { FIcon } from "@fkui/vue";
import { type NormalizedTableColumnButton } from "./table-column";
import { FTableActivateCellEvent } from "./events";

const { column, row } = defineProps<{
    column: NormalizedTableColumnButton<T, K>;
    row: T;
}>();

const buttonElement = useTemplateRef("button");
const tdElement = useTemplateRef("td");

async function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): Promise<void> {
    await nextTick();
    const element = buttonElement.value ?? tdElement.value;
    assertSet(element);
    element.tabIndex = 0;

    if (e.detail.focus) {
        element.focus();
    }
}

function onClickButton(): void {
    if (column.onClick) {
        column.onClick(row);
    }
}

const renderButton = computed(() => {
    return column.enabled(row) && column.value(row) !== null;
});
</script>

<template>
    <td v-if="renderButton" class="table-ng__cell table-ng__cell--button" @table-activate-cell="onActivateCell">
        <button ref="button" class="icon-button" type="button" tabindex="-1" @click="onClickButton">
            <f-icon v-if="column.icon" :name="column.icon"></f-icon>
            <span class="sr-only">{{ column.value(row) }}</span>
        </button>
    </td>
    <td v-else ref="td" tabindex="-1" class="table-ng__cell" @table-activate-cell="onActivateCell"></td>
</template>
