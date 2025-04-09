<script setup lang="ts">
import { FPageLayout, FResizePane, FMinimizablePanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #left>
            <f-resize-pane min="150px" max="40%" initial="600px">
                <!-- eslint-disable vue/no-deprecated-slot-attribute -- native-slot -->
                <!-- [html-validate-disable vue/prefer-slot-shorthand -- native slot] -->
                <f-minimizable-panel>
                    <template #default="{ isOpen, header, footer, content }">
                        <template v-if="isOpen">
                            <h1 :slot="header">Min rubrik</h1>
                            <p :slot="content">Innehåll</p>
                            <div :slot="footer">Min fot</div>
                        </template>
                    </template>
                </f-minimizable-panel>
            </f-resize-pane>
        </template>
        <template #content>[Applikationsyta]</template>
    </f-page-layout>
</template>
