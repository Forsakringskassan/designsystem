<script setup lang="ts">
import { ref } from "vue";
import { FButton } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    fruit: string;
    color: string;
    season: string;
    pricePerKg: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "fruit",
        value(row) {
            return row.fruit;
        },
    },
    {
        type: "text",
        header: "Färg",
        key: "color",
        value(row) {
            return row.color;
        },
    },
    {
        type: "text",
        header: "Säsong",
        key: "season",
        value(row) {
            return row.season;
        },
    },
    {
        type: "text",
        header: "Pris (kr/kg)",
        key: "pricePerKg",
        value(row) {
            return row.pricePerKg;
        },
    },
]);

const rows = ref<Row[]>([
    { id: "1", fruit: "Apelsin", color: "Orange", season: "Vinter", pricePerKg: "28" },
    { id: "2", fruit: "Banan", color: "Gul", season: "Helår", pricePerKg: "24" },
    { id: "3", fruit: "Jordgubbar", color: "Röd", season: "Sommar", pricePerKg: "65" },
    { id: "4", fruit: "Päron", color: "Grön", season: "Höst", pricePerKg: "39" },
]);

const selectedRows = ref<Row[]>([]);

function onRemoveSelectedRows(): void {
    rows.value = rows.value.filter((row) => !selectedRows.value.includes(row));
    selectedRows.value = [];
}
</script>

<template>
    <f-button variant="secondary" @click="onRemoveSelectedRows">Ta bort markerade frukter</f-button>
    <f-table
        v-model:selected-rows="selectedRows"
        :rows
        :columns
        key-attribute="id"
        selectable="multi"
    >
        <template #caption>Frukter i lager</template>
    </f-table>
</template>
