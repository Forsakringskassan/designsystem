<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import FTableCrudDatasetModal from "./FTableCrudDatasetModal.vue";
import {
    type FCrudDatasetCommitCreate,
    type FCrudDatasetCommitDelete,
    type FCrudDatasetCommitUpdate,
    type TableColumn,
    FCrudDataset,
    FTable,
    defineTableColumns,
    useModal,
} from "@fkui/vue";

interface Row {
    id: string;
    name: string;
    description: string;
}

const crud = useTemplateRef("crud");
const { formModal, confirmModal } = useModal();

const rows = ref<Row[]>([
    {
        id: "1",
        name: "Ärende A",
        description: "Beskrivning för ärende A",
    },
    {
        id: "2",
        name: "Ärende B",
        description: "Beskrivning för ärende B",
    },
    {
        id: "3",
        name: "Ärende C",
        description: "Beskrivning för ärende C",
    },
]);

const columns: Array<TableColumn<Row>> = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
    },
    {
        type: "text",
        header: "Beskrivning",
        key: "description",
        label: (row) => `Beskrivning för rad ${row.id}`,
    },
    {
        type: "menu",
        header: "Åtgärder",
        screenreaderText(row) {
            return `Visa åtgärder för ${row.name}`;
        },
        actions: [
            {
                label: "Ändra",
                icon: "pen",
                onClick(row) {
                    crud.value?.updateItem(row);
                },
            },
            {
                label: "Ta bort",
                icon: "trashcan",
                onClick(row) {
                    crud.value?.deleteItem(row);
                },
            },
        ],
    },
]);

const nextId = ref(4);

async function onCreate(commit: FCrudDatasetCommitCreate<Row>): Promise<void> {
    try {
        const row = { id: String(nextId.value), name: "", description: "" };
        commit(await formModal<Row>(FTableCrudDatasetModal, { props: { row } }));
        nextId.value += 1;
    } catch {
        /* user cancelled */
    }
}

async function onUpdate(row: Row, commit: FCrudDatasetCommitUpdate<Row>): Promise<void> {
    try {
        commit(await formModal<Row>(FTableCrudDatasetModal, { props: { row } }));
    } catch {
        /* user cancelled */
    }
}

async function onDelete(row: Row, commit: FCrudDatasetCommitDelete): Promise<void> {
    const confirmed = await confirmModal({
        heading: "Ta bort ärende",
        content: `Vill du verkligen ta bort "${row.name}" med ID ${row.id}?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, avbryt",
    });
    if (confirmed) {
        commit();
    }
}
</script>

<template>
    <f-crud-dataset ref="crud" v-model="rows" :on-create :on-update :on-delete>
        <f-table :rows :columns key-attribute="id">
            <template #caption> Exempeldata </template>
        </f-table>
    </f-crud-dataset>
</template>
