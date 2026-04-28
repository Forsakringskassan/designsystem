<script setup lang="ts" generic="T, K extends keyof T">
import { type NormalizedTableColumnRowHeader } from "./table-column";

const { row, column } = defineProps<{
    row: T;
    column: NormalizedTableColumnRowHeader<T, K>;
}>();
</script>

<template>
    <th ref="th" class="table-ng__cell table-ng__cell--rowheader" scope="row">
        {{ column.text(row) }}
    </th>
</template>
