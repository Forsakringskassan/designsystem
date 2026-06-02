<script setup lang="ts">
import { ref } from "vue";
import { useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";

interface Row {
    id: string;
    fruit: string;
    land: string;
    pris: string;
}

const rows = useDatasetRef<Row>([
    { id: "1", fruit: "Apelsin", land: "Spanien", pris: "30" },
    { id: "2", fruit: "Banan", land: "Ecuador", pris: "15" },
    { id: "3", fruit: "Äpple", land: "Sverige", pris: "22" },
]);

const selectedRows = ref<Row[]>([]);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "fruit",
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
</script>

<template>
    <f-table
        v-model:selected-rows="selectedRows"
        :rows
        :columns
        key-attribute="id"
        selectable="multi"
    >
    </f-table>
</template>
