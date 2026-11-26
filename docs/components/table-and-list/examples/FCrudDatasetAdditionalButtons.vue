<script setup lang="ts">
import { FCrudDataset } from "@fkui/vue";

function onClick() {
    alert("My button clicked");
}
</script>

<template>
    <f-crud-dataset>
        <template #default></template>
        <template #add></template>
        <template #buttons="{ buttonClasses }">
            <button type="button" :class="buttonClasses" @click="onClick">My button</button>
        </template>
    </f-crud-dataset>
</template>
