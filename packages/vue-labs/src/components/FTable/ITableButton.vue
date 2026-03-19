<script setup lang="ts" generic="T, K extends keyof T">
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FIcon } from "@fkui/vue";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnButton } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnButton<T, K>;
    row: T;
}>();

const buttonElement = useTemplateRef("button");

function onClickButton(): void {
    assertRef(buttonElement);
    buttonElement.value.tabIndex = 0;

    if (column.onClick) {
        column.onClick(row);
    }
}

const expose: FTableCellApi = { tabstopEl: buttonElement };
defineExpose(expose);
</script>

<template>
    <td class="table-ng__cell table-ng__cell--button">
        <button ref="button" class="icon-button" type="button" tabindex="-1" @click="onClickButton">
            <f-icon v-if="column.icon" :library="column.iconLibrary" :name="column.icon"></f-icon>
            <span class="sr-only">{{ column.text(row) }}</span>
        </button>
    </td>
</template>
