<script setup lang="ts">
import { FPaginateDataset, FPaginator, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    pris: string;
}

const rows = useDatasetRef([
    {
        namn: "Apelsin",
        land: "Spanien",
        pris: "30",
    },
    {
        namn: "Banan",
        land: "Ecuador",
        pris: "15",
    },
    {
        namn: "Äpple",
        land: "Sverige",
        pris: "22",
    },
    {
        namn: "Päron",
        land: "Nederländerna",
        pris: "35",
    },
    {
        namn: "Citron",
        land: "Spanien",
        pris: "40",
    },
    {
        namn: "Lime",
        land: "Mexiko",
        pris: "70",
    },
    {
        namn: "Vindruvor",
        land: "Italien",
        pris: "60",
    },
    {
        namn: "Kiwi",
        land: "Grekland",
        pris: "50",
    },
    {
        namn: "Mango",
        land: "Peru",
        pris: "80",
    },
    {
        namn: "Ananas",
        land: "Costa Rica",
        pris: "45",
    },
    {
        namn: "Melon",
        land: "Spanien",
        pris: "35",
    },
    {
        namn: "Jordgubbar",
        land: "Sverige",
        pris: "130",
    },
    {
        namn: "Blåbär",
        land: "Polen",
        pris: "190",
    },
    {
        namn: "Hallon",
        land: "Portugal",
        pris: "250",
    },
    {
        namn: "Körsbär",
        land: "Turkiet",
        pris: "150",
    },
    {
        namn: "Plommon",
        land: "Spanien",
        pris: "65",
    },
]);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "namn",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
    },
    {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
        value(row) {
            return String(row.pris);
        },
    },
]);
</script>

<template>
    <f-paginate-dataset :items="rows" :items-per-page="3">
        <template #default="{ items: currentPageItems }">
            <f-table :rows="currentPageItems" :columns>
                <template #caption>Tabell med paginering</template>
            </f-table>
            <f-paginator />
        </template>
    </f-paginate-dataset>
</template>
