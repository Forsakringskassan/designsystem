<script setup lang="ts">
import { useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "ID",
        value(row) {
            return row.id;
        },
    },
    {
        type: "text",
        header: "Namn",
        value(row) {
            return row.name;
        },
    },
]);

const rows = useDatasetRef([
    {
        id: "1",
        name: "Foo",
    },
    {
        id: "2",
        name: "Bar",
    },
    {
        id: "3",
        name: "Baz",
    },
]);
</script>
<template>
    <!-- cut above -->
    <f-table v-test="'table'" :columns :rows></f-table>
    <!-- cut below -->
</template>
