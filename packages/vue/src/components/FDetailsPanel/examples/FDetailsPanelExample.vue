<script setup lang="ts">
import { FPageLayout, FDetailsPanel, useDetailsPanel, FResizePane } from "@fkui/vue";

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
            <template #right>
                <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
                <f-resize-pane min="200px" max="50%">
                    <example-panel :name>
                        <template #default="{ item, header, content }">
                            <h2 :slot="header">Detaljpanel</h2>
                            <p :slot="content">{{ item.name }}</p>
                        </template>
                    </example-panel>
                </f-resize-pane>
            </template>
            <template #content>
                <div>
                    <button type="button" class="button button--primary" @click="openPanel">
                        Öppna
                    </button>
                </div>
            </template>
        </f-page-layout>
    </div>
</template>

<style scoped>
.layout-container {
    container-type: size;
    height: 200px;
}
</style>
