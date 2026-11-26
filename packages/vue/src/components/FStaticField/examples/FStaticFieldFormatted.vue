<script setup lang="ts">
import { FStaticField } from "@fkui/vue";

const date = "20200101";
</script>
<template>
    <f-static-field>
        <template #label> Formaterat datum </template>
        <span v-format:date-full="date"></span>
    </f-static-field>
</template>
