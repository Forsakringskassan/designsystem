<script setup lang="ts">
import { ref } from "vue";
import { useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";

interface Row {
    id: string;
    fruit: string;
}

const rows = useDatasetRef<Row>([
    { id: "1", fruit: "Apelsin" },
    { id: "2", fruit: "Banan" },
    { id: "3", fruit: "Päron" },
]);

const selectedRows = ref<Row[]>([]);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "fruit",
    },
]);
</script>

<template>
    <f-table
        v-model:selected-rows="selectedRows"
        :rows
        :columns
        key-attribute="id"
        selectable="multi"
    >
    </f-table>
</template>
