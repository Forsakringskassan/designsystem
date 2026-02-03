<script setup lang="ts">
import { h, ref, useTemplateRef } from "vue";
import { assertRef, formatNumber } from "@fkui/logic";
import { FSortFilterDataset } from "@fkui/vue";
import { type TableColumn, FTable, defineTableColumns, removeRow } from "@fkui/vue-labs";

const tableRef = useTemplateRef("table");

const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];

interface Row {
    id: string;
    animal?: string;
    level: string;
    start: string;
    end: string;
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
        type: "checkbox",
        header: "Kryssruta",
        key: "aktiv",
        size: "shrink",
        label: (row) => `Välj rad ${row.id}`,
        editable: true,
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
    {
        header: "Länk",
        type: "anchor",
        href: "#",
        text() {
            return "Länktext";
        },
    },
    {
        header: "Dropplista",
        type: "select",
        key: "animal",
        label: (row) => `Djur för rad ${row.id}`,
        options: selectFieldOptions,
        editable: true,
    },
    {
        header: "Render function",
        render() {
            return h("td", { id: "foo", class: "bar" }, ["👻"]);
        },
    },
    // {
    //     header: "Custom component",
    //     type: "render",
    //     render() {
    //         return XTableChip;
    //     },
    // },
]);

const rows = ref<Row[]>([
    {
        id: "1",
        animal: "Katt",
        level: "Föräldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: "10000",
        aktiv: false,
        expandableRows: [
            {
                id: "1a",
                level: "Sjukpenningsnivå",
                start: "2022-04-18",
                end: "2022-04-20",
                antal: "30000",
            },
            {
                id: "1b",
                level: "Lägstanivå",
                start: "2022-04-16",
                end: "2022-04-17",
                antal: "20000",
            },
            {
                id: "1c",
                level: "Sjukpenningsnivå",
                start: "2022-04-11",
                end: "2022-04-15",
                antal: "50000",
            },
        ],
        expandableContent: [
            {
                id: "1a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "2",
        animal: "Spindel",
        level: "Tillfällig föräldrapenning",
        start: "2022-05-02",
        end: "2022-05-04",
        antal: "30000",
        aktiv: false,
        expandableRows: [
            {
                id: "2a",
                level: "Heldag",
                start: "2022-05-02",
                end: "2022-05-04",
                antal: "30000",
            },
        ],
        expandableContent: [
            {
                id: "2a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "3",
        animal: "Hamster",
        level: "Föräldrapenning",
        start: "2022-05-16",
        end: "2022-05-27",
        antal: "11000",
        aktiv: true,
        expandableRows: [
            {
                id: "3a",
                level: "Sjukpenningsnivå",
                start: "2022-05-23",
                end: "2022-05-27",
                antal: "40000",
            },
            {
                id: "3b",
                level: "Lägstanivå",
                start: "2022-05-21",
                end: "2022-05-22",
                antal: "20000",
            },
            {
                id: "3c",
                level: "Sjukpenningsnivå",
                start: "2022-05-16",
                end: "2022-05-20",
                antal: "50000",
            },
        ],
        expandableContent: [
            {
                id: "3a",
                content: "Anledning: Tar hand om barnet",
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
    columns.filter(hasKey).map((it) => [it.key, it.header]),
);

const mySelectedRows = ref<Row[]>([rows.value[0]]);

function onAddRow(): void {
    rows.value.push({
        id: String(rows.value.length + 1),
        animal: "Katt",
        level: "Föräldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
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

<style>
body {
    padding: 1rem;
}

.icon-button {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
    cursor: pointer;
}

.level-2 {
    margin-left: 0.5rem;
}

.level-3 {
    padding-left: 1rem;
}

.bar {
    background: hotpink;
}
</style>
