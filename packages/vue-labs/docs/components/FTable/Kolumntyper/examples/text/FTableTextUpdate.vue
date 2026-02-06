<script setup lang="ts">
import { ref } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    value: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Col",
        key: "value",
        update(row: T, newValue: string, oldValue: string): void {
            if (newValue.startsWith("a")) {
                row.value = newValue;
                return;
            }
            row.value = oldValue;
        },
        editable: true,
    },
]);

const rows = ref<Row[]>([
    {
        value: "apelsin",
    },
    {
        value: "annanas",
    },
    {
        value: "avokado",
    },
]);
</script>

<template>
    <f-table :columns :rows></f-table>
    <pre> rows: {{ rows }}</pre>
</template>
