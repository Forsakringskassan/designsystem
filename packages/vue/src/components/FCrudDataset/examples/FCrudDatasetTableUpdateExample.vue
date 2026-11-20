<script setup lang="ts">
import { useTemplateRef } from "vue";
import FruitFormModal from "./FruitFormModal.vue";
import { type FruitData, fruits } from "./fruit-data";
import {
    type FCrudDatasetCommitEdit,
    FCrudDataset,
    FTable,
    defineTableColumns,
    useDatasetRef,
    useModal,
} from "@fkui/vue";

const rows = useDatasetRef(fruits);
const crud = useTemplateRef("crud");
const { formModal } = useModal();
const columns = defineTableColumns([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
    {
        type: "button",
        header: "Åtgärd",
        screenreaderText: (row: FruitData) => `Ändra ${row.name}`,
        icon: "pen",
        onClick: (row: FruitData) => {
            crud.value?.updateItem(row);
        },
    },
]);

async function onEdit(fruit: FruitData, commit: FCrudDatasetCommitEdit<FruitData>): Promise<void> {
    try {
        const modified = await formModal<FruitData>(FruitFormModal, {
            props: { heading: "Ändra frukt", confirmText: "Spara", fruit },
        });
        console.log("Post model to backend", modified);
        commit(modified, `Frukten ${modified.name} har ändrats`);
    } catch {
        /* user cancelled */
    }
}
</script>

<template>
    <f-crud-dataset ref="crud" v-model="rows" :on-edit>
        <template #default>
            <f-table :rows :columns>
                <template #caption> <b>Frukter</b> </template>
            </f-table>
        </template>
    </f-crud-dataset>
</template>
