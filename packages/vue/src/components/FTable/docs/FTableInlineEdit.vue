<script setup lang="ts">
import { FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    pris?: number;
}

const lander = [
    "",
    "Colombia",
    "Costa Rica",
    "Dominikanska republiken",
    "Ecuador",
    "Frankrike",
    "Italien",
    "Spanien",
    "Sverige",
    "Sydafrika",
];

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "namn",
    },
    {
        type: "select",
        options: lander,
        header: "Land",
        label: () => "Land",
        key: "land",
    },
    {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
        editable: true,
    },
]);

const rows = useDatasetRef<Row>([
    {
        namn: "Apelsin",
        land: "Spanien",
        pris: 30,
    },
    {
        namn: "Banan",
        land: "Equador",
        pris: 15,
    },
    {
        namn: "Äpple",
        land: "Sverige",
        pris: 22,
    },
]);

const sortableAttributes = { namn: "Frukt" };
</script>

<template>
    <f-sort-filter-dataset :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-table ref="table" :rows="sortFilterResult" :columns striped>
                <template #caption><span class="sr-only">Redigera innehåll-exempel</span></template>
            </f-table>
        </template>
    </f-sort-filter-dataset>
</template>
