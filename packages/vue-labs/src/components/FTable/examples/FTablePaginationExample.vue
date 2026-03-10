<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FPaginateDataset, FPaginator, FSortFilterDataset } from "@fkui/vue";
import { type TableColumn, FTable, defineTableColumns, removeRow } from "@fkui/vue-labs";

const tableRef = useTemplateRef("table");

interface Row {
    id: string;
    name: string;
    receivedAt: string;
    expandableRows?: Row[];
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
        editable: true,
        label: (row) => `Namn för rad ${row.id}`,
        validation: {
            required: {},
            minLength: { length: 3 },
        },
    },
    {
        type: "text",
        header: "Mottaget",
        key: "receivedAt",
    },
    {
        type: "button",
        header: "Åtgärd",
        icon: "trashcan",
        text() {
            return "Ta bort";
        },
        onClick(row) {
            onRemoveRow(row);
        },
    },
]);

const rows = ref<Row[]>([
    {
        id: "1",
        name: "Sofia Lindgren",
        receivedAt: "2023-11-12",
        expandableRows: [
            {
                id: "1a",
                name: "Detalj 1",
                receivedAt: "2023-11-12",
            },
            {
                id: "1b",
                name: "Detalj 2",
                receivedAt: "2023-11-13",
            },
        ],
    },
    {
        id: "2",
        name: "Filip Gustafsson",
        receivedAt: "2024-02-20",
        expandableRows: [
            {
                id: "2a",
                name: "Detalj 1",
                receivedAt: "2024-03-02",
            },
        ],
    },
    {
        id: "3",
        name: "Tina Jansson",
        receivedAt: "2024-05-15",
    },
    {
        id: "4",
        name: "David Lindqvist",
        receivedAt: "2024-08-30",
        expandableRows: [
            {
                id: "4a",
                name: "Detalj 1",
                receivedAt: "2024-09-05",
            },
            {
                id: "4b",
                name: "Detalj 2",
                receivedAt: "2024-09-10",
            },
        ],
    },
    {
        id: "5",
        name: "Elin Andersson",
        receivedAt: "2024-11-12",
    },
    {
        id: "6",
        name: "Victor Nilsson",
        receivedAt: "2025-02-20",
        expandableRows: [],
    },
    {
        id: "7",
        name: "Sofia Lindström",
        receivedAt: "2025-05-15",
    },
    {
        id: "8",
        name: "Olle Bergström",
        receivedAt: "2025-08-30",
        expandableRows: [
            {
                id: "8a",
                name: "Detalj 1",
                receivedAt: "2025-09-19",
            },
        ],
    },
]);

function hasKey<T, K extends keyof T>(
    column: TableColumn<T, K>,
): column is TableColumn<T, K> & { key: K } {
    return Boolean("key" in column && column.key);
}

const sortableAttributes = Object.fromEntries(
    columns.filter(hasKey).map((column) => [column.key, column.header]),
);

const selectedRows = ref<Row[]>([]);
const itemsPerPage = ref(3);
const nextId = ref(9);

function onAddRow(): void {
    const id = String(nextId.value);
    nextId.value += 1;

    rows.value.push({
        id,
        name: "Ny person",
        receivedAt: "2026-03-10",
        expandableRows: [
            {
                id: `${id}a`,
                name: "Detalj 1",
                receivedAt: "2026-03-10",
            },
        ],
    });
}

function onRemoveRow(row: Row): void {
    assertRef(tableRef);

    tableRef.value.withTabstopBehaviour("row-removal", () => {
        rows.value = removeRow(rows.value, row, "expandableRows");
    });
}

function onRemoveSelectedRows(): void {
    rows.value = rows.value.filter((row) => !selectedRows.value.includes(row));
}

function asRows(value: Row[]): Row[] {
    return value;
}
</script>

<template>
    <button type="button" class="button button--secondary" @click="onRemoveSelectedRows">
        Ta bort markerade rader
    </button>

    <f-sort-filter-dataset :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-paginate-dataset :items="sortFilterResult" :items-per-page>
                <template #default="{ items: currentPageItems }">
                    <f-table
                        ref="table"
                        v-model:selected-rows="selectedRows"
                        :rows="asRows(currentPageItems)"
                        :columns
                        key-attribute="id"
                        selectable="multi"
                        expandable-attribute="expandableRows"
                    >
                        <template #caption>Tabell med paginering</template>
                    </f-table>
                    <f-paginator />
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>

    <button type="button" class="button button--secondary" @click="onAddRow">Lägg till rad</button>
</template>
