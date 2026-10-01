<script setup lang="ts">
import { formatDatasetCell } from "./format-dataset-cell";
import { type Product } from "./product";
import {
    type Dataset,
    FPaginateDataset,
    FPaginator,
    FSortFilterDataset,
    FTable,
    defineTableColumns,
    useDatasetRef,
} from "@fkui/vue";

const products = defineModel<Dataset<Product>>({ required: true });

// Subsets intentionally overlap ("Morot" has both tags) to expose the bug.
const ekologiska = useDatasetRef<Product>(products.value.filter((row) => row.tags.includes("ekologisk")));
const lokala = useDatasetRef<Product>(products.value.filter((row) => row.tags.includes("lokal")));

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
        Delmängderna skapas med varsitt <code>useDatasetRef()</code>-anrop, men "Morot" finns i båda (den är både
        ekologisk och lokal) — samma radobjekt återanvänds alltså i två obesläktade datasets. Enligt dokumentationen för
        <code>toDataset()</code> stöds inte detta: "Reusing element references across unrelated datasets is not
        supported and will produce incorrect metadata." Jämför Morots <code>pos=i/n</code> i de två tabellerna nedan —
        nämnaren (n) är fel i den ena, eftersom det senaste <code>useDatasetRef</code>-anropet skrev över Morots
        metadata med sin egen delmängds storlek/position. Det här är en reell risk när olika vyer filtrerar fram
        överlappande delmängder av samma källdata, t.ex. om flera Pinia-getters i ett senare steg härleder delmängder ur
        samma store-state.
    </p>

    <h3>Ekologiska produkter</h3>
    <f-sort-filter-dataset :data="ekologiska" :sortable-attributes default-sort-attribute="name">
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="2">
                <template #default="{ items }">
                    <f-table :rows="items" :columns>
                        <template #caption>Ekologiska produkter</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>

    <h3>Lokala produkter</h3>
    <f-sort-filter-dataset :data="lokala" :sortable-attributes default-sort-attribute="name">
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="2">
                <template #default="{ items }">
                    <f-table :rows="items" :columns>
                        <template #caption>Lokala produkter</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>
</template>
