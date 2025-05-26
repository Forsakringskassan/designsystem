<script setup>
import { FInteractiveTable, FTableColumn } from "@fkui/vue";
import rows from "./expandable-rows-data";
</script>

<template>
    <!-- cut above -->
    <f-interactive-table :rows key-attribute="id">
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
    <!-- cut below -->
</template>
