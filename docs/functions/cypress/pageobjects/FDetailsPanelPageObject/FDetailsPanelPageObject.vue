<script setup lang="ts">
import { onMounted } from "vue";
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";

onMounted(() => {
    useDetailsPanel("awesome-panel").open("foo");
});
</script>

<template>
    <f-page-layout layout="three-column">
        <template #left>
            <!-- cut above -->
            <f-details-panel name="awesome-panel"></f-details-panel>
            <!-- cut below -->
        </template>
        <template #content> Innehåll </template>
    </f-page-layout>
</template>
