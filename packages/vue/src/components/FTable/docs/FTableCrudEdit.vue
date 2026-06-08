<script setup lang="ts">
import {
    type TableColumn,
    FCrudDataset,
    FCurrencyTextField,
    FSelectField,
    FTable,
    FTextField,
    defineTableColumns,
    useDatasetRef,
} from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    pris?: number;
}

const lander = [
    "",
    "Colombia",
    "Costa Rica",
    "Dominikanska republiken",
    "Ecuador",
    "Frankrike",
    "Italien",
    "Spanien",
    "Sverige",
    "Sydafrika",
];

function getColumns(
    updateItem: (item: Row) => void,
    deleteItem: (item: Row) => void,
): Array<TableColumn<Row>> {
    return defineTableColumns<Row>([
        {
            type: "text",
            header: "Frukt",
            key: "namn",
        },
        {
            type: "text",
            header: "Land",
            key: "land",
        },
        {
            type: "text:currency",
            header: "Pris per kilo",
            key: "pris",
        },
        {
            type: "menu",
            header: "Åtgärder",
            text(row) {
                return `Visa åtgärder för ${row.namn}`;
            },
            actions: [
                {
                    label: "Ändra",
                    icon: "pen",
                    onClick: updateItem,
                },
                {
                    label: "Ta bort",
                    icon: "trashcan",
                    onClick: deleteItem,
                },
            ],
        },
    ]);
}

const rows = useDatasetRef<Row>([
    {
        namn: "Apelsin",
        land: "Spanien",
        pris: 30,
    },
    {
        namn: "Banan",
        land: "Equador",
        pris: 15,
    },
    {
        namn: "Äpple",
        land: "Sverige",
        pris: 22,
    },
]);
</script>

<template>
    <f-crud-dataset v-model="rows">
        <template #default="{ updateItem, deleteItem }">
            <f-table ref="table" :rows :columns="getColumns(updateItem, deleteItem)" striped>
                <template #caption><span class="sr-only">Redigera innehåll-exempel</span></template>
            </f-table>
        </template>

        <template #modify="{ item }">
            <f-select-field v-model="item.land">
                <template #label>Land</template>
                <option disabled hidden value="">Välj..</option>
                <option v-for="land in lander" :key="land">{{ land }}</option>
            </f-select-field>
            <f-currency-text-field v-model="item.pris"> Pris </f-currency-text-field>
        </template>

        <template #delete="{ item }"> Vill du verkligen ta bort "{{ item.namn }}"? </template>
    </f-crud-dataset>
</template>
