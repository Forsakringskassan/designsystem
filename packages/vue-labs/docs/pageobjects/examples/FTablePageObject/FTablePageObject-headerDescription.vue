<script setup lang="ts">
import { ref } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    name: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "ID",
        description: "Description 1",
        value(row) {
            return row.id;
        },
    },
    {
        type: "text",
        header: "Namn",
        description: "Description 2",
        value(row) {
            return row.name;
        },
    },
]);

const rows = ref<Row[]>([
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
<!-- cut above -->
<template>
    <f-table v-test="'table'" :columns :rows></f-table>
</template>
