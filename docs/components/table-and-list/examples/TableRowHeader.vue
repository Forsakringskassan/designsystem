<script setup lang="ts">
import { FDataTable, FTableColumn } from "@fkui/vue";

const rows = [
    { a: "Row 1", b: "Text 1B", c: "Text 1C" },
    { a: "Row 2", b: "Text 2B", c: "Text 2C" },
    { a: "Row 3", b: "Text 3B", c: "Text 3C" },
];
</script>

<template>
    <f-data-table :rows>
        <template #caption> <span class="sr-only">Tabell</span> </template>
        <template #default="{ row }">
            <f-table-column
                v-format:text="row.a"
                title="Kolumn A"
                type="text"
                row-header
            ></f-table-column>
            <f-table-column v-format:text="row.b" title="Kolumn B" type="text"></f-table-column>
            <f-table-column v-format:text="row.c" title="Kolumn C" type="text"></f-table-column>
        </template>
    </f-data-table>
</template>
