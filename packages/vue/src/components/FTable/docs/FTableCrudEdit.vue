<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import FTableCrudEditModal from "./FTableCrudEditModal.vue";
import {
    type FCrudDatasetCommitDelete,
    type FCrudDatasetCommitUpdate,
    type TableColumn,
    FCrudDataset,
    FTable,
    defineTableColumns,
    useModal,
} from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    pris?: number;
}

const crud = useTemplateRef("crud");
const { formModal, confirmModal } = useModal();

const columns: Array<TableColumn<Row>> = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "namn",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
    },
    {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
    },
    {
        type: "menu",
        header: "Åtgärder",
        screenreaderText(row) {
            return `Visa åtgärder för ${row.namn}`;
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

const rows = ref<Row[]>([
    {
        namn: "Apelsin",
        land: "Spanien",
        pris: 30,
    },
    {
        namn: "Banan",
        land: "Ecuador",
        pris: 15,
    },
    {
        namn: "Äpple",
        land: "Sverige",
        pris: 22,
    },
]);

async function onUpdate(row: Row, commit: FCrudDatasetCommitUpdate<Row>): Promise<void> {
    try {
        commit(await formModal<Row>(FTableCrudEditModal, { props: { row } }));
    } catch {
        /* user cancelled */
    }
}

async function onDelete(row: Row, commit: FCrudDatasetCommitDelete): Promise<void> {
    const confirmed = await confirmModal({
        heading: "Ta bort frukt",
        content: `Vill du verkligen ta bort "${row.namn}"?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, avbryt",
    });
    if (confirmed) {
        commit();
    }
}
</script>

<template>
    <f-crud-dataset ref="crud" v-model="rows" :on-update :on-delete>
        <f-table ref="table" :rows :columns striped>
            <template #caption><span class="sr-only">Redigera innehåll-exempel</span></template>
        </f-table>
    </f-crud-dataset>
</template>
