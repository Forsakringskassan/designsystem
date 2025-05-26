<script setup lang="ts">
import { ref } from "vue";
import FGrid from "../FGrid.vue";
import FGridCell from "../FGridCell.vue";
import FGridTextField from "../FGridTextField.vue";

const rows = ref([
    {
        id: 1,
        foo: "Kalle",
        bar: "Anka",
        baz: [
            { id: 2, foo: "Gul", bar: "Banan" },
            { id: 3, foo: "Grönt", bar: "Äpple" },
        ],
    },
    {
        id: 4,
        foo: "Musse",
        bar: "Pigg",
        baz: [
            { id: 5, foo: "Grön", bar: "Melon" },
            { id: 6, foo: "Gul", bar: "Citron" },
        ],
    },
]);
</script>

<template>
    <f-grid :rows expandable-attribute="baz">
        <template #default="{ row }">
            <f-grid-cell>
                {{ row.id }}
            </f-grid-cell>
            <f-grid-text-field v-model="row.foo"></f-grid-text-field>
            <f-grid-cell>
                {{ row.bar }}
            </f-grid-cell>
        </template>
    </f-grid>
</template>

<style>
.shortcut {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
}
</style>
