<script setup lang="ts">
import { FPageLayout, FDetailsPanel, useDetailsPanel, FResizePane } from "@fkui/vue";
import FGridExample from "./FGridExample.vue";

interface Item {
    name: string;
}

const name = "awesome-panel";
const panel = useDetailsPanel<Item>(name);
const ExamplePanel = FDetailsPanel<Item>;

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
                    <f-grid-example> </f-grid-example>
                </div>
            </template>
        </f-page-layout>
    </div>
</template>
