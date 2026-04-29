<script setup lang="ts">
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

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
    <f-table v-test="'table'" :columns :rows>
        <template #footer> My awesome footer </template>
    </f-table>
    <!-- cut below -->
</template>
