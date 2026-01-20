<script setup lang="ts">
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    text1: string;
    text2: string;
    text3: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "ID",
        key: "id",
    },
    {
        type: "text",
        header: "Text 1",
        key: "text1",
    },
    {
        type: "text",
        header: "Text 2",
        key: "text2",
    },
    {
        type: "text",
        header: "Text 3",
        key: "text3",
    },
    {
        header: "Åtgärd",
        type: "menu",
        text(row) {
            return `Visa åtgärder för rad "${row.id}"`;
        },
        actions: [
            {
                label: "Visa",
                icon: "search",
                onClick(row) {
                    window.alert(`Visa detaljer för rad "${row.id}"`);
                },
            },
            {
                label: "Redigera",
                icon: "pen",
                onClick(row) {
                    window.alert(`Redigera rad "${row.id}"`);
                },
            },
            {
                label: "Ta bort",
                icon: "trashcan",
                onClick(row) {
                    window.alert(`Ta bort rad "${row.id}"`);
                },
            },
        ],
    },
]);

const rows = [
    {
        id: "1",
        text1: "Text 1",
        text2: "Text 2",
        text3: "Text 3",
    },
    {
        id: "2",
        text1: "Text 4",
        text2: "Text 5",
        text3: "Text 6",
    },
    {
        id: "3",
        text1: "Text 7",
        text2: "Text 8",
        text3: "Text 9",
    },
];
</script>

<template>
    <f-table ref="table" :rows :columns striped></f-table>
</template>

<style>
body {
    padding: 1rem;
}
</style>
