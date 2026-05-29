<script setup lang="ts">
import { FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";

interface Row {
    frukt: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "frukt",
    },
]);

const rows = useDatasetRef<Row>([
    { frukt: "Druva" },
    { frukt: "Banan" },
    { frukt: "Granatapple" },
    { frukt: "Citron" },
    { frukt: "Apelsin" },
    { frukt: "Fikon" },
]);

const sortableAttributes = { frukt: "Text" };
</script>

<template>
    <f-sort-filter-dataset :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-table ref="table" :rows="sortFilterResult" :columns></f-table>
        </template>
    </f-sort-filter-dataset>
</template>
