<script setup lang="ts">
import { ref } from "vue";
import {
    FGrid,
    FGridCell,
    FGridTextField,
    useDetailsPanel,
    FIcon,
    FPageLayout,
    FDetailsPanel,
    FResizePane,
} from "@fkui/vue";

interface Item {
    name: string;
}

const name = "awesome-panel";
const ExamplePanel = FDetailsPanel<Item>;

const rows = ref([
    {
        id: 1,
        foo: "Kalle",
        bar: "2025-05-26",
        baz: [
            { id: 2, foo: "Gul", bar: "2024-12-31" },
            { id: 3, foo: "Grönt", bar: "1999-05-06" },
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

const expandableRows = ref([
    {
        id: 1,
        foo: "Kalle",
        bar: "Anka",
        baz: [
            { id: 2, foo: "Gul", bar: "Banan" },
            { id: 3, foo: "Grönt", bar: "Äpple" },
        ],
    },
    {
        id: 4,
        foo: "Musse",
        bar: "Pigg",
        baz: [
            { id: 5, foo: "Grön", bar: "Melon" },
            { id: 6, foo: "Gul", bar: "Citron" },
        ],
    },
]);

const panel = useDetailsPanel(name);

function openPanel(): void {
    panel.open({
        name: "Kalle Anka",
    });
}
</script>

<template>
    <div class="layout-container">
        <f-page-layout layout="three-column">
            <template #default="layoutScope">
                <f-resize-pane :slot="layoutScope.right" min="200px" max="50%">
                    <example-panel :name>
                        <template #default="panelScope">
                            <h2 :slot="panelScope.header">Detaljpanel</h2>
                            <p :slot="panelScope.content">{{ panelScope.item.name }}</p>
                        </template>
                    </example-panel>
                </f-resize-pane>

                <div :slot="layoutScope.content">
                    <h2>Tabell</h2>
                    <f-grid :rows>
                        <template #default="{ row }">
                            <f-grid-cell :focusable="false" class="checkbox">
                                <template #default="{ active }">
                                    <input
                                        v-focus="active"
                                        type="checkbox"
                                        aria-label="shortcut"
                                        class="checkbox__input"
                                    />
                                    <label class="checkbox__label">{{ row.foo }}</label>
                                </template>
                            </f-grid-cell>
                            <f-grid-cell>
                                {{ row.id }}
                            </f-grid-cell>
                            <f-grid-text-field v-model="row.foo"></f-grid-text-field>
                            <f-grid-text-field v-model="row.bar" type="date"></f-grid-text-field>
                            <f-grid-cell :focusable="false">
                                <template #default="{ active }">
                                    <button
                                        v-focus="active"
                                        aria-label="shortcut"
                                        type="button"
                                        class="shortcut"
                                        @click="openPanel()"
                                    >
                                        <f-icon class="button__icon" name="pen"></f-icon>
                                    </button>
                                </template>
                            </f-grid-cell>
                        </template>
                    </f-grid>
                    <h2>Expanderbar tabell</h2>
                    <f-grid :rows="expandableRows" expandable-attribute="baz">
                        <template #default="{ row }">
                            <f-grid-cell>
                                {{ row.id }}
                            </f-grid-cell>
                            <f-grid-text-field v-model="row.foo"></f-grid-text-field>
                            <f-grid-cell>
                                {{ row.bar }}
                            </f-grid-cell>
                        </template>
                    </f-grid>
                </div>
            </template>
        </f-page-layout>
    </div>
</template>

<style>
.layout-container {
    padding: 1rem;
}

.shortcut {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
}
</style>
