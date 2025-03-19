<script setup lang="ts">
import {
    FPageLayout,
    FDetailsPanel,
    FResizePane,
    useDetailsPanel,
    FInteractiveTable,
    FTableColumn,
} from "../components";

interface Item {
    name: string;
    adress: string | null;
    city: string;
    car: string | null;
}

interface Expense {
    id: number;
    description: string;
    amount: number;
}

const AwesomePanel = FDetailsPanel<Item>;
const AnotherPanel = FDetailsPanel<Expense>;

const awesomePanelApi = useDetailsPanel<Item>("awesome-panel");
const anotherPanelApi = useDetailsPanel<Expense>("another-panel");

const ankeborgare: Item[] = [
    { name: "Kalle Anka", adress: "Paradisäppelvägen 111", city: "Ankeborg", car: "Skruttomobil" },
    { name: "Kajsa Anka", adress: null, city: "Ankeborg", car: null },
    { name: "Magica De Hex", adress: "Vulkanen", city: "Vesivius", car: null },
    { name: "Bolivar", adress: "Paradisäppelvägen 111", city: "Ankeborg", car: null },
];

function showPerson(item: Item): void {
    awesomePanelApi.open(item);
}

function openThing(): void {
    anotherPanelApi.open({ id: 1, description: "Hallonsoda", amount: 25 });
}
</script>

<template>
    <f-page-layout layout="three-column">
        <template #right>
            <f-resize-pane min="20%" max="50%" initial="40%">
                <awesome-panel name="awesome-panel" exclusive="right">
                    <template #default="{ item }">
                        <h2>Detaljer om person</h2>
                        <dl>
                            <dt>Namn</dt>
                            <dd>{{ item.name }}</dd>
                            <dt>Address</dt>
                            <dd>{{ item.adress ?? "-" }}</dd>
                            <dt>Stad</dt>
                            <dd>{{ item.city ?? "-" }}</dd>
                            <dt>Bil</dt>
                            <dd>{{ item.car ?? "-" }}</dd>
                        </dl>
                    </template>
                </awesome-panel>
                <another-panel name="another-panel" exclusive="right">
                    <template #default="{ item }">
                        <h2>Detaljer om utgift</h2>
                        <dl>
                            <dt>ID</dt>
                            <dd>{{ item.id }}</dd>
                            <dt>Beskrivning</dt>
                            <dd>{{ item.description }}</dd>
                            <dt>Belopp</dt>
                            <dd>{{ item.amount }} kr</dd>
                        </dl>
                    </template>
                </another-panel>
            </f-resize-pane>
        </template>

        <template #content>
            <main>
                <h1>Lorem ipsum</h1>
                <p>Dolor sit amet.</p>
                <button type="button" @click="openThing">Öppna 2</button>

                <h2 id="ankeborgare">Ankeborgare</h2>
                <f-interactive-table
                    :rows="ankeborgare"
                    key-attribute="name"
                    @click="showPerson($event)"
                    aria-labelledby="ankeborgare"
                >
                    <template #default="{ row }">
                        <f-table-column name="name" title="Namn">
                            {{ row.name }}
                        </f-table-column>
                        <f-table-column name="adress" title="Address">
                            {{ row.adress }}
                        </f-table-column>
                    </template>
                </f-interactive-table>
            </main>
        </template>
    </f-page-layout>
</template>

<style>
body {
    background: #eee;
    margin: 0;
    padding: 0;
}

main {
    padding: 1rem;
}

.container {
    background: #fff;
}

.resize {
    background: rgb(144, 255, 255);
}

kbd {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.25rem;
    background: #fff;
}
</style>
