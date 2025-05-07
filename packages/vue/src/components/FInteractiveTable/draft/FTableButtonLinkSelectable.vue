<script setup>
import { FInteractiveTable, FTableColumn } from "@fkui/vue";

const rows = [
    { name: "Kalle Anka", value: 42 },
    { name: "Kajsa Anka", value: 511 },
    { name: "Joakim von Anka", value: 4711 },
];
</script>

<template>
    <f-interactive-table :rows :show-active="false" selectable>
        <template #caption> Knapp och länk </template>
        <template #default="{ row }">
            <f-table-column v-format:text="row.name" title="Namn" type="text"></f-table-column>
            <f-table-column v-format:number="row.value" title="Värde" type="numeric" shrink></f-table-column>
            <f-table-column title="Knapp" type="action" shrink
                ><button type="button" class="button button--primary">Knapp</button></f-table-column
            >
            <f-table-column title="Knapp" type="action" shrink
                ><a href="https://example.net" target="_blank" class="anchor">Länk</a></f-table-column
            >
        </template>
    </f-interactive-table>
</template>
