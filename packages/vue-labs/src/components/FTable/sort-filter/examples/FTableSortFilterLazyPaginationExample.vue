<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import {
    FButton,
    FPaginateDataset,
    FPaginator,
    FSortFilterDataset,
    useDatasetRef,
} from "@fkui/vue";
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
    { id: "4", text: "Druva" },
    { id: "5", text: "Fikon" },
    { id: "6", text: "Granatapple" },
]);

const selectedRows = ref<Row[]>([]);
const sortableAttributes = { text: "Text" };
const itemsPerPage = ref(3);
const sortFilter = useTemplateRef("sortFilter");

function onAddRow(): void {
    rows.value.push({
        id: String(rows.value.length + 1),
        text: "Äpple",
    });
}

function onRefresh(): void {
    sortFilter.value?.refresh();
}
</script>

<template>
    <h2>Sort-filter lazy med paginering</h2>
    <p>
        Exemplet visar lazy-beteende med paginering: nya rader hoppar till sista sidan och
        <code>refresh()</code> hoppar till första sidan samt tömmer markerade rader.
    </p>

    <p data-test="selected-count">Valda rader: {{ selectedRows.length }}</p>

    <f-button data-test="add-row" variant="secondary" @click="onAddRow">Lägg till rad</f-button>
    <f-button data-test="refresh" variant="secondary" @click="onRefresh">Refresh</f-button>

    <f-sort-filter-dataset
        ref="sortFilter"
        v-test="'filter'"
        mode="lazy"
        :data="rows"
        :sortable-attributes
        default-sort-attribute="text"
    >
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page>
                <template #default="{ items: currentPageItems }">
                    <f-table
                        v-model:selected-rows="selectedRows"
                        :rows="currentPageItems"
                        :columns
                        key-attribute="id"
                        selectable="multi"
                    />
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>
</template>
