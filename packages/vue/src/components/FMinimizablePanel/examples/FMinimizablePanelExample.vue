<script setup lang="ts">
import { FPageLayout, FResizePane, FMinimizablePanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #default="layoutScope">
            <f-resize-pane :slot="layoutScope.left" min="150px" max="40%" initial="600px">
                <f-minimizable-panel>
                    <template #default="panelScope">
                        <template v-if="panelScope.isOpen">
                            <h1 :slot="panelScope.header">Rubrik</h1>
                            <p :slot="panelScope.content">Innehåll</p>
                            <div :slot="panelScope.footer">Fot</div>
                        </template>
                    </template>
                </f-minimizable-panel>
            </f-resize-pane>
            <div :slot="layoutScope.content">[Applikationsyta]</div>
        </template>
    </f-page-layout>
</template>

<style>
[data-test="minimizable-panel-example"] [data-v-app] {
    container-type: size;
    height: 230px;
}
</style>
