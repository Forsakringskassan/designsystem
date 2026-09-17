<script setup lang="ts">
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

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "namn",
        width: "30%",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
        width: "50%",
    },
    {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
        width: "20%",
    },
]);

const rows = useDatasetRef(data);
</script>
<template>
    <f-table :rows :columns></f-table>
</template>
