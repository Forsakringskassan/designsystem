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
    useDatasetRef,
} from "@fkui/vue";

const products = defineModel<Dataset<Product>>({ required: true });
defineProps<{ columns: Array<TableColumn<Product>> }>();
// Subsets intentionally overlap ("Morot" has both tags) to expose the bug.
//const ekologiska = useDatasetRef<Product>(products.value.filter((row) => row.tags.includes("ekologisk")));
const ekologiska = useDatasetRef<Product>(
    products.value.filter((row) => row.tags.includes("ekologisk")),
    "expandableRows",
);
const lokala = useDatasetRef<Product>(
    products.value.filter((row) => row.tags.includes("lokal")),
    "expandableRows",
);

const sortableAttributes = { name: "Namn", category: "Kategori" };
</script>

<template>
    <f-sort-filter-dataset :data="ekologiska" :sortable-attributes default-sort-attribute="name">
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="2">
                <template #default="{ items }">
                    <f-table :rows="items" :columns expandable-attribute="expandableRows">
                        <template #caption>Ekologiska produkter</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>

    <f-sort-filter-dataset :data="lokala" :sortable-attributes default-sort-attribute="name">
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="2">
                <template #default="{ items }">
                    <f-table :rows="items" :columns expandable-attribute="expandableRows">
                        <template #caption>Lokala produkter</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>
</template>
