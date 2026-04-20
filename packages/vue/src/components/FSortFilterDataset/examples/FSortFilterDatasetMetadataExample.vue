<script setup lang="ts">
import {
    type FDefinitionListItem,
    FDefinitionList,
    FList,
    FSortFilterDataset,
    getDatasetMetadata,
    useDatasetRef,
} from "@fkui/vue";
import { type FruitData, fruits } from "./fruit-data";

const items = useDatasetRef<FruitData>(fruits);

const sortableAttributes = {
    name: "Namn",
    origin: "Land",
};

function itemDefinition(item: FruitData): FDefinitionListItem[] {
    const meta = getDatasetMetadata(item);

    return [
        { term: "Namn", definition: item.name },
        { term: "Land", definition: item.origin },
        { term: "Radindex", definition: String(meta.ariaRowIndex) },
    ];
}
</script>

<template>
    <f-sort-filter-dataset :data="items" :sortable-attributes>
        <template #header="{ slotClass }">
            <h3 :class="slotClass">Frukter</h3>
        </template>

        <template #default="{ sortFilterResult }">
            <f-list id="rows" :items="sortFilterResult">
                <template #default="{ item }">
                    <f-definition-list :definitions="itemDefinition(item)" />
                </template>
            </f-list>
        </template>
    </f-sort-filter-dataset>
</template>
