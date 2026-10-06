<script setup lang="ts">
import { useTemplateRef } from "vue";
import { type FruitData, fruits } from "./fruit-data";
import {
    FCrudDataset,
    FTable,
    FTextField,
    FTextareaField,
    defineTableColumns,
    useDatasetRef,
} from "@fkui/vue";

const rows = useDatasetRef(fruits, "variant");
const crud = useTemplateRef("crud");
const columns = defineTableColumns([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
    {
        type: "menu",
        header: "Åtgärd",
        text: (row: FruitData) => `Visa åtgärder för ${row.name}`,
        actions: [
            {
                label: "Ändra",
                icon: "pen",
                onClick: (row: FruitData) => {
                    crud.value?.updateItem(row);
                },
            },
            {
                label: "Ta bort",
                icon: "trashcan",
                onClick: (row: FruitData) => {
                    crud.value?.deleteItem(row);
                },
            },
        ],
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
            <f-table :rows :columns striped>
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
            ID {{ item.id }}
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

        <template #delete="{ item }">
            Vill du verkligen radera frukten "{{ item.name }}" med ID {{ item.id }}
        </template>
    </f-crud-dataset>
</template>
