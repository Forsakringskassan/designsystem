<script setup lang="ts">
import { FPageLayout, FMinimizablePanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #left>
            <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
            <!-- cut above -->
            <f-minimizable-panel>
                <template #default="{ header }">
                    <div :slot="header">Lorem ipsum</div>
                </template>
            </f-minimizable-panel>
            <!-- cut below -->
        </template>
        <template #content> Innehåll </template>
    </f-page-layout>
</template>
