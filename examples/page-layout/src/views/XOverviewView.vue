<script setup lang="ts">
import { FButton, FTable, defineTableColumns, useDatasetRef, useDetailsPanel } from "@fkui/vue";
import { type Expense } from "../expense";
import { type Person } from "../person";

const personPanel = useDetailsPanel<Person>("person-panel");
const expensePanel = useDetailsPanel<Expense>("expense-panel");

const ankeborgare: Person[] = [
    { name: "Kalle Anka", adress: "Paradisäppelvägen 111", city: "Ankeborg", car: "Skruttomobil" },
    { name: "Kajsa Anka", adress: null, city: "Ankeborg", car: null },
    { name: "Magica De Hex", adress: "Vulkanen", city: "Vesuvius", car: null },
    { name: "Bolivar", adress: "Paradisäppelvägen 111", city: "Ankeborg", car: null },
];
const rows = useDatasetRef(ankeborgare);

function showPerson(item: Person): void {
    personPanel.open(item);
}

function openThing(): void {
    expensePanel.open({ id: 1, description: "Hallonsoda", amount: 25 });
}

const columns = defineTableColumns<Person>([
    {
        type: "button",
        header: "Namn",
        key: "name",
        text: (row) => row.name,
        onClick: showPerson,
    },
    { type: "text", header: "Adress", key: "adress" },
]);
</script>

<template>
    <h1>Översikt</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <f-button size="medium" variant="secondary" @click="openThing">
        Öppna en helt annan detaljpanel
    </f-button>

    <f-table :rows :columns aria-labelledby="ankeborgare">
        <template #caption>Ankeborgare</template>
    </f-table>
</template>
