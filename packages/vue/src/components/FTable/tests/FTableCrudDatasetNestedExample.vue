<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { type FCrudDatasetCommitDelete, FCrudDataset, FTable, defineTableColumns } from "@fkui/vue";

interface Row {
    id: string;
    name: string;
    children?: Row[];
}

const crud = useTemplateRef("crud");

const rows = ref<Row[]>([
    {
        id: "1",
        name: "alpha",
        children: [
            { id: "1_1", name: "alpha_sub1" },
            { id: "1_2", name: "alpha_sub2" },
        ],
    },
    {
        id: "2",
        name: "beta",
        children: [{ id: "2_1", name: "beta_sub1" }],
    },
]);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Id",
        key: "id",
    },
    {
        type: "button",
        header: "Ta bort",
        icon: "trashcan",
        screenreaderText(row) {
            return `Ta bort ${row.name}`;
        },
        onClick(row) {
            void crud.value?.deleteItem(row);
        },
    },
]);

function onDelete(_row: Row, commit: FCrudDatasetCommitDelete): void {
    commit();
}
</script>

<template>
    <f-crud-dataset ref="crud" v-model="rows" :on-delete>
        <f-table :rows :columns key-attribute="id" expandable-attribute="children" />
    </f-crud-dataset>
</template>
