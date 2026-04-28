<script setup lang="ts">
import { ref } from "vue";
import { FPaginateDataset, FPaginator, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";

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

const rows = useDatasetRef<Row>(
    Array.from({ length: 6 }, (_, index) => ({
        id: String(index + 1),
        name: `Rad ${index + 1}`,
    })),
);

const selectedRows = ref<Row[]>([]);
const itemsPerPage = ref(3);
</script>

<template>
    <h2>Bulkval med paginering</h2>
    <p>
        I detta exempel visas hur bulkval fungerar tillsammans med
        <code>f-paginate-dataset</code> och <code>f-paginator</code>.
    </p>
    <ul>
        <li>
            När du väljer "Välj alla" markeras alla rader i hela datasetet, inte bara den aktuella
            sidan.
        </li>
        <li>Bläddrande mellan sidor bevarar valda rader.</li>
    </ul>

    <p data-test="selected-count">Valda rader: {{ selectedRows.length }}</p>

    <f-paginate-dataset :items="rows" :items-per-page>
        <template #default="{ items: currentPageItems }">
            <f-table
                v-model:selected-rows="selectedRows"
                :rows="currentPageItems"
                :columns
                key-attribute="id"
                selectable="multi"
            >
                <template #caption>Tabell med paginering</template>
            </f-table>
            <f-paginator />
        </template>
    </f-paginate-dataset>
</template>
