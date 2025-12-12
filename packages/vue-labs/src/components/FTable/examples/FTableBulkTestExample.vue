<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { assertRef, formatNumber } from "@fkui/logic";
import { FSortFilterDataset } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

const tableRef = useTemplateRef("table");

interface Row {
    id: string;
    text: string;
    nested?: Row[];
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Text",
        key: "text",
        value(row) {
            return row.text;
        },
    },
]);

const rows = ref<Row[]>([
    {
        id: "A",
        text: "Apelsin",
    },
    {
        id: "B",
        text: "Banan",
    },
]);

const sortableAttributes = { text: "Text" };

const selectedRows = ref<Row[]>([]);

function onAddRow(): void {
    rows.value.push({
        id: String(rows.value.length + 1),
        text: "Citron",
    });
}

function onRemoveSelectedRows(): void {
    rows.value = rows.value.filter((row) => !selectedRows.value.includes(row));
}
</script>

<template>
    <button type="button" class="button button--secondary" @click="onRemoveSelectedRows">
        Ta bort markerade rader
    </button>
    <f-sort-filter-dataset v-test="'filter'" :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-table
                v-model:selected-rows="selectedRows"
                :rows="sortFilterResult"
                :columns
                key-attribute="id"
                selectable="multi"
            ></f-table>
        </template>
    </f-sort-filter-dataset>
    <button type="button" class="button button--secondary" @click="onAddRow">Lägg till rad</button>
</template>
