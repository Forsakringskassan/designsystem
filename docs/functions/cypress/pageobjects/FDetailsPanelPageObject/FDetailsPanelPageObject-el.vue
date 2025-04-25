<script setup lang="ts">
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";

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
                <button type="button" @click="panel.open('foo')">Öppna</button>
            </div>
        </template>
    </f-page-layout>
</template>
