<script setup lang="ts" generic="T, K extends keyof T">
import FIcon from "../FIcon/FIcon.vue";
import { type TableColumnButton } from "./table-column";

const { column, row } = defineProps<{
    column: TableColumnButton<T>;
    row: T;
}>();
</script>

<template>
    <td tabindex="-1">
        <button class="icon-button" type="button" tabindex="-1" @click="column.onClick!(column.value(row))">
            <f-icon name="trashcan"></f-icon>
            <span class="sr-only">Knapptext</span>
        </button>
    </td>
</template>
