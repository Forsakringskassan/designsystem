<script setup lang="ts">
import { FModal } from "@fkui/vue";

const emit = defineEmits<{ close: [] }>();
</script>

<template>
    <f-modal is-open @close="emit('close')">
        <template #header> My awesome modal </template>
        <template #content> My awesome content </template>
        <template #footer>
            <div class="button-group">
                <button
                    type="button"
                    class="button button--primary button-group__item button--large"
                    @click="emit('close')"
                >
                    Close
                </button>
            </div>
        </template>
    </f-modal>
</template>
