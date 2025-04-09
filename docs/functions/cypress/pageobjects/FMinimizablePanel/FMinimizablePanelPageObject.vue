<script setup lang="ts">
import { FPageLayout, FMinimizablePanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #left>
            <!-- cut above -->
            <f-minimizable-panel></f-minimizable-panel>
            <!-- cut below -->
        </template>
        <template #content> Innehåll </template>
    </f-page-layout>
</template>
