<script setup lang="ts">
import { formatDatasetCell } from "./format-dataset-cell";
import { type Product } from "./product";
import {
    type Dataset,
    FPaginateDataset,
    FPaginator,
    FSortFilterDataset,
    FTable,
    TableColumn,
    defineTableColumns,
} from "@fkui/vue";

const products = defineModel<Dataset<Product>>({ required: true });
defineProps<{ columns: Array<TableColumn<Product>> }>();
const sortableAttributes = { name: "Namn", category: "Kategori" };
</script>

<template>
    <f-sort-filter-dataset :data="products" :sortable-attributes default-sort-attribute="name">
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="2">
                <template #default="{ items }">
                    <f-table :rows="items" :columns expandable-attribute="expandableRows">
                        <template #caption>Produkter, tabell 1</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>

    <f-sort-filter-dataset :data="products" :sortable-attributes default-sort-attribute="category">
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="2">
                <template #default="{ items }">
                    <f-table :rows="items" :columns expandable-attribute="expandableRows">
                        <template #caption>Produkter, tabell 2</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>
</template>
