<script setup lang="ts" generic="T, K extends keyof T">
import { computed } from "vue";
import { isVisible } from "./is-visible";
import { type NormalizedTableColumnRowHeader } from "./table-column";

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnRowHeader<T, K>;
}>();

const visible = computed((): boolean => isVisible(column.visible, row));
</script>

<template>
    <th ref="th" class="table-ng__cell table-ng__cell--rowheader" scope="row">
        <template v-if="visible">{{ column.text(row) }}</template>
    </th>
</template>
