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
        header: "Kolumnrubrik 1",
        key: "value1",
    },
    {
        type: "text",
        header: "Kolumnrubrik 2",
        key: "value2",
        editable: true,
    },
]);

const rows = ref<Row[]>([
    {
        value1: "Text 1",
        value2: "Text 2",
    },
    {
        value1: "Text 3",
        value2: "Text 4",
    },
    {
        value1: "Text 5",
        value2: "Text 6",
    },
]);
</script>

<template>
    <f-table :columns :rows></f-table>
</template>
