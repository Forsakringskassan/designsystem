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

const selectedRows = ref<Row[]>([]);
</script>
<!-- cut above -->
<template>
    <f-table
        v-model:selected-rows="selectedRows"
        v-test="'table'"
        :columns
        :rows
        selectable="multi"
        key-attribute="id"
    ></f-table>
</template>
