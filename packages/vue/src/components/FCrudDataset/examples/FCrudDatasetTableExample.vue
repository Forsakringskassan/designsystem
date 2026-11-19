<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import FruitFormModal from "./FruitFormModal.vue";
import { type FruitData, fruits } from "./fruit-data";
import {
    type FCrudDatasetCommitCreate,
    type FCrudDatasetCommitDelete,
    type FCrudDatasetCommitUpdate,
    FCrudDataset,
    FTable,
    defineTableColumns,
    useModal,
} from "@fkui/vue";

const rows = ref(fruits);
const crud = useTemplateRef("crud");
const { formModal, confirmModal } = useModal();
const columns = defineTableColumns([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
    {
        type: "menu",
        header: "Åtgärd",
        screenreaderText: (row: FruitData) => `Visa åtgärder för ${row.name}`,
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

async function onUpdate(
    fruit: FruitData,
    commit: FCrudDatasetCommitUpdate<FruitData>,
): Promise<void> {
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

async function onDelete(fruit: FruitData, commit: FCrudDatasetCommitDelete): Promise<void> {
    const confirmed = await confirmModal({
        heading: "Ta bort frukt",
        content: `Vill du verkligen radera frukten "${fruit.name}" med ID ${fruit.id}?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, avbryt",
    });
    if (!confirmed) {
        return;
    }

    console.log("Delete model from backend", fruit);
    commit(`Frukten ${fruit.name} har tagits bort`);
}
</script>

<template>
    <f-crud-dataset ref="crud" v-model="rows" :on-create :on-update :on-delete>
        <f-table :rows :columns striped>
            <template #caption> <b>Frukter</b> </template>
        </f-table>
    </f-crud-dataset>
</template>
