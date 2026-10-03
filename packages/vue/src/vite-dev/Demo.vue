<script setup lang="ts">
import DatasetTableDual from "./DatasetTableDual.vue";
import DatasetTableSingle from "./DatasetTableSingle.vue";
import DatasetTableSubsets from "./DatasetTableSubsets.vue";
import { type Product } from "./product";
import { defineTableColumns, useDatasetRef, FTable } from "@fkui/vue";
import { formatDatasetCell } from "./format-dataset-cell.js";

const products = useDatasetRef<Product>(
    [
        {
            name: "Äpple",
            category: "Frukt",
            tags: ["ekologisk"],
            comment: "",
            expandableRows: [
                { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
                { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
                { name: "C", category: "Grönsak", tags: ["ekologisk"], comment: "" },
            ],
        },
        {
            name: "Banan",
            category: "Frukt",
            tags: ["importerad"],
            comment: "",
            expandableRows: [
                { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
                { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
                { name: "C", category: "Grönsak", tags: ["ekologisk"], comment: "" },
            ],
        },
        {
            name: "Morot",
            category: "Grönsak",
            tags: ["ekologisk", "lokal"],
            comment: "",
            expandableRows: [
                { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
                { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
                { name: "C", category: "Grönsak", tags: ["ekologisk"], comment: "" },
            ],
        },
        {
            name: "Potatis",
            category: "Grönsak",
            tags: ["lokal"],
            comment: "",
            expandableRows: [
                { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
                { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
                { name: "C", category: "Grönsak", tags: ["ekologisk"], comment: "" },
            ],
        },
        {
            name: "Apelsin",
            category: "Frukt",
            tags: ["ekologisk", "importerad"],
            comment: "",
            expandableRows: [
                { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
                { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
                { name: "C", category: "Grönsak", tags: ["ekologisk"], comment: "" },
            ],
        },
    ],
    "expandableRows",
);
const columns = defineTableColumns<Product>([
    {
        type: "text",
        header: "Namn",
        key: "name",
    },
    {
        type: "text",
        header: "Kategori",
        key: "category",
    },
    {
        type: "text",
        header: "Typ",
        value: (row) => {
            return row.tags.join(" ");
        },
    },
    {
        type: "text",
        header: "Kommentar",
        key: "comment",
        editable: true,
    },
    {
        type: "text",
        header: "Metadata",
        value: (row) => formatDatasetCell(row),
    },
]);
</script>

<template>
    <h2>A. Originaldata</h2>
    <f-table :rows="products" :columns expandable-attribute="expandableRows">
        <template #caption>Alla produkter</template>
    </f-table>

    <h2>B. Originaldata, filtrer/sorterbar</h2>
    <dataset-table-single v-model="products" :columns />

    <h2>C. Två tabeller, samma källa</h2>
    <dataset-table-dual v-model="products" :columns />

    <h2>D. Två tabeller, överlappande delmängder</h2>
    <dataset-table-subsets v-model="products" :columns />
</template>
<style>
main {
    max-width: 100%;
}
</style>
