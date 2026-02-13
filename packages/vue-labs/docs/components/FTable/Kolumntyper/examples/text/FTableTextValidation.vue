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
        editable: true,
        validation: {
            minLength: { length: 2 },
            maxLength: { length: 3 },
        },
    },
]);

const rows = ref<Row[]>([
    {
        value: "A",
    },
    {
        value: "BBB",
    },
    {
        value: "CCCC",
    },
]);
</script>

<template>
    <f-table :columns :rows></f-table>
</template>
