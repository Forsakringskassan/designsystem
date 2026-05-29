<script setup lang="ts">
import { ref } from "vue";
import { FPaginateDataset, FPaginator, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const rows = useDatasetRef([
    {
        namn: "Apelsin",
        land: "Spanien",
    },
    {
        namn: "Banan",
        land: "Columbia",
    },
    {
        namn: "Äpple",
        land: "Sverige",
    },
    {
        namn: "Päron",
        land: "Italien",
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
