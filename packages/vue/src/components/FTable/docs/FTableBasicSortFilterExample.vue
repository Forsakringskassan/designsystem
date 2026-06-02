<script setup lang="ts">
import { FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";

interface Row {
    frukt: string;
    land: string;
    pris: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "frukt",
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
    },
]);

const rows = useDatasetRef<Row>([
    { frukt: "Apelsin", land: "Spanien", pris: "30" },
    { frukt: "Banan", land: "Ecuador", pris: "15" },
    { frukt: "Äpple", land: "Sverige", pris: "22" },
]);

const sortableAttributes = { frukt: "Text" };
</script>

<template>
    <f-sort-filter-dataset :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-table ref="table" :rows="sortFilterResult" :columns></f-table>
        </template>
    </f-sort-filter-dataset>
</template>
