<script lang="ts">
import { defineComponent } from "vue";
import { FSortFilterDataset } from "@fkui/vue";
import { fruits } from "./fruit-data";

export default defineComponent({
    components: { FSortFilterDataset },
    data() {
        return {
            sortableAttributes: {
                name: "Namn",
                origin: "Land",
            },
            fruits: fruits.map((it) => {
                const { description, ...rest } = it;
                return rest;
            }),
        };
    },
});
</script>

<template>
    <f-sort-filter-dataset :data="fruits" :sortable-attributes="sortableAttributes">
        <template #default="{ sortFilterResult }">
            <pre v-for="item in sortFilterResult" :key="item.id">{{ item }}</pre>
        </template>
    </f-sort-filter-dataset>
</template>

<style>
.sort-filter-dataset pre {
    display: inline-block;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
}
</style>
