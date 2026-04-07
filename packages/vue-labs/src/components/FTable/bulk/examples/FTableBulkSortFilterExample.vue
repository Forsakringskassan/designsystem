<script setup lang="ts">
import { ref } from "vue";
import { FButton, FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns, removeDatasetRows } from "@fkui/vue-labs";

interface Row {
    id: string;
    text: string;
    nested?: Row[];
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Text",
        key: "text",
        value(row) {
            return row.text;
        },
    },
]);

const rows = useDatasetRef<Row>([
    {
        id: "A",
        text: "Apelsin",
    },
    {
        id: "B",
        text: "Banan",
    },
]);

const sortableAttributes = { text: "Text" };

const selectedRows = ref<Row[]>([]);

function onAddRow(): void {
    rows.value.push({
        id: String(rows.value.length + 1),
        text: "Citron",
    });
}

function onRemoveSelectedRows(): void {
    removeDatasetRows(rows, selectedRows);
}
</script>

<template>
    <h2>Bulkval med filtrering och sortering</h2>
    <p>
        I detta exempel visas hur bulkval i tabellen fungerar tillsammans med
        <code>f-sort-filter-dataset</code>.
    </p>
    <ul>
        <li>När du väljer "Välj alla" markeras alla synliga rader.</li>
        <li>När du filtrerar om datasetet rensas tidigare val.</li>
        <li>När du sorterar behålls valda rader.</li>
        <li>När du lägger till en rad uppdateras bulkstatus.</li>
        <li>
            Konsumenten ansvarar för att tömma valda rader efter en bulkoperation. Undantaget är då
            konsumenten tar bort rader, då försvinner de även som valda rader.
        </li>
    </ul>

    <p data-test="selected-count">Valda rader: {{ selectedRows.length }}</p>

    <f-button variant="secondary" @click="onRemoveSelectedRows"> Ta bort markerade rader </f-button>
    <f-sort-filter-dataset v-test="'filter'" :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-table
                v-model:selected-rows="selectedRows"
                :rows="sortFilterResult"
                :columns
                key-attribute="id"
                selectable="multi"
            ></f-table>
        </template>
    </f-sort-filter-dataset>
    <f-button variant="secondary" @click="onAddRow">Lägg till rad</f-button>
</template>
