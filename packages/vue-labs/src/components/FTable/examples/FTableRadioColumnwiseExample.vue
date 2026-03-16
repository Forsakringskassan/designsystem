<script setup lang="ts">
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: number;
    name: string;
    selected: boolean;
}

const rows: Row[] = [
    { id: 1, name: "Rad 1", selected: false },
    { id: 2, name: "Rad 2", selected: true },
    { id: 3, name: "Rad 3", selected: false },
];

const columns = defineTableColumns<Row>([
    {
        type: "radio",
        header: "Val",
        key: "selected",
        name: "columnwise-selection",
        label: (row) => `Välj ${row.name}`,
    },
    {
        type: "text",
        header: "Namn",
        key: "name",
    },
]);
</script>

<template>
    <f-table :rows :columns></f-table>
</template>
