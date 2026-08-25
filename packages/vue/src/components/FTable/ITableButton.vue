<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FIcon } from "../FIcon";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnButton } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnButton<T, K>;
    row: T;
}>();

const buttonElement = useTemplateRef("button");

const isVisible = computed((): boolean => {
    if (column.visible === undefined) {
        return true;
    }
    if (typeof column.visible === "boolean") {
        return column.visible;
    }
    return column.visible(row);
});

function onClickButton(): void {
    assertRef(buttonElement);
    buttonElement.value.tabIndex = 0;

    // Wait for the cell activation (which manages focus) to finish before calling onClick()
    // eslint-disable-next-line unicorn/prefer-queue-microtask -- won't work with microtask, it would run too early.
    setTimeout(() => {
        if (column.onClick) {
            column.onClick(row);
        }
    }, 0);
}

const expose: FTableCellApi = { tabstopEl: buttonElement };
defineExpose(expose);
</script>

<template>
    <td class="table-ng__cell table-ng__cell--button">
        <button v-if="isVisible" ref="button" class="icon-button" type="button" tabindex="-1" @click="onClickButton">
            <f-icon v-if="column.icon" :library="column.iconLibrary" :name="column.icon"></f-icon>
            <span class="sr-only">{{ column.text(row) }}</span>
        </button>
    </td>
</template>
