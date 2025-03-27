<script setup lang="ts">
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";

const panel = useDetailsPanel("awesome-panel");
</script>

<template>
    <f-page-layout layout="three-column">
        <template #left>
            <!-- cut above -->
            <f-details-panel name="awesome-panel"></f-details-panel>
            <!-- cut below -->
        </template>
        <template #content>
            Innehåll
            <button type="button" @click="panel.open('foo')">Öppna</button>
        </template>
    </f-page-layout>
</template>
