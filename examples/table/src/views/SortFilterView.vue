<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { assertRef, formatNumber } from "@fkui/logic";
import { FSortFilterDataset } from "@fkui/vue";
import { type TableColumn, FTable, defineTableColumns, removeRow } from "@fkui/vue-labs";

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
            /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
            return String(row.antal);
        },
    },
    {
        type: "text",
        header: "Formatterad text",
        label: (row) => `Text för rad ${row.id}`,
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
        label: (row) => `Text för rad ${row.id}`,
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

const rows = ref<Row[]>([
    {
        id: "1",
        level: "Föräldrapenning",
        antal: "90000",
        expandableRows: [
            {
                id: "1a",
                level: "Sjukpenningsnivå",
                antal: "30000",
            },
            {
                id: "1b",
                level: "Lägstanivå",
                antal: "20000",
            },
            {
                id: "1c",
                level: "Sjukpenningsnivå",
                antal: "50000",
            },
        ],
    },
    {
        id: "2",
        level: "Tillfällig föräldrapenning",
        antal: "30000",
        expandableRows: [
            {
                id: "2a",
                level: "Heldag",
                antal: "30000",
            },
        ],
    },
    {
        id: "3",
        level: "Föräldrapenning",
        antal: "11000",
        expandableRows: [
            {
                id: "3a",
                level: "Sjukpenningsnivå",
                antal: "40000",
            },
            {
                id: "3b",
                level: "Lägstanivå",
                antal: "20000",
            },
            {
                id: "3c",
                level: "Sjukpenningsnivå",
                antal: "50000",
            },
        ],
    },
]);

function hasKey<T, K extends keyof T>(column: TableColumn<T, K>): column is TableColumn<T, K> & { key: K } {
    return Boolean("key" in column && column.key);
}

const sortableAttributes = Object.fromEntries(columns.filter(hasKey).map((it) => [it.key, it.header]));

const mySelectedRows = ref<Row[]>([rows.value[0]]);

function onAddRow(): void {
    rows.value.push({
        id: String(rows.value.length + 1),
        level: "Föräldrapenning",
        antal: "10000",
        aktiv: false,
    });
}

function onRemoveRow(row: Row): void {
    assertRef(tableRef);

    tableRef.value.withTabstopBehaviour("row-removal", () => {
        rows.value = removeRow(rows.value, row, "expandableRows");
    });
}

function onRemoveSelectedRows(): void {
    rows.value = rows.value.filter((row) => !mySelectedRows.value.includes(row));
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
