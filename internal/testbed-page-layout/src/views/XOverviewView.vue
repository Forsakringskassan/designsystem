<script setup lang="ts">
import { useDetailsPanel, FInteractiveTable, FTableColumn } from "@fkui/vue";
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

function showPerson(item: Person): void {
    personPanel.open(item);
}

function openThing(): void {
    expensePanel.open({ id: 1, description: "Hallonsoda", amount: 25 });
}
</script>

<template>
    <h1>Översikt</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <button type="button" class="button button--secondary" @click="openThing">Öppna en helt annan detaljpanel</button>

    <f-interactive-table
        :rows="ankeborgare"
        key-attribute="name"
        aria-labelledby="ankeborgare"
        @click="showPerson($event)"
    >
        <template #caption>Ankeborgare</template>
        <template #default="{ row }">
            <f-table-column name="name" title="Namn">
                {{ row.name }}
            </f-table-column>
            <f-table-column name="adress" title="Address">
                {{ row.adress }}
            </f-table-column>
        </template>
    </f-interactive-table>
</template>
