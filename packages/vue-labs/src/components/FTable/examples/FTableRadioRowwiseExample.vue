<script setup lang="ts">
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: number;
    name: string;
    optionA: boolean;
    optionB: boolean;
}

const rows: Row[] = [
    { id: 1, name: "Rad 1", optionA: true, optionB: false },
    { id: 2, name: "Rad 2", optionA: false, optionB: true },
    { id: 3, name: "Rad 3", optionA: false, optionB: true },
];

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Namn",
        key: "name",
    },
    {
        type: "radio",
        header: "Alternativ A",
        key: "optionA",
        name: (row) => `rowwise-${row.id}`,
        label: (row) => `Välj alternativ A för ${row.name}`,
    },
    {
        type: "radio",
        header: "Alternativ B",
        key: "optionB",
        name: (row) => `rowwise-${row.id}`,
        label: (row) => `Välj alternativ B för ${row.name}`,
    },
]);
</script>

<template>
    <f-table :rows :columns></f-table>
</template>
