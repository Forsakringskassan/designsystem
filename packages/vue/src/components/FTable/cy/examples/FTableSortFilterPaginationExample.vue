<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import {
    FButton,
    FPaginateDataset,
    FPaginator,
    FSortFilterDataset,
    useDatasetRef,
} from "@fkui/vue";
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

const selectedRows = ref<Row[]>([]);
const sortableAttributes = { text: "Text" };
const itemsPerPage = ref(3);

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
    <h2>Tabell med filtrering och sortering, paginering</h2>
    <p>
        I detta exempel visas hur tabellen fungerar när både <code>f-sort-filter-dataset</code> och
        <code>f-paginate-dataset</code> används samtidigt.
    </p>
    <ul>
        <li>När du väljer "Välj alla" markeras alla rader i hela det filtrerade resultatet.</li>
        <li>Det gäller även om du står på sida 2 eller en annan sida i pagineringen.</li>
        <li>När du avmarkerar "Välj alla" rensas valen på samtliga sidor.</li>
        <li>När du lägger till eller tar bort rader uppdateras bulkstatus.</li>
        <li>När du lägger till rader placeras de sist och navigering sker till sista sidan.</li>
        <li>
            När du tar bort rader sker sidnavigering till sista sidan om aktuell sida innan borttag
            inte längre finns kvar
        </li>
        <li>
            Konsumenten ansvarar för att tömma valda rader efter en bulkoperation. Ett undantag är
            när rader tags bort, då försvinner de även från valda rader.
        </li>
        <li>
            När du filtrerar rensas tidigare val och filtrering, sortering körs om. Rader som inte
            längre matchar filtreras bort och nya rader hamnar enligt sortering. Sidnavigering till
            första sidan.
        </li>
        <li>
            När du sorterar behålls valda rader och filtrering, filtrering körs om (om det fanns nya
            rader tillagda sist så sorteras de nu om). Sidnavigering till första sidan.
        </li>
        <li>
            Vid redigering filtreras inte tabellen om, även om nya värdet ej matchar filter. Ingen
            sidnavigering.
        </li>
        <li>Vid redigering sorteras inte tabellen om, sortingval sätts till ovald ("Välj").</li>
        <li>
            När man helt ersätter dataset, så nollställs filter och val nollställs, sidnavigering
            till första sidan.
        </li>
    </ul>

    <p data-test="selected-count">Valda rader: {{ selectedRows.length }}</p>

    <f-button data-test="add-row" variant="secondary" @click="onAddRow">Lägg till rad</f-button>
    <f-button variant="secondary" @click="onRemoveSelectedRows"> Ta bort markerade rader </f-button>
    <f-button data-test="change-dataset" variant="secondary" @click="onChangeDataset"
        >Ändra dataset</f-button
    >

    <f-sort-filter-dataset
        ref="sortFilter"
        v-test="'filter'"
        :data="rows"
        :sortable-attributes
        default-sort-attribute="text"
    >
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page>
                <template #default="{ items: currentPageItems }">
                    <f-table
                        ref="table"
                        v-model:selected-rows="selectedRows"
                        :rows="currentPageItems"
                        :columns
                        selectable="multi"
                    />
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>
</template>
