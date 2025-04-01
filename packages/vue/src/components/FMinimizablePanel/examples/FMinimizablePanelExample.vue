<script setup lang="ts">
import { FPageLayout, FMinimizablePanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #left>
            <f-minimizable-panel>
                <template #header> Minimerbar panel </template>
                <template #default="{ isOpen }">
                    <template v-if="isOpen">
                        <p>Innehåll</p>
                    </template>
                </template>
            </f-minimizable-panel>
        </template>
        <template #content>[Applikationsyta]</template>
    </f-page-layout>
</template>
