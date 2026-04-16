<script setup lang="ts">
import { FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    text: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Text",
        key: "text",
        editable: true,
    },
]);

const rows = useDatasetRef<Row>([
    { id: "1", text: "Apelsin" },
    { id: "2", text: "Banan" },
    { id: "3", text: "Citron" },
]);

const sortableAttributes = { text: "Text" };
</script>

<template>
    <h2>Sort-filter i standardläge</h2>
    <p>
        Standardläget (<code>mode="none"</code>) kör full sortering/filtrering om när data
        uppdateras.
    </p>

    <f-sort-filter-dataset
        v-test="'filter'"
        :data="rows"
        :sortable-attributes
        default-sort-attribute="text"
    >
        <template #default="{ sortFilterResult }">
            <f-table :rows="sortFilterResult" :columns key-attribute="id" />
        </template>
    </f-sort-filter-dataset>
</template>
