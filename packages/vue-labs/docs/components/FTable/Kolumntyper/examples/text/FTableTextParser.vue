<script setup lang="ts">
import { ref } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    value1: string;
    value2: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Col",
        key: "value",
        parser(value: string): string {
            return value.toLowerCase();
        },
        editable: true,
    },
]);

const rows = ref<Row[]>([
    {
        value: "A",
    },
    {
        value: "C",
    },
    {
        value: "F",
    },
]);
</script>

<template>
    <f-table :columns :rows></f-table>
    <pre> rows: {{ rows }}</pre>
</template>
