<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FButton, FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns, removeDatasetRows } from "@fkui/vue";

interface Row {
    text: string;
}

const tableRef = useTemplateRef("table");

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Text",
        key: "text",
        editable: true,
    },
    {
        type: "button",
        header: "Åtgärd",
        icon: "trashcan",
        size: "shrink",
        text(row) {
            return `Ta bort ${row.text}`;
        },
        onClick: (row) => {
            onRemoveRow(row);
        },
    },
]);

const rows = useDatasetRef<Row>([
    { text: "Apelsin" },
    { text: "Banan" },
    { text: "Citron" },
    { text: "Druva" },
    { text: "Fikon" },
    { text: "Granatapple" },
]);

const sortableAttributes = { text: "Text" };
const selectedRows = ref<Row[]>([]);

function onAddRow(): void {
    rows.value.push({
        text: "Äpple",
    });
}

function onRemoveSelectedRows(): void {
    removeDatasetRows(rows, selectedRows);
}

function onRemoveRow(row: Row): void {
    assertRef(tableRef);

    tableRef.value.withTabstopBehaviour("row-removal", () => {
        removeDatasetRows(rows, row);
    });
}

function onChangeDataset(): void {
    rows.value = [
        { text: "Annan apelsin" },
        { text: "Annan banan" },
        { text: "Annan citron" },
        { text: "Annan druva" },
        { text: "Annat fikon" },
        { text: "Annat granatapple" },
    ];
}
</script>

<template>
    <h2>Tabell med editering, flerval, filtrering och sortering</h2>
    <p>
        I detta exempel visas hur tabellen fungerar tillsammans med
        <code>f-sort-filter-dataset</code>.
    </p>
    <ul>
        <li>När du väljer "Välj alla" markeras alla synliga rader.</li>
        <li>När du lägger till eller tar bort rader uppdateras bulkstatus.</li>
        <li>När du lägger till rader placeras de sist.</li>
        <li>
            Konsumenten ansvarar för att tömma valda rader efter en bulkoperation. Ett undantag är
            när rader tags bort, då försvinner de även från valda rader.
        </li>
        <li>
            När du filtrerar rensas tidigare val och filtrering, sortering körs om. Rader som inte
            längre matchar filtreras bort och nya rader hamnar enligt sortering.
        </li>
        <li>
            När du sorterar behålls valda rader och filtrering, filtrering körs om (om det fanns nya
            rader tillagda sist så sorteras de nu om).
        </li>
        <li>Vid redigering filtreras inte tabellen om, även om nya värdet ej matchar filter.</li>
        <li>Vid redigering sorteras inte tabellen om, sortingval sätts till ovald ("Välj").</li>
        <li>När man helt ersätter dataset, så nollställs filter och val nollställs.</li>
    </ul>

    <p data-test="selected-count">Valda rader: {{ selectedRows.length }}</p>

    <f-button variant="secondary" @click="onAddRow">Lägg till rad</f-button>
    <f-button variant="secondary" @click="onRemoveSelectedRows"> Ta bort markerade rader </f-button>
    <f-button data-test="change-dataset" variant="secondary" @click="onChangeDataset"
        >Ändra dataset</f-button
    >
    <f-sort-filter-dataset v-test="'filter'" :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-table
                ref="table"
                v-model:selected-rows="selectedRows"
                :rows="sortFilterResult"
                :columns
                selectable="multi"
            ></f-table>
        </template>
    </f-sort-filter-dataset>
</template>
