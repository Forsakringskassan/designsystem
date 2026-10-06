<script setup lang="ts">
import { type FruitData, fruits } from "./fruit-data";
import { FCrudDataset, FTable, FTextField, defineTableColumns, useDatasetRef } from "@fkui/vue";

const rows = useDatasetRef(fruits);
let updateRow: (row: FruitData) => void = (_row: FruitData) => undefined;
const columns = defineTableColumns([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
    {
        type: "button",
        header: "Åtgärd",
        text: (row: FruitData) => `Ändra ${row.name}`,
        icon: "pen",
        onClick: (row: FruitData) => {
            updateRow(row);
        },
    },
]);

function getColumns(updateItem: (row: FruitData) => void) {
    updateRow = updateItem;
    return columns;
}

function saveModel(row: FruitData): void {
    console.log("Post model to backend", row);
}
</script>

<template>
    <f-crud-dataset v-model="rows" @created="saveModel" @updated="saveModel" @deleted="saveModel">
        <template #default="{ updateItem }">
            <f-table :rows :columns="getColumns(updateItem)">
                <template #caption> <b>Frukter</b> </template>
            </f-table>
        </template>
        <template #modify="{ item }">
            <f-text-field
                v-model="item.name"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Namn
            </f-text-field>
        </template>
    </f-crud-dataset>
</template>
