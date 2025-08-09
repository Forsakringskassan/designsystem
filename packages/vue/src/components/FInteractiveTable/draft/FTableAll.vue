<script setup>
import { FInteractiveTable, FTableColumn, FDatepickerField, FNumericTextField } from "@fkui/vue";
import rows from "../examples/expandable-rows-data";
</script>

<template>
    <f-interactive-table :rows key-attribute="id" expandable-attribute="myExpandableRow" selectable>
        <template #caption> Expanderbara rader </template>
        <template #default="{ row }">
            <f-table-column title="Ersättning"> {{ row.name }} </f-table-column>
            <f-table-column title="Id" shrink> {{ row.id }} </f-table-column>
            <f-table-column title="Datum" type="text">
                <f-datepicker-field v-model="row.date" v-validation.required> Utbetalningsdatum </f-datepicker-field>
            </f-table-column>
            <f-table-column title="Summa" type="text">
                <f-numeric-text-field v-model="row.sum" v-validation.required> Utbetalt belopp </f-numeric-text-field>
            </f-table-column>
            <f-table-column title="Knapp" type="action" shrink
                ><button type="button" class="button button--primary">Knapp</button></f-table-column
            >
            <f-table-column title="Knapp" type="action" shrink
                ><a href="https://example.net" target="_blank" class="anchor">Länk</a></f-table-column
            >
        </template>
    </f-interactive-table>
</template>
