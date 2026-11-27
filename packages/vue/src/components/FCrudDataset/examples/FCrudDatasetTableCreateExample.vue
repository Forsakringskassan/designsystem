<script setup lang="ts">
import { ref } from "vue";
import FruitFormModal from "./FruitFormModal.vue";
import { type FruitData, fruits } from "./fruit-data";
import {
    type FCrudDatasetCommitCreate,
    FCrudDataset,
    FTable,
    defineTableColumns,
    useModal,
} from "@fkui/vue";

const rows = ref(fruits);
const { formModal } = useModal();
const columns = defineTableColumns<FruitData>([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
]);

async function onCreate(commit: FCrudDatasetCommitCreate<FruitData>): Promise<void> {
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
    <f-crud-dataset v-model="rows" :on-create>
        <f-table :rows :columns>
            <template #caption> <b>Frukter</b> </template>
        </f-table>
    </f-crud-dataset>
</template>
