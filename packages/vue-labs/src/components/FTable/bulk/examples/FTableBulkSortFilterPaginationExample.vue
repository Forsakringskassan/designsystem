<script setup lang="ts">
import { ref } from "vue";
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
    name: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
    },
]);

const rows = useDatasetRef<Row>([
    { id: "1", name: "Alfa 1" },
    { id: "2", name: "Alfa 2" },
    { id: "3", name: "Alfa 3" },
    { id: "4", name: "Alfa 4" },
    { id: "5", name: "Alfa 5" },
    { id: "6", name: "Beta 1" },
    { id: "7", name: "Beta 2" },
    { id: "8", name: "Gamma 1" },
]);

const sortableAttributes = { name: "Namn" };
const itemsPerPage = ref(3);
const selectedRows = ref<Row[]>([]);
</script>

<template>
    <h2>Bulkval med filtrering och paginering</h2>
    <p>
        I detta exempel visas hur bulkval fungerar när både <code>f-sort-filter-dataset</code> och
        <code>f-paginate-dataset</code> används samtidigt.
    </p>
    <ul>
        <li>När du väljer "Välj alla" markeras alla rader i hela det filtrerade resultatet.</li>
        <li>Det gäller även om du står på sida 2 eller en annan sida i pagineringen.</li>
        <li>När du avmarkerar "Välj alla" rensas valen på samtliga sidor.</li>
    </ul>

    <p data-test="selected-count">Valda rader: {{ selectedRows.length }}</p>

    <f-sort-filter-dataset v-test="'filter'" :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page>
                <template #default="{ items: currentPageItems }">
                    <f-table
                        v-model:selected-rows="selectedRows"
                        :rows="currentPageItems"
                        :columns
                        key-attribute="id"
                        selectable="multi"
                    >
                        <template #caption>Tabell med filtrering och paginering</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>
</template>
