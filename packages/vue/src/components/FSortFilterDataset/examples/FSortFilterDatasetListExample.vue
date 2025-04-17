<script lang="ts">
import { defineComponent } from "vue";
import { FSortFilterDataset, FList } from "@fkui/vue";
import { fruits } from "./fruit-data";

export default defineComponent({
    components: { FSortFilterDataset, FList },
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
    <f-sort-filter-dataset :data="fruits" :sortable-attributes="sortableAttributes">
        <template #header="{ slotClass }">
            <h3 :class="slotClass">Frukter</h3>
        </template>
        <template #default="{ sortFilterResult }">
            <f-list key-attribute="id" :items="sortFilterResult">
                <template #default="{ item }">
                    <h3>{{ item.name }}</h3>
                    <p>
                        Land:
                        <em> {{ item.origin }} </em>
                        <br />
                        Beskrivning:
                        <em> {{ item.description }} </em>
                        <br />
                    </p>
                </template>
                <template #screenreader="{ item }"> {{ item.name }} </template>
            </f-list>
        </template>
    </f-sort-filter-dataset>
</template>
./fruit-data
