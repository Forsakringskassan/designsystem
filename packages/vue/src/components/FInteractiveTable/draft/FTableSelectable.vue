<script setup>
import { FInteractiveTable, FTableColumn } from "@fkui/vue";

const rows = [
    { name: "Kalle Anka", value: 42 },
    { name: "Kajsa Anka", value: 511 },
    { name: "Joakim von Anka", value: 4711 },
];
</script>

<template>
    <f-interactive-table :rows selectable :show-active="false">
        <template #caption> Valbara rader </template>
        <template #default="{ row }">
            <f-table-column v-format:text="row.name" title="Namn" type="text"></f-table-column>
            <f-table-column v-format:number="row.value" title="Värde" type="numeric" shrink></f-table-column>
        </template>
    </f-interactive-table>
</template>
