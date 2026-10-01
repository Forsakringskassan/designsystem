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
        Båda tabellerna visar samma datakälla men har varsin <code>f-sort-filter-dataset</code> och
        <code>f-paginate-dataset</code>. Sortera tabell 1 och tabell 2 i olika ordning (t.ex. Namn stigande vs. Kategori
        fallande) — <code>rowIndex</code>/<code>pos</code> för en given rad är identisk i båda tabellerna och ändras
        inte när du sorterar om. Det beror på att <code>FSortFilterDataset</code> återanvänder det ursprungliga
        datasetets metadata istället för att räkna om <code>rowIndex</code>/<code>ariaPosInSet</code>
        för den sorterade/filtrerade vyn. Metadatan speglar alltså alltid den ursprungliga, osorterade ordningen — inte
        vad som faktiskt visas på skärmen — vilket gör den missvisande att lita på i UI eller för tillgänglighet
        (aria-rowindex/aria-posinset stämmer inte med vad skärmläsaren/användaren ser).
    </p>

    <h3>Tabell 1</h3>
    <f-sort-filter-dataset :data="products" :sortable-attributes default-sort-attribute="name">
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="2">
                <template #default="{ items }">
                    <f-table :rows="items" :columns>
                        <template #caption>Produkter, tabell 1</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>

    <h3>Tabell 2</h3>
    <f-sort-filter-dataset :data="products" :sortable-attributes default-sort-attribute="category">
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="2">
                <template #default="{ items }">
                    <f-table :rows="items" :columns>
                        <template #caption>Produkter, tabell 2</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>
</template>
