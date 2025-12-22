2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37
38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60
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

function onRemoveRow(row: Row): void {
    assertRef(tableRef);

    tableRef.value.withTabstopBehaviour("row-removal", () => {
        rows.value.splice(rows.value.indexOf(row), 1);
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
    <f-sort-filter-dataset :data="rows" :sortable-attributes>
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
