<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { FPaginateDataset, FPaginator, FSortFilterDataset } from "@fkui/vue";
import { type TableColumn, FTable, defineTableColumns, removeRow } from "@fkui/vue-labs";
import { type NestedCity, nestedCities } from "./cities";

const tableRef = useTemplateRef("table");

const columns = defineTableColumns<NestedCity>([
    {
        type: "text",
        header: "Namn",
        editable: true,
        key: "name",
        label: (row) => row.name,
        validation: {
            required: {},
            maxLength: { length: 10 },
        },
    },
    {
        type: "button",
        header: "Knapp",
        icon: "trashcan",
        size: "shrink",
        text(row) {
            return `Ta bort ${row.name}`;
        },
        onClick: (row) => {
            onRemoveRow(row);
        },
    },
]);

const rows = ref(nestedCities);

function hasKey<T, K extends keyof T>(
    column: TableColumn<T, K>,
): column is TableColumn<T, K> & { key: K } {
    return Boolean("key" in column && column.key);
}

const sortableAttributes = Object.fromEntries(
    columns.filter(hasKey).map((it) => [it.key, it.header]),
);

const mySelectedRows = ref<NestedCity[]>([]);

function onAddRow(): void {
    rows.value.push({
        name: "I'm new",
    });
}

function onRemoveRow(row: NestedCity): void {
    assertRef(tableRef);

    /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
    tableRef.value.withTabstopBehaviour("row-removal", () => {
        rows.value = removeRow(rows.value, row, "children");
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
            <f-paginate-dataset :items="sortFilterResult" :items-per-page="10">
                <template #default="{ items: currentPageItems }">
                    <f-table
                        ref="table"
                        v-model:selected-rows="mySelectedRows"
                        :rows="currentPageItems"
                        :columns
                        striped
                        selectable="multi"
                        expandable-attribute="children"
                    >
                        <template #caption>Tabell</template>
                        <template #footer>
                            <f-paginator navigator-label="Navigate" />
                        </template>
                    </f-table>
                </template>
            </f-paginate-dataset>
        </template>
    </f-sort-filter-dataset>

    <button type="button" class="button button--secondary" @click="onAddRow">Lägg till rad</button>
</template>
