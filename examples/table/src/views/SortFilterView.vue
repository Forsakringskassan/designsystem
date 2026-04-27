<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { assertRef, formatNumber } from "@fkui/logic";
import { FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns, removeDatasetRows } from "@fkui/vue-labs";

const tableRef = useTemplateRef("table");

interface Row {
    id: string;
    animal?: string;
    level: string;
    antal: string;
    expandableRows?: Row[];
    expandableContent?: Array<{
        id: string;
        content: string;
    }>;
    aktiv?: boolean;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Oformaterad text",
        value(row) {
            return row.antal;
        },
    },
    {
        type: "text",
        header: "Formatterad text",
        label(row) {
            return `Text för rad ${row.id}`;
        },
        value(row) {
            return formatNumber(row.antal) ?? "";
        },
        editable: true,
    },
    {
        type: "text",
        header: "Redigerbar text",
        editable: true,
        key: "level",
        label(row) {
            return `Text för rad ${row.id}`;
        },
        value(row) {
            return row.level;
        },
        update(row, newValue) {
            row.level = newValue;
        },
        validation: {
            required: {},
            maxLength: { length: 5 },
        },
    },
    {
        type: "button",
        header: "Knapp",
        icon: "trashcan",
        size: "shrink",
        text(row) {
            return `Ta bort ${row.id}`;
        },
        onClick: (row) => {
            onRemoveRow(row);
        },
    },
]);

const rows = useDatasetRef<Row>(
    [
        {
            id: "1",
            level: "Föräldrapenning",
            antal: "90000",
        },
        {
            id: "2",
            level: "Tillfällig föräldrapenning",
            antal: "30000",
        },
        {
            id: "3",
            level: "Föräldrapenning",
            antal: "11000",
        },
    ],
    "expandableRows",
);

// Hard coded sorting on key {attributeName: "Name for the key", ...}
const sortableAttributes = { level: "Redigerbar text" };
const mySelectedRows = ref([rows.value[0]]);
const nextId = ref(4);

function onAddRow(): void {
    const id: number = nextId.value;
    nextId.value += 1;

    rows.value.push({
        id: String(id),
        level: "Föräldrapenning",
        antal: String(10000 + id),
        aktiv: false,
    });
}

function onRemoveRow(row: Row): void {
    assertRef(tableRef);

    tableRef.value.withTabstopBehaviour("row-removal", () => {
        removeDatasetRows(rows, row);
    });
}

function onRemoveSelectedRows(): void {
    removeDatasetRows(rows, mySelectedRows);
}
</script>

<template>
    <button type="button" class="button button--secondary" @click="onRemoveSelectedRows">
        Ta bort markerade rader
    </button>
    <f-sort-filter-dataset :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-table
                ref="table"
                v-model:selected-rows="mySelectedRows"
                :rows="sortFilterResult"
                :columns
                key-attribute="id"
                striped
                selectable="multi"
                expandable-attribute="expandableRows"
            >
                <template #caption>Tabell</template>
                <template #footer>Footer</template>
            </f-table>
        </template>
    </f-sort-filter-dataset>
    <button type="button" class="button button--secondary" @click="onAddRow">Lägg till rad</button>
</template>
