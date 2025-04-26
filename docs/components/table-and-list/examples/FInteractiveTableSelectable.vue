<script setup lang="ts">
import { ref } from "vue";
import { FInteractiveTable, FTableColumn } from "@fkui/vue";

const selectedRows = ref([]);
const rows = [
    { name: "Kalle Anka", value: 42 },
    { name: "Kajsa Anka", value: 511 },
    { name: "Joakim von Anka", value: 4711 },
];
</script>

<template>
    <f-interactive-table v-model="selectedRows" :rows selectable>
        <template #caption> <span class="sr-only">Tabell</span> </template>
        <template #default="{ row }">
            <f-table-column v-format:text="row.name" title="Namn" type="text"></f-table-column>
            <f-table-column
                v-format:number="row.value"
                title="Värde"
                type="numeric"
                shrink
            ></f-table-column>
        </template>
        <template #checkbox-description="{ row }"> Välj "{{ row.name }}" </template>
    </f-interactive-table>
    <p>Valda rader:</p>
    <pre>{{ JSON.stringify(selectedRows, null, 2) }}</pre>
</template>
