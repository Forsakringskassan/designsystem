<script setup lang="ts">
import { ref } from "vue";
import {
    FTable,
    FTableCell,
    FTableEditCell,
    useDetailsPanel,
    FIcon,
    FTextField,
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
    },
    {
        id: 4,
        foo: "Musse",
        bar: "2025-01-02",
    },
]);

const expandableRows = ref([
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
                baz: [{ id: 7, foo: "Röd", bar: "2025-06-26" }],
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
                    <f-table :rows key-attribute="id">
                        <template #default="{ row }">
                            <f-table-edit-cell title="input">
                                <f-text-field
                                    v-model="row.foo"
                                    v-validation.required
                                    maxlength="40"
                                ></f-text-field>
                            </f-table-edit-cell>
                            <f-table-cell title="action">
                                <button
                                    aria-label="open panel"
                                    type="button"
                                    class="shortcut"
                                    tabindex="-1"
                                    @click="openPanel"
                                >
                                    <f-icon class="button__icon" name="pen"></f-icon>
                                </button>
                            </f-table-cell>
                        </template>
                    </f-table>
                    <h2>Expanderbar tabell</h2>
                    <f-table :rows="expandableRows" key-attribute="id" expandable-attribute="baz">
                        <template #default="{ row }">
                            <f-table-cell title="static">{{ row.foo }}</f-table-cell>
                            <f-table-cell title="action">
                                <button type="button" tabindex="-1" @click="openPanel">
                                    {{ row.bar }}
                                </button>
                            </f-table-cell>
                            <f-table-edit-cell title="input">
                                <f-text-field
                                    v-model="row.foo"
                                    v-validation.required
                                    maxlength="40"
                                ></f-text-field>
                            </f-table-edit-cell>
                        </template>
                    </f-table>
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
