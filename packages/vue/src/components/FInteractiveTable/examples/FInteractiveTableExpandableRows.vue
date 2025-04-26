<script setup>
import { FInteractiveTable, FTableColumn } from "@fkui/vue";
import rows from "./expandable-rows-data";
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
        <template #expandable="{ expandableRow }">
            Anpassat innehåll för expanderad rad "{{ expandableRow.name }}".
        </template>
    </f-interactive-table>
</template>
