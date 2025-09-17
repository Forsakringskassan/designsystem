<script setup lang="ts">
import { h, ref } from "vue";
import { FSortFilterDataset } from "@fkui/vue";
import { FTable } from "@fkui/vue-labs";
import { formatNumber } from "@fkui/logic";
import { defineTableColumns } from "../table-column";

const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];

interface Row {
    rubrik: string;
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
        type: "rowheader",
        header: "Radrubrik",
        key: "rubrik",
    },
    {
        type: "text",
        header: "Oformaterad text",
        value(row) {
            return row.antal;
        },
    },
    {
        type: "checkbox",
        header: "Kryssruta",
        key: "aktiv",
        editable: true,
    },
    {
        type: "text",
        header: "Formatterad text",
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
        rubrik: "Rubrik 1",
        expandableRows: [
            {
                id: "1a",
                level: "Sjukpenningsnivå",
                start: "2022-04-18",
                end: "2022-04-20",
                antal: "30000",
                rubrik: "Rubrik 1,1",
            },
            {
                id: "1b",
                level: "Lägstanivå",
                start: "2022-04-16",
                end: "2022-04-17",
                antal: "20000",
                rubrik: "Rubrik 1,2",
            },
            {
                id: "1c",
                level: "Sjukpenningsnivå",
                start: "2022-04-11",
                end: "2022-04-15",
                antal: "50000",
                rubrik: "Rubrik 1,3",
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
        rubrik: "Rubrik 2",
        expandableRows: [
            {
                id: "2a",
                level: "Heldag",
                start: "2022-05-02",
                end: "2022-05-04",
                antal: "30000",
                rubrik: "Rubrik 2,1",
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
        rubrik: "Rubrik 3",
        expandableRows: [
            {
                id: "3a",
                level: "Sjukpenningsnivå",
                start: "2022-05-23",
                end: "2022-05-27",
                antal: "40000",
                rubrik: "Rubrik 3,1",
            },
            {
                id: "3b",
                level: "Lägstanivå",
                start: "2022-05-21",
                end: "2022-05-22",
                antal: "20000",
                rubrik: "Rubrik 3,2",
            },
            {
                id: "3c",
                level: "Sjukpenningsnivå",
                start: "2022-05-16",
                end: "2022-05-20",
                antal: "50000",
                rubrik: "Rubrik 3,3",
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

const sortableAttributes = Object.fromEntries(
    columns.filter((it) => "key" in it && it.key).map((it) => [it.key, it.header]),
);

const mySelectedRows = ref<Row[]>([rows.value[0]]);

function onButtonClick(id: string): void {
    alert(`Du klickade på rad med id ${id}`);
}
</script>

<template>
    <f-sort-filter-dataset :data="rows" :sortable-attributes>
        <template #default="{ sortFilterResult }">
            <f-table
                v-model:selected-rows="mySelectedRows"
                :rows="sortFilterResult"
                :columns
                key-attribute="id"
                striped
                selectable="multi"
                expandable-attribute="expandableRows"
            >
                <template #footer>Footer</template>
            </f-table>
        </template>
    </f-sort-filter-dataset>
</template>
