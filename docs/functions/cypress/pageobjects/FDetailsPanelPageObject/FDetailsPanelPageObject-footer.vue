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
            <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
            <!-- cut above -->
            <f-details-panel name="awesome-panel">
                <template #default="{ footer }">
                    <div :slot="footer">Lorem ipsum</div>
                </template>
            </f-details-panel>
            <!-- cut below -->
        </template>
        <template #content> Innehåll </template>
    </f-page-layout>
</template>
