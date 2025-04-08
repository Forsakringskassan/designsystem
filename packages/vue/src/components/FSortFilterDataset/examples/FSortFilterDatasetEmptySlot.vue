<script lang="ts">
import { defineComponent } from "vue";
import { FSelectField, FSortFilterDataset, FDataTable, FTableColumn } from "@fkui/vue";
import { type FruitData, fruits } from "./fruit-data";

const emptyList: FruitData[] = [];
const populatedList: FruitData[] = fruits;

export default defineComponent({
    components: { FSelectField, FSortFilterDataset, FDataTable, FTableColumn },
    data() {
        return {
            sortableAttributes: {
                name: "Namn",
                origin: "Land",
            },
            fruits: populatedList,
            emptyList,
            populatedList,
        };
    },
});
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
        <f-sort-filter-dataset :data="fruits" :sortable-attributes="sortableAttributes">
            <template #header="{ slotClass }">
                <h3 :class="slotClass">Frukter</h3>
            </template>
            <template #default="{ sortFilterResult }">
                <p>Visar {{ sortFilterResult.length }} av {{ fruits.length }} frukter.</p>
                <f-data-table :rows="sortFilterResult" striped key-attribute="id">
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
                    <template #empty>
                        <template v-if="fruits.length === 0">
                            Det finns inga frukter att visa.
                        </template>
                        <template v-else> Sökningen gav inga träffar. </template>
                    </template>
                </f-data-table>
            </template>
        </f-sort-filter-dataset>
    </div>
</template>
