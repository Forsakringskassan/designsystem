<script setup lang="ts">
import { FCrudDataset } from "@fkui/vue";

function onAdd(): void {
    alert("Add clicked");
}

function onClick(): void {
    alert("My button clicked");
}
</script>

<template>
    <f-crud-dataset :on-add>
        <template #default></template>
        <template #buttons="{ buttonClasses }">
            <button type="button" :class="buttonClasses" @click="onClick">My button</button>
        </template>
    </f-crud-dataset>
</template>
