<script setup lang="ts">
import { ref } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    option: string;
}

const selectFieldOptions = ["Foo", "Bar", "Baz"];

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
        options: selectFieldOptions,
        editable: true,
        label: (row) => `Alternativ för rad ${row.id}`,
    },
]);

const rows = ref<Row[]>([
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
<!-- cut above -->
<template>
    <f-table v-test="'table'" :columns :rows key-attribute="id"></f-table>
</template>
