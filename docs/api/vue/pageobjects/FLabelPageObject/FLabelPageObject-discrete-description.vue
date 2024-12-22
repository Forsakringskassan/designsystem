<script setup lang="ts">
import { FLabel } from "@fkui/vue";
</script>

<!-- cut above -->
<template>
    <f-label v-test="'awesome-label'">
        <template #default> Etikett </template>

        <template #description="{ discreteDescriptionClass }">
            <span :class="discreteDescriptionClass"> Formatbeskrivning </span>
        </template>
    </f-label>
</template>
