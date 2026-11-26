<script setup lang="ts">
import { type FruitData, fruits } from "./fruit-data";
import {
    FCrudDataset,
    FTable,
    FTextField,
    FTextareaField,
    defineTableColumns,
    useDatasetRef,
} from "@fkui/vue";

const rows = useDatasetRef(fruits);
const columns = defineTableColumns<FruitData>([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
]);

function saveModel(row: FruitData): void {
    console.log("Post model to backend", row);
}
</script>

<template>
    <f-crud-dataset v-model="rows" @created="saveModel" @updated="saveModel" @deleted="saveModel">
        <template #default>
            <f-table :rows :columns>
                <template #caption> <b>Rättigheter</b> </template>
            </f-table>
        </template>
        <template #add="{ item }">
            <f-text-field
                v-model="item.id"
                v-validation.required.maxLength="{ maxLength: { length: 4 } }"
                type="text"
            >
                ID
            </f-text-field>
            <f-text-field
                v-model="item.name"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Namn
            </f-text-field>
            <f-text-field
                v-model="item.origin"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Land
            </f-text-field>
            <f-textarea-field v-model="item.description" v-validation.required>
                Beskrivning
            </f-textarea-field>
        </template>
    </f-crud-dataset>
</template>
