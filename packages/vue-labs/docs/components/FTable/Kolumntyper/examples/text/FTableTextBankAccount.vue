<script setup lang="ts">
import { ref } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    bankAccountNumber: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text:bankAccountNumber",
        header: "Kontonummer",
        key: "bankAccountNumber",
        editable: true,
    },
]);

const rows = ref<Row[]>([
    {
        bankAccountNumber: "12345678",
    },
    {
        bankAccountNumber: "0012345678",
    },
    {
        bankAccountNumber: "123456",
    },
]);
</script>

<template>
    <f-table :columns :rows></f-table>
</template>
