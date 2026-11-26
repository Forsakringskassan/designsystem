<script setup lang="ts">
import { shallowRef } from "vue";
import { type FruitData, fruits as fruitData } from "./fruit-data";
import { FSelectField, FSortFilterDataset, FTable, defineTableColumns } from "@fkui/vue";

const emptyList: FruitData[] = [];
const populatedList: FruitData[] = fruitData;
const columns = defineTableColumns<FruitData>([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    { type: "text", header: "Land", key: "origin", size: "shrink" },
    { type: "text", header: "Beskrivning", key: "description" },
]);
const sortableAttributes = {
    name: "Namn",
    origin: "Land",
};
const fruits = shallowRef<FruitData[]>(populatedList);
</script>

<template>
    <div>
        <f-select-field id="data-source" v-model="fruits">
            <template #label> Välj datakälla </template>
            <template #default>
                <option :value="emptyList">Inläst data utan rader</option>
                <option :value="populatedList">Inläst data med rader</option>
            </template>
        </f-select-field>
        <f-sort-filter-dataset :data="fruits" :sortable-attributes>
            <template #header="{ slotClass }">
                <h3 :class="slotClass">Frukter</h3>
            </template>
            <template #default="{ sortFilterResult }">
                <p>Visar {{ sortFilterResult.length }} av {{ fruits.length }} frukter.</p>
                <f-table :rows="sortFilterResult" :columns striped>
                    <template #caption><span class="sr-only"> Frukter </span></template>
                    <template #empty>
                        <template v-if="fruits.length === 0">
                            Det finns inga frukter att visa.
                        </template>
                        <template v-else> Sökningen gav inga träffar. </template>
                    </template>
                </f-table>
            </template>
        </f-sort-filter-dataset>
    </div>
</template>
