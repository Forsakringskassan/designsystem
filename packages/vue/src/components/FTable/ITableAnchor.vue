<script setup lang="ts" generic="T, K extends keyof T">
import { type TableColumnAnchor } from "./table-column";

const { column, row } = defineProps<{
    column: TableColumnAnchor<T>;
    row: T;
}>();
</script>

<template>
    <td tabindex="-1">
        <a class="anchor anchor--block" target="_blank" :href="column.href" tabindex="-1">{{ column.value(row) }} </a>
    </td>
</template>
