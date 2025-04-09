<script setup lang="ts">
import {
    FPageLayout,
    FResizePane,
    registerLayout,
    FPageHeader,
    FLogo,
    FMinimizablePanel,
    FDetailsPanel,
} from "@fkui/vue";
import { XContextBar, XToolbar } from "./components";
import { type Expense } from "./expense";
import { type Person } from "./person";

const XPersonPanel = FDetailsPanel<Person>;
const XExpensePanel = FDetailsPanel<Expense>;

registerLayout({
    name: "awesome-layout",
    areas: {
        header: {
            attachPanel: "none",
            direction: "column",
        },
        left: {
            attachPanel: "left",
            direction: "column",
        },
        contextbar: {
            attachPanel: "none",
            direction: "row",
        },
        toolbar: {
            attachPanel: "none",
            direction: "row",
        },
        content: {
            attachPanel: "none",
            direction: "column",
            scroll: true,
        },
        right: {
            attachPanel: "right",
            direction: "column",
        },
        footer: {
            attachPanel: "none",
            direction: "column",
        },
    },
});
</script>

<template>
    <f-page-layout layout="awesome-layout">
        <template #header>
            <header>
                <f-page-header>
                    Layout components testbed
                    <template #logo>
                        <f-logo size="small">Logo</f-logo>
                    </template>
                    <template #right> Namn Namnsson </template>
                </f-page-header>
            </header>
        </template>
        <template #contextbar> <x-context-bar></x-context-bar> </template>
        <template #toolbar>
            <x-toolbar></x-toolbar>
        </template>
        <template #left>
            <f-resize-pane min="150px" max="40%" initial="600px">
                <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
                <!-- [html-validate-disable vue/prefer-slot-shorthand -- native slot] -->
                <f-minimizable-panel>
                    <template #default="{ isOpen, header, footer, content }">
                        <template v-if="isOpen">
                            <h1 :slot="header">Rubrik</h1>
                            <p :slot="content">Innehåll</p>
                            <div :slot="footer">Fot</div>
                        </template>
                    </template>
                </f-minimizable-panel>
            </f-resize-pane>
        </template>
        <template #content>
            <main>
                <router-view />
            </main>
        </template>
        <template #right>
            <f-resize-pane min="250px" max="40%" initial="200px">
                <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
                <x-person-panel name="person-panel" exclusive="right" heading-tag="h2">
                    <template #default="{ item, header, content }">
                        <h2 :slot="header">Detaljer om person</h2>
                        <div :slot="content">
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
                        </div>
                    </template>
                </x-person-panel>
                <x-expense-panel name="expense-panel" exclusive="right" heading-tag="h2">
                    <template #default="{ item, content }">
                        <div :slot="content">
                            <dl>
                                <dt>ID</dt>
                                <dd>{{ item.id }}</dd>
                                <dt>Beskrivning</dt>
                                <dd>{{ item.description }}</dd>
                                <dt>Belopp</dt>
                                <dd>{{ item.amount }} kr</dd>
                            </dl>
                        </div>
                    </template>
                </x-expense-panel>
            </f-resize-pane>
        </template>
    </f-page-layout>
</template>

<style scoped>
::part(grid awesome-layout) {
    grid-template:
        "header header header" min-content
        "left contextbar contextbar" min-content
        "left toolbar toolbar" min-content
        "left content right" 1fr
        / min-content 1fr;
}

::part(area header) {
    --f-page-layout-background: var(--f-background-pageheader-primary);
    --f-page-layout-color: var(--fkds-color-text-inverted);
}

::part(area contextbar) {
    --f-page-layout-background: var(--fkds-color-background-secondary);
    --f-page-layout-color: var(--fkds-color-text-primary);
}

::part(area toolbar) {
    --f-page-layout-background: var(--fkds-color-background-secondary);
    --f-page-layout-color: var(--fkds-color-text-primary);
}

::part(area left) {
    --f-page-layout-background: var(--fkds-color-background-secondary);
    --f-page-layout-color: var(--fkds-color-text-primary);
}

::part(area right) {
    --f-page-layout-background: var(--fkds-color-background-secondary);
    --f-page-layout-color: var(--fkds-color-text-primary);
}
</style>
