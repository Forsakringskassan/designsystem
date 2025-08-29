<script setup lang="ts">
import { ref } from "vue";
import { FInteractiveTable, FTableColumn, FSortFilterDataset } from "@fkui/vue";

interface FruitData {
    id: string;
    name: string;
    origin: FruitOrigin;
    description: string;
    price: number;
}

interface FruitOrigin {
    country: string;
}

const data = ref<FruitData[]>([
    {
        id: "1",
        name: "Äpple",
        origin: { country: "Sverige" },
        description: "rund, ofta röd eller grön frukt med söt eller syrlig smak.",
        price: 1980,
    },
    {
        id: "2",
        name: "Banan",
        origin: { country: "Colombia" },
        description: "lång, gul frukt med mjukt och sött fruktkött.",
        price: 15,
    },
    {
        id: "3",
        name: "Vattenmelon",
        origin: { country: "Spanien" },
        description: "stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
        price: 20,
    },
    {
        id: "4",
        name: "Grapefrukt",
        origin: { country: "Turkiet" },
        description: "stor, rund citrusfrukt med tjockt skal och saftig, syrlig smak.",
        price: 164500,
    },
]);

const sortableAttributes = ref({
    name: "Namn",
});
</script>

<template>
    <h3>Frukter</h3>
    <f-sort-filter-dataset
        :data
        default-sort-attribute="name"
        :default-sort-ascending="true"
        :sortable-attributes="sortableAttributes"
    >
        <template #header="{ slotClass }">
            <h3 :class="slotClass">Frukter</h3>
        </template>
        <template #default="{ sortFilterResult }">
            <f-interactive-table :rows="sortFilterResult">
                <template #caption>
                    <span class="sr-only"> Frukter </span>
                </template>
                <template #default="{ row }">
                    <f-table-column name="name" title="Namn" type="text" shrink>
                        {{ row.name }}
                    </f-table-column>
                    <f-table-column name="origin" title="Land" type="text" shrink>
                        {{ row.origin.country }}
                    </f-table-column>
                    <f-table-column
                        v-format:text="row.description"
                        name="description"
                        title="Beskrivning"
                        type="text"
                        expand
                    ></f-table-column>
                    <f-table-column
                        v-format:number="row.price"
                        name="price"
                        title="Pris"
                        type="numeric"
                        shrink
                    ></f-table-column>
                </template>
            </f-interactive-table>
        </template>
    </f-sort-filter-dataset>
</template>
