<script setup lang="ts">
import { FPageLayout, FMinimizablePanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #default="{ left, content }">
            <!-- cut above -->
            <f-minimizable-panel :slot="left">
                <template #default="{ header }">
                    <div :slot="header">Lorem ipsum</div>
                </template>
            </f-minimizable-panel>
            <!-- cut below -->
            <div :slot="content">Innehåll</div>
        </template>
    </f-page-layout>
</template>
