<script setup lang="ts">
import { onMounted } from "vue";
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";

onMounted(() => {
    useDetailsPanel("awesome-panel").open("foo");
});
</script>

<template>
    <f-page-layout layout="three-column">
        <template #default="layoutScope">
            <!-- cut above -->
            <f-details-panel :slot="layoutScope.left" name="awesome-panel">
                <template #default="panelScope">
                    <div :slot="panelScope.content">Lorem ipsum</div>
                </template>
            </f-details-panel>
            <!-- cut below -->
            <div :slot="layoutScope.content">Innehåll</div>
        </template>
    </f-page-layout>
</template>
