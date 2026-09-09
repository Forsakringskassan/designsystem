<script setup lang="ts">
import { ref } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    pris: string;
}

const data: Row[] = [
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
];

const selectedRows = ref<Row[]>([]);

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
        width: "13rem",
    },
    {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
        size: "shrink",
    },
]);

const rows = useDatasetRef(data);
</script>
<template>
    <f-table v-model:selected-rows="selectedRows" :rows :columns selectable="multi">
        <template #expandable="{ row }: { row: Row }">
            {{ row.namn }}
        </template>
    </f-table>
</template>
