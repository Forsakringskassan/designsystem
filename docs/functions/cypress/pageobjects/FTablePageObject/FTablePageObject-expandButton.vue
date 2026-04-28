<script setup lang="ts">
import { useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
    nested?: Row[];
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

const rows = useDatasetRef<Row>(
    [
        {
            id: "1",
            name: "Foo",
            nested: [
                {
                    id: "1-a",
                    name: "Expanded 1-1",
                },
                {
                    id: "1-b",
                    name: "Expanded 1-2",
                },
            ],
        },
        {
            id: "2",
            name: "Bar",
            nested: [
                {
                    id: "2-a",
                    name: "Expanded 2-1",
                },
                {
                    id: "2-b",
                    name: "Expanded 2-2",
                },
            ],
        },
        {
            id: "3",
            name: "Baz",
            nested: [
                {
                    id: "3-a",
                    name: "Expanded 3-1",
                },
                {
                    id: "3-b",
                    name: "Expanded -32",
                },
            ],
        },
    ],
    "nested",
);
</script>
<template>
    <!-- cut above -->
    <f-table v-test="'table'" :columns :rows></f-table>
    <!-- cut below -->
</template>
