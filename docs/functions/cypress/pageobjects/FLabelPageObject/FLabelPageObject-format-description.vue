<script setup lang="ts">
import { FLabel } from "@fkui/vue";
</script>

<!-- cut above -->
<template>
    <f-label v-test="'awesome-label'">
        <template #default> Etikett </template>

        <template #description="{ formatDescriptionClass }">
            <span :class="formatDescriptionClass"> Formatbeskrivning </span>
        </template>
    </f-label>
</template>
