<script setup lang="ts">
import { ref } from "vue";
import { FTextField } from "../..";
import { FTable, FTableCell, FTableEditCell } from "..";

const rows = ref([
    {
        id: 1,
        foo: "Kalle",
        bar: "2025-05-26",
        baz: [
            { id: 2, foo: "Blå", bar: "2024-12-31" },
            {
                id: 3,
                foo: "Orange",
                bar: "1999-05-06",
                baz: [{ id: 7, foo: "Next level", bar: "2025-06-26" }],
            },
        ],
    },
    {
        id: 4,
        foo: "Musse",
        bar: "2025-01-02",
        baz: [
            { id: 5, foo: "Grön", bar: "1980-08-08" },
            { id: 6, foo: "Gul", bar: "1912-12-12" },
        ],
    },
]);

const showFirst = ref(true);
const showLast = ref(true);

function onToggleRows(): void {
    rows.value.splice(0, 1);
}

function onButtonClick(value: string): void {
    alert(`Hello there ${value}`);
}
</script>

<template>
    <f-table :rows key-attribute="id" expandable-attribute="baz" striped>
        <template #default="{ row }">
            <f-table-cell v-if="showFirst" title="static">{{ row.foo }}</f-table-cell>
            <f-table-cell v-format:number="row.id" title="Id"></f-table-cell>
            <f-table-cell v-if="showLast" title="action">
                <button type="button" tabindex="-1" @click="() => onButtonClick(row.bar)">
                    {{ row.bar }}
                </button>
            </f-table-cell>
            <f-table-edit-cell title="input">
                <f-text-field v-model="row.foo" v-validation.required maxlength="40"></f-text-field>
            </f-table-edit-cell>
        </template>
    </f-table>

    <button type="button" @click="onToggleRows">Toggle some rows</button>
    <button type="button" @click="showFirst = !showFirst">Toggle first col</button>
    <button type="button" @click="showLast = !showLast">Toggle second col</button>

    <pre>
        {{ rows }}
    </pre>
</template>
