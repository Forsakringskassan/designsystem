<script setup lang="ts">
import { FPageLayout, FResizePane, registerLayout, FPageHeader, FLogo } from "@fkui/vue";
import { XContextBar, XToolbar, XLeftPanel, XPersonPanel, XExpensePanel } from "./components";

declare module "@fkui/vue" {
    interface FPageLayoutSlotMapping {
        "awesome-layout": ["header", "left", "contextbar", "toolbar", "content", "right", "footer"];
    }
}

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
        <template #default="{ header, contextbar, toolbar, content, left, right }">
            <header :slot="header">
                <f-page-header>
                    Application layout components
                    <template #logo>
                        <f-logo size="small">Logo</f-logo>
                    </template>
                    <template #right> Namn Namnsson </template>
                </f-page-header>
            </header>

            <x-context-bar :slot="contextbar"></x-context-bar>

            <x-toolbar :slot="toolbar"></x-toolbar>

            <f-resize-pane :slot="left" min="200px 10%" max="40%" initial="600px">
                <x-left-panel></x-left-panel>
            </f-resize-pane>

            <main :slot="content">
                <router-view />
            </main>

            <f-resize-pane :slot="right" min="200px 10%" max="40%" initial="200px">
                <x-person-panel name="person-panel" exclusive="right"> </x-person-panel>
                <x-expense-panel name="expense-panel" exclusive="right"></x-expense-panel>
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
