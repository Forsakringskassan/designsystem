<script setup lang="ts">
import { useTemplateRef } from "vue";
import { type FruitData, fruits } from "./fruit-data";
import { FCrudDataset, FTable, FTextField, defineTableColumns, useDatasetRef } from "@fkui/vue";

const rows = useDatasetRef(fruits);
const crud = useTemplateRef("crud");
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
            crud.value?.updateItem(row);
        },
    },
]);

function saveModel(row: FruitData): void {
    console.log("Post model to backend", row);
}
</script>

<template>
    <f-crud-dataset
        ref="crud"
        v-model="rows"
        @created="saveModel"
        @updated="saveModel"
        @deleted="saveModel"
    >
        <template #default>
            <f-table :rows :columns>
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
