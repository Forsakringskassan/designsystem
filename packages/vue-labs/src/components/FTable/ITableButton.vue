<script setup lang="ts" generic="T, K extends keyof T">
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FIcon } from "@fkui/vue";
import { type TableColumnButton } from "./table-column";
import { FTableActivateCellEvent } from "./events";

const { column, row } = defineProps<{
    column: TableColumnButton<T>;
    row: T;
}>();

const buttonElement = useTemplateRef("button");

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(buttonElement);
    buttonElement.value.tabIndex = 0;

    if (e.detail.focus) {
        buttonElement.value.focus();
    }
}
</script>

<template>
    <td class="table-ng__cell table-ng__cell--button" @table-activate-cell="onActivateCell">
        <button ref="button" class="icon-button" type="button" tabindex="-1" @click="column.onClick!(row)">
            <f-icon name="trashcan"></f-icon>
            <span class="sr-only">Knapptext</span>
        </button>
    </td>
</template>
