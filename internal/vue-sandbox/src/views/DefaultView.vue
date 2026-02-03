<script setup lang="ts">
import { FLayoutApplicationTemplate } from "@fkui/vue";

const count = Array(250)
    .fill(0)
    .map((_, i) => i);
</script>

<template>
    <f-layout-application-template>
        <template #header>
            <div class="sandbox-header">En header</div>
        </template>
        <template #default>
            <div v-for="value in count" :key="value">{{ value }}</div>
        </template>
    </f-layout-application-template>
</template>

<style scoped lang="scss">
.sandbox-header {
    border: 1px solid black;
    padding: 45px;
}
</style>
