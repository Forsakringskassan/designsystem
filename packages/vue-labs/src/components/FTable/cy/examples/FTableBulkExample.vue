<script setup lang="ts">
import { ref } from "vue";
import { useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    text: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Text",
        key: "text",
    },
]);

const rows = useDatasetRef<Row>(
    Array.from({ length: 10 }, (_, index) => ({
        id: String(index + 1),
        text: `Row ${index + 1}`,
    })),
);

const selectedRows = ref<Row[]>([]);
</script>

<template>
    <h2>Bulkval i vanlig tabell</h2>
    <p>I detta exempel visas grundbeteendet för bulkval utan filtrering eller paginering.</p>
    <ul>
        <li>När du väljer "Välj alla" markeras samtliga rader.</li>
        <li>Om du markerar en enskild rad blir bulk-rutan delvis vald.</li>
        <li>Om du avmarkerar sista valda raden blir bulk-rutan omarkerad.</li>
    </ul>

    <p data-test="selected-count">Valda rader: {{ selectedRows.length }}</p>
    <f-table
        v-model:selected-rows="selectedRows"
        :rows
        :columns
        key-attribute="id"
        selectable="multi"
    />
</template>
