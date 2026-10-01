<script setup lang="ts">
import { formatDatasetCell } from "./format-dataset-cell";
import { type Product } from "./product";
import { type Dataset, FPaginateDataset, FPaginator, FSortFilterDataset, FTable, defineTableColumns } from "@fkui/vue";

const products = defineModel<Dataset<Product>>({ required: true });

const sortableAttributes = { name: "Namn", category: "Kategori" };

const columns = defineTableColumns<Product>([
    {
        type: "text",
        header: "Namn",
        key: "name",
        value: (row) => formatDatasetCell(row.name, row),
    },
    {
        type: "text",
        header: "Kategori",
        key: "category",
        value: (row) => formatDatasetCell(row.category, row),
    },
]);
</script>

<template>
    <p>
        Detta är referensfallet: en enda <code>f-sort-filter-dataset</code>/<code>f-paginate-dataset</code>/
        <code>f-table</code>-kedja kopplad mot datan. <code>rowIndex</code>/<code>pos</code> i varje cell är stabil och
        unik per rad så länge denna kedja är den enda konsumenten av datasetet. Problemet uppstår först när flera kedjor
        delar samma radobjekt, se exemplen med två tabeller nedan.
    </p>

    <f-sort-filter-dataset :data="products" :sortable-attributes default-sort-attribute="name">
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="2">
                <template #default="{ items }">
                    <f-table :rows="items" :columns>
                        <template #caption>Alla produkter</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>
</template>
