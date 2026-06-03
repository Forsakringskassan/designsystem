<script setup lang="ts">
import { removeDatasetRows, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";

interface Row {
    frukt: string;
    land: string;
    pris: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "frukt",
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
        type: "anchor",
        header: "Länk",
        text() {
            return "Mer information";
        },
        href: "#",
    },
    {
        type: "button",
        header: "",
        icon: "trashcan",
        text() {
            return "Ta bort";
        },
        onClick: onRemoveRow,
    },
    {
        header: "",
        type: "menu",
        text(row) {
            return `Åtgärder för "${row.frukt}"`;
        },
        actions: [
            {
                label: "Visa",
                icon: "search",
                onClick(row) {
                    window.alert(`Visa detaljer för "${row.frukt}"`);
                },
            },
            {
                label: "Redigera",
                icon: "pen",
                onClick(row) {
                    window.alert(`Redigera "${row.frukt}"`);
                },
            },
        ],
    },
]);

const rows = useDatasetRef<Row>([
    { frukt: "Apelsin", land: "Spanien", pris: "30" },
    { frukt: "Banan", land: "Ecuador", pris: "15" },
    { frukt: "Äpple", land: "Sverige", pris: "22" },
]);

function onRemoveRow(row: Row): void {
    removeDatasetRows(rows, row);
}
</script>

<template>
    <f-table ref="table" :rows :columns striped></f-table>
</template>
