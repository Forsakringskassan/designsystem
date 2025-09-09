<script setup lang="ts" generic="T, K extends keyof T">
import { assertRef } from "@fkui/logic";
import { useTemplateRef } from "vue";
import { FTableActivateCellEvent } from "./events";
import { type TableColumnAnchor } from "./table-column";

const { column, row } = defineProps<{
    column: TableColumnAnchor<T>;
    row: T;
}>();

const anchorElement = useTemplateRef("anchor");

function onActivateCell(e: CustomEvent<FTableActivateCellEvent>): void {
    assertRef(anchorElement);
    anchorElement.value.tabIndex = 0;

    if (e.detail.focus) {
        anchorElement.value.focus();
    }
}
</script>

<template>
    <td class="table-ng__cell table-ng__cell--anchor" @table-activate-cell="onActivateCell">
        <a ref="anchor" class="anchor anchor--block" target="_blank" :href="column.href" tabindex="-1"
            >{{ column.value(row) }}
        </a>
    </td>
</template>
