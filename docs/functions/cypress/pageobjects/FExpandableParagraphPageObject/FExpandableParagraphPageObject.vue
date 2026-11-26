<script setup lang="ts">
import { FExpandableParagraph } from "@fkui/vue";
</script>

<template>
    <f-expandable-paragraph :expanded="true">
        <template #title> Titel </template>
        <template #related> 2026-01-01 </template>
        <template #default>
            <span>Innehåll</span>
        </template>
    </f-expandable-paragraph>
</template>
