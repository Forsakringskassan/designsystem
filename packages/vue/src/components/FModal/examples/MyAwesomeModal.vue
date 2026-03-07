<script setup lang="ts">
import { FButton, FModal } from "@fkui/vue";

const emit = defineEmits<{ close: [] }>();
</script>

<template>
    <f-modal is-open @close="emit('close')">
        <template #header> My awesome modal </template>
        <template #content> My awesome content </template>
        <template #footer>
            <div class="button-group">
                <f-button class="button-group__item" size="large" @click="emit('close')">
                    Close
                </f-button>
            </div>
        </template>
    </f-modal>
</template>
