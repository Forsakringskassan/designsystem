<script setup lang="ts">
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    id: string;
    animal: string;
    name: string;
    description: string;
}

const rows = useDatasetRef<Row>([
    { id: "1", animal: "", name: "", description: "" },
    { id: "2", animal: "", name: "", description: "" },
]);

const columns = defineTableColumns<Row>([
    {
        type: "select",
        header: "Djur",
        key: "animal",
        options: ["Hund", "Katt"],
        label: () => "Djur",
        editable: true,
        update(row, value) {
            row.animal = value;
            row.name = "";
            row.description = "";
        },
    },
    {
        type: "select",
        header: "Namn",
        key: "name",
        label: () => "Namn",
        options(row) {
            return row.animal === "Hund" ? ["Pluto", "Långben"] : ["Pelle Svanslös", "Maja Gräddnos"];
        },
        editable(row) {
            return Boolean(row.animal);
        },
        update(row, value) {
            row.name = value;
            row.description = "";
        },
    },
    {
        type: "text",
        header: "Beskrivning",
        key: "description",
        label: () => "Beskrivning",
        editable(row) {
            return Boolean(row.animal && row.name);
        },
    },
]);
</script>

<template>
    <f-table :rows :columns>
        <template #caption>Editable beror på andra fält</template>
    </f-table>
    <button type="button">Utanför</button>
    <pre data-test="rows">{{ JSON.stringify(rows, null, 2) }}</pre>
</template>
