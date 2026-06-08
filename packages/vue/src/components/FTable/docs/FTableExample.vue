<script setup lang="ts">
import { ref } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    pris: string;
    nested?: Row[];
}

const data: Row[] = [
    {
        namn: "Apelsin",
        land: "Spanien",
        pris: "30",
        nested: [
            {
                namn: "Apelsiner importeras främst från Medelhavsområdet",
                land: "",
                pris: "",
            },
        ],
    },
    {
        namn: "Banan",
        land: "Equador",
        pris: "15",
        nested: [
            {
                namn: "Bananer importeras främst från tropiska länder i Latinamerika, Afrika och Asien",
                land: "",
                pris: "",
            },
        ],
    },
    {
        namn: "Äpple",
        land: "Sverige",
        pris: "22",
        nested: [
            {
                namn: "Äpplen odlas i stor skala i tempererade klimat, bland annat i Sverige, Polen och Kina",
                land: "",
                pris: "",
            },
        ],
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
    },
    {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
    },
]);

const rows = useDatasetRef(data, "nested");
</script>
<template>
    <f-table v-model:selected-rows="selectedRows" :rows :columns selectable="multi">
        <template #expandable="{ row }: { row: Row }">
            {{ row.namn }}
        </template>
    </f-table>
</template>
