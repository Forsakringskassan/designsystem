<script lang="ts">
import { defineComponent } from "vue";
import { FSortFilterDataset, FInteractiveTable, FTableColumn } from "@fkui/vue";

const ankor = [
    { name: "Kalle Anka", value: 42 },
    { name: "Kajsa Anka", value: 511 },
    { name: "Joakim von Anka", value: 4711 },
];

export default defineComponent({
    components: { FSortFilterDataset, FInteractiveTable, FTableColumn },
    data() {
        return {
            sortableAttributes: {
                name: "Namn",
                value: "Värde",
            },
            ankor,
        };
    },
});
</script>

<template>
    <f-sort-filter-dataset
        :data="ankor"
        default-sort-attribute="name"
        :default-sort-ascending="true"
        :sortable-attributes="sortableAttributes"
    >
        <template #header="{ slotClass }">
            <h3 :class="slotClass">Sortera och filtrera</h3>
        </template>
        <template #default="{ sortFilterResult }">
            <f-interactive-table :rows="sortFilterResult">
                <template #caption>
                    <span class="sr-only"> Tabell </span>
                </template>
                <template #default="{ row }">
                    <f-table-column v-format:text="row.name" title="Namn" type="text"></f-table-column>
                    <f-table-column v-format:number="row.value" title="Värde" type="numeric" shrink></f-table-column>
                </template>
            </f-interactive-table>
        </template>
    </f-sort-filter-dataset>
</template>
