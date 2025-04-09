<script setup>
import { FInteractiveTable, FTableColumn } from "@fkui/vue";

const rows = [
    {
        id: "1",
        name: "Utbetalning",
        date: "2023-09-27",
        sum: 1200,
        myExpandableRow: [
            {
                id: "1a",
                name: "Barnbidrag",
                date: "2023-09-25",
                sum: 200,
            },
            {
                id: "1b",
                name: "Övrig ersättning",
                date: "2023-09-27",
                sum: 1000,
            },
        ],
    },
    {
        id: "2",
        name: "Utbetalning",
        date: "2023-12-25",
        sum: 1000,
        myExpandableRow: [
            {
                id: "2a",
                name: "Barnbidrag",
                date: "2023-12-25",
                sum: 1000,
            },
        ],
    },
];
</script>

<template>
    <f-interactive-table :rows expandable-attribute="myExpandableRow" key-attribute="id">
        <template #caption> Expanderbara rader </template>
        <template #default="{ row }">
            <f-table-column title="Ersättning"> {{ row.name }} </f-table-column>
            <f-table-column title="Id" shrink> {{ row.id }} </f-table-column>
            <f-table-column title="Datum" type="date">
                <span v-format:date="row.date"></span>
            </f-table-column>
            <f-table-column title="Summa" type="numeric">
                <span v-format:number="row.sum"></span> kronor
            </f-table-column>
        </template>
    </f-interactive-table>
</template>
