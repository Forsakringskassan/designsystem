<script setup lang="ts">
import { FPageLayout, FMinimizablePanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #default="layoutScope">
            <!-- cut above -->
            <f-minimizable-panel :slot="layoutScope.left">
                <template #default="panelScope">
                    <div :slot="panelScope.content">Lorem ipsum</div>
                </template>
            </f-minimizable-panel>
            <!-- cut below -->
            <div :slot="layoutScope.content">Innehåll</div>
        </template>
    </f-page-layout>
</template>
