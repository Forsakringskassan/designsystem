<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FIcon } from "@fkui/vue";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnButton } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnButton<T, K>;
    row: T;
}>();

const buttonElement = useTemplateRef("button");
const tdElement = useTemplateRef("td");

function onClickButton(): void {
    assertRef(buttonElement);
    buttonElement.value.tabIndex = 0;

    if (column.onClick) {
        column.onClick(row);
    }
}

const renderButton = computed(() => {
    return column.enabled(row) && column.text(row) !== null;
});

const expose: FTableCellApi = { tabstopEl: renderButton.value ? buttonElement : tdElement };
defineExpose(expose);
</script>

<template>
    <td v-if="renderButton" class="table-ng__cell table-ng__cell--button">
        <button ref="button" class="icon-button" type="button" tabindex="-1" @click="onClickButton">
            <f-icon v-if="column.icon" :library="column.iconLibrary" :name="column.icon"></f-icon>
            <span class="sr-only">{{ column.text(row) }}</span>
        </button>
    </td>
    <td v-else ref="td" tabindex="-1" class="table-ng__cell"></td>
</template>
