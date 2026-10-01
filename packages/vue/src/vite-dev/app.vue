<script setup lang="ts">
import DatasetTableDual from "./DatasetTableDual.vue";
import DatasetTableSingle from "./DatasetTableSingle.vue";
import DatasetTableSubsets from "./DatasetTableSubsets.vue";
import { type Product } from "./product";
import { useDatasetRef } from "@fkui/vue";

const products = useDatasetRef<Product>([
    { name: "Äpple", category: "Frukt", tags: ["ekologisk"] },
    { name: "Banan", category: "Frukt", tags: ["importerad"] },
    { name: "Morot", category: "Grönsak", tags: ["ekologisk", "lokal"] },
    { name: "Potatis", category: "Grönsak", tags: ["lokal"] },
    { name: "Apelsin", category: "Frukt", tags: ["ekologisk", "importerad"] },
]);
</script>

<template>
    <h2>A. En tabell</h2>
    <dataset-table-single v-model="products" />

    <h2>B. Två tabeller, samma källa</h2>
    <dataset-table-dual v-model="products" />

    <h2>C. Två tabeller, överlappande delmängder</h2>
    <dataset-table-subsets v-model="products" />
</template>
