<script lang="ts">
import { defineComponent } from "vue";
import { FSortFilterDataset } from "@fkui/vue";

export default defineComponent({
    components: { FSortFilterDataset },
});
</script>

<template>
    <f-sort-filter-dataset
        :data="[]"
        :sortable-attributes="{ givenname: 'Förnamn', surname: 'Efternamn' }"
    >
        <template #header>
            <h1>Stor rubrik</h1>
        </template>
        <template #default></template>
    </f-sort-filter-dataset>
</template>
