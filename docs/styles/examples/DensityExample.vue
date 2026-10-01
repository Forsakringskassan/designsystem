<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    id: string;
    date: string;
    amount: string;
}

const rows = useDatasetRef<Row>([
    { id: "1", date: "2022-02-01", amount: "2 300" },
    { id: "2", date: "2024-04-20", amount: "5 250" },
    { id: "3", date: "2024-05-01", amount: "2 100" },
]);
const columns = defineTableColumns<Row>([
    { type: "text:date", header: "Datum", key: "date" },
    { type: "text:number", header: "Belopp", key: "amount" },
]);

export default defineComponent({
    components: { FTable },
    setup() {
        return { rows, columns };
    },
    data() {
        return {};
    },
});
</script>

<template>
    <div class="row">
        <div class="col col--md-6 density-default">
            <f-table :rows :columns>
                <template #caption> Tabell med standard densitet </template>
            </f-table>
        </div>
        <div class="col col--md-6 density-dense">
            <f-table :rows :columns>
                <template #caption> Tabell med kompakt densitet </template>
            </f-table>
        </div>
    </div>
</template>
