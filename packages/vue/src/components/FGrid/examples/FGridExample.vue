<script setup lang="ts">
import FGrid from "../FGrid.vue";
import FGridCell from "../FGridCell.vue";

const rows = [
    {
        id: "foo",
        foo: "Kalle",
        bar: "Anka",
        baz: [
            { id: "banan", foo: "Gul", bar: "Banan" },
            { id: "äpple", foo: "Grönt", bar: "Äpple" },
        ],
    },
    {
        id: "bar",
        foo: "Musse",
        bar: "Pigg",
        baz: [
            { id: "melon", foo: "Grön", bar: "Melon" },
            { id: "citron", foo: "Gul", bar: "Citron" },
        ],
    },
];
</script>

<template>
    <f-grid :rows expandable-attribute="baz">
        <template #default="{ row }">
            <f-grid-cell>{{ row.foo }}</f-grid-cell>
            <f-grid-cell>{{ row.bar }}</f-grid-cell>
        </template>
    </f-grid>
</template>
