<script setup lang="ts">
import { FMinimizablePanel } from "@fkui/vue";

const sourceUrl = "https://github.com/Forsakringskassan/designsystem/blob/main/examples/page-layout/src/App.vue";
</script>

<template>
    <f-minimizable-panel>
        <template #default="{ isOpen, header, footer, content }">
            <template v-if="isOpen">
                <h1 :slot="header">Rubrik</h1>
                <p :slot="content">Innehåll</p>
                <div :slot="footer">
                    <a class="anchor" :href="sourceUrl" target="_blank">Visa källkod</a>
                </div>
            </template>
        </template>
    </f-minimizable-panel>
</template>
