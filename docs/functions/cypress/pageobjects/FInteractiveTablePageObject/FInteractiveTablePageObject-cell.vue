<script setup lang="ts">
import { FInteractiveTable, FTableColumn } from "@fkui/vue";

interface Row {
    id: string;
    a: string;
    b: string;
    c: string;
}

const rows: Row[] = [
    { id: "1", a: "A1", b: "B1", c: "C1" },
    { id: "2", a: "A2", b: "B2", c: "C2" },
    { id: "3", a: "A3", b: "B3", c: "C3" },
];
</script>

<template>
    <!-- cut above -->
    <f-interactive-table key-attribute="id" :rows>
        <template #caption> Tabell </template>
        <template #default="{ row }">
            <f-table-column title="A"> {{ row.a }} </f-table-column>
            <f-table-column title="B"> {{ row.b }} </f-table-column>
            <f-table-column title="C"> {{ row.c }} </f-table-column>
        </template>
    </f-interactive-table>
    <!-- cut below -->
</template>
