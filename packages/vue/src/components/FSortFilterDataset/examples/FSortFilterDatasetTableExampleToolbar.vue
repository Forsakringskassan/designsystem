<script setup lang="ts">
import { ref } from "vue";
import { type FruitData, fruits } from "../../FCrudDataset/examples/fruit-data";
import { FButton, FSortFilterDataset, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

const rows = useDatasetRef([...fruits]);
const selectedRows = ref<FruitData[]>([]);
const columns = defineTableColumns<FruitData>([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
]);
const sortableAttributes = { name: "Namn", origin: "Land" };
</script>

<template>
    <h3>Frukter</h3>
    <f-sort-filter-dataset
        :data="rows"
        default-sort-attribute="name"
        :default-sort-ascending="true"
        :sortable-attributes
    >
        <template #header>
            <div class="button-group">
                <f-button
                    class="button-group__item"
                    icon-left="trashcan"
                    size="small"
                    variant="tertiary"
                >
                    <span> Ta bort </span>
                </f-button>
                <f-button
                    class="button-group__item"
                    icon-left="paper-clip"
                    size="small"
                    variant="tertiary"
                >
                    <span> Bifoga </span>
                </f-button>
            </div>
        </template>

        <template #default="{ sortFilterResult }">
            <f-table
                v-model:selected-rows="selectedRows"
                :rows="sortFilterResult"
                :columns
                striped
                selectable="multi"
            >
                <template #caption><span class="sr-only"> Frukter </span></template>
            </f-table>
        </template>
    </f-sort-filter-dataset>
</template>
