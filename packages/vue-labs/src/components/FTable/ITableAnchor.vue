<script setup lang="ts" generic="T, K extends keyof T">
import { computed, useTemplateRef } from "vue";
import { type FTableCellApi } from "./f-table-api";
import { type NormalizedTableColumnAnchor } from "./table-column";

const { column, row } = defineProps<{
    column: NormalizedTableColumnAnchor<T, K>;
    row: T;
}>();

const targetElement = useTemplateRef("target");

const renderAnchor = computed(() => {
    return column.enabled(row) && column.text(row) !== null;
});

const expose: FTableCellApi = { tabstopEl: targetElement };
defineExpose(expose);
</script>

<template>
    <td v-if="renderAnchor" class="table-ng__cell table-ng__cell--anchor">
        <a ref="target" class="anchor anchor--block" target="_blank" :href="column.href" tabindex="-1">
            {{ column.text(row) }}
        </a>
    </td>
    <td v-else ref="target" tabindex="-1" class="table-ng__cell"></td>
</template>
