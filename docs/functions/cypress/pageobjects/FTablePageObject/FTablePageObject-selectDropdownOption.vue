<script setup lang="ts">
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    id: string;
    option: string;
}

const options = ["Foo", "Bar", "Baz"];

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "ID",
        value(row) {
            return row.id;
        },
    },
    {
        type: "select",
        header: "Alternativ",
        key: "option",
        options,
        label(row) {
            return `Alternativ för rad ${row.id}`;
        },
    },
]);

const rows = useDatasetRef([
    {
        id: "1",
        option: "Foo",
    },
    {
        id: "2",
        option: "Bar",
    },
    {
        id: "3",
        option: "Baz",
    },
]);
</script>
<template>
    <!-- cut above -->
    <f-table v-test="'table'" :columns :rows></f-table>
    <!-- cut below -->
</template>
