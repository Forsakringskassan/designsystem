<script setup lang="ts" generic="T, K extends keyof T">
import { type TableColumnCheckbox } from "./table-column";

const { column, row } = defineProps<{
    column: TableColumnCheckbox<T, K>;
    row: T;
}>();
</script>

<template>
    <td tabindex="-1">
        <!-- eslint-disable-next-line vue/no-mutating-props -->
        <input v-model="row[column.key!]" type="checkbox" :aria-label="column.header" tabindex="-1" />
    </td>
</template>
