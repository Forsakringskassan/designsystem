<script setup lang="ts">
import { ref } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    value1: string;
    value2: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Col 1",
        key: "value1",
    },
    {
        type: "text",
        header: "Col 2",
        key: "value2",
    },
    {
        type: "text",
        header: "Col 3",
        value(row: Row): string {
            return `${row.value1}:${row.value2}`;
        },
        formatter(value: string): string {
            return value.toLowerCase();
        },
    },
]);

const rows = ref<Row[]>([
    {
        value1: "A",
        value2: "B",
    },
    {
        value1: "C",
        value2: "D",
    },
    {
        value1: "E",
        value2: "F",
    },
]);
</script>

<template>
    <f-table :columns :rows></f-table>
</template>
