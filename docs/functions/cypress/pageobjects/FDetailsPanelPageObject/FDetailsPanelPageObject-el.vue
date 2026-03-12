<script setup lang="ts">
import { FButton, FDetailsPanel, FPageLayout, useDetailsPanel } from "@fkui/vue";

const panel = useDetailsPanel("awesome-panel");
</script>

<template>
    <f-page-layout layout="three-column">
        <template #default="{ left, content }">
            <!-- cut above -->
            <f-details-panel :slot="left" name="awesome-panel"></f-details-panel>
            <!-- cut below -->

            <div :slot="content">
                Innehåll
                <f-button @click="panel.open('foo')">Öppna</f-button>
            </div>
        </template>
    </f-page-layout>
</template>
