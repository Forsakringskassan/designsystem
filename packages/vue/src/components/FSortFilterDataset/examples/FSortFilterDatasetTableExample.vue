<script setup lang="ts">
import { type FruitData, fruits } from "../../FCrudDataset/examples/fruit-data";
import { FSortFilterDataset, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

const rows = useDatasetRef([...fruits]);
const columns = defineTableColumns<FruitData>([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
]);
const sortableAttributes = { name: "Namn", origin: "Land" };
</script>

<template>
    <f-sort-filter-dataset
        :data="rows"
        default-sort-attribute="name"
        :default-sort-ascending="true"
        :sortable-attributes
    >
        <template #header="{ slotClass }">
            <h3 :class="slotClass">Frukter</h3>
        </template>
        <template #default="{ sortFilterResult }">
            <f-table :rows="sortFilterResult" :columns striped>
                <template #caption><span class="sr-only"> Frukter </span></template>
            </f-table>
        </template>
    </f-sort-filter-dataset>
</template>
