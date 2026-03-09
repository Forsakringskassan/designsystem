<script lang="ts">
import { defineComponent } from "vue";
import { FInteractiveTable, FSortFilterDataset, FTableColumn } from "@fkui/vue";

export const fruits = [
    {
        id: "1",
        name: "Äpple",
        origin: "Sverige",
        description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
        variant: [
            {
                id: "1a",
                name: "Discovery",
                origin: "Sverige",
                description: "Rött och gulgrönt äpple. Krispig och smakrik.",
            },
            {
                id: "1b",
                name: "Ingrid Marie",
                origin: "Sverige",
                description: "Mörkrött äpple. Saftig och sötsyrlig.",
            },
        ],
    },
    {
        id: "2",
        name: "Banan",
        origin: "Colombia",
        description: "Lång, gul frukt med mjukt och sött fruktkött.",
    },
    {
        id: "3",
        name: "Vattenmelon",
        origin: "Spanien",
        description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
    },
    {
        id: "4",
        name: "Grapefrukt",
        origin: "Turkiet",
        description: "Stor, rund citrusfrukt med tjockt skal och saftig, syrlig smak.",
    },
];

export default defineComponent({
    components: { FSortFilterDataset, FInteractiveTable, FTableColumn },
    data() {
        return {
            sortableAttributes: {
                name: "Namn",
                origin: "Land",
            },
            fruits,
        };
    },
});
</script>

<template>
    <div class="sandbox-root">
        <f-sort-filter-dataset
            :data="fruits"
            default-sort-attribute="name"
            :default-sort-ascending="true"
            :sortable-attributes
        >
            <template #header="{ slotClass }">
                <h3 :class="slotClass">Frukter</h3>
            </template>
            <template #default="{ sortFilterResult }">
                <f-interactive-table :rows="sortFilterResult" striped key-attribute="id">
                    <template #caption>
                        <span class="sr-only"> Frukter </span>
                    </template>
                    <template #default="{ row }">
                        <f-table-column name="name" title="Namn" type="text" shrink>
                            {{ row.name }}
                        </f-table-column>
                        <f-table-column name="origin" title="Land" type="text" shrink>
                            {{ row.origin }}
                        </f-table-column>
                        <f-table-column name="description" title="Beskrivning" type="text" expand>
                            {{ row.description }}
                        </f-table-column>
                    </template>
                </f-interactive-table>
            </template>
        </f-sort-filter-dataset>
    </div>
</template>
<style>
.sandbox-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 2rem;
}

hr {
    margin-bottom: 2rem;
}
</style>
