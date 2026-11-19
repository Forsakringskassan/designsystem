<script setup lang="ts">
import FruitFormModal from "./FruitFormModal.vue";
import { type FruitData, fruits } from "./fruit-data";
import {
    type FCrudDatasetCommitAdd,
    FCrudDataset,
    FTable,
    defineTableColumns,
    useDatasetRef,
    useModal,
} from "@fkui/vue";

const rows = useDatasetRef(fruits);
const { formModal } = useModal();
const columns = defineTableColumns<FruitData>([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
]);

async function onAdd(commit: FCrudDatasetCommitAdd<FruitData>): Promise<void> {
    try {
        const fruit = await formModal<FruitData>(FruitFormModal, {
            props: {
                heading: "Lägg till frukt",
                confirmText: "Lägg till",
                fruit: { id: String(rows.value.length + 1), name: "", origin: "", description: "" },
            },
        });
        console.log("Post model to backend", fruit);
        commit(fruit, `Frukten ${fruit.name} har lagts till`);
    } catch {
        /* user cancelled */
    }
}
</script>

<template>
    <f-crud-dataset v-model="rows" :on-add>
        <template #default>
            <f-table :rows :columns>
                <template #caption> <b>Frukter</b> </template>
            </f-table>
        </template>
    </f-crud-dataset>
</template>
