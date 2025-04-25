<script setup lang="ts">
import { onMounted } from "vue";
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";

onMounted(() => {
    useDetailsPanel("awesome-panel").open("foo");
});
</script>

<template>
    <f-page-layout layout="three-column">
        <template #default="{ left, content }">
            <!-- cut above -->
            <f-details-panel :slot="left" name="awesome-panel">
                <template #default="{ footer }">
                    <div :slot="footer">Lorem ipsum</div>
                </template>
            </f-details-panel>
            <!-- cut below -->
            <div :slot="content">Innehåll</div>
        </template>
    </f-page-layout>
</template>
