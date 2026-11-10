<script setup lang="ts">
import { type FModalSize, FButton, FModal } from "@fkui/vue";

interface ConfigurableProps {
    type?: "" | "information" | "warning" | "error";
    size?: FModalSize;
}

const { type = "", size = "small" } = defineProps<ConfigurableProps>();
const emit = defineEmits<{ close: [] }>();
</script>

<template>
    <f-modal is-open :type :size @close="emit('close')">
        <template #header> My awesome modal </template>
        <template #content> My awesome content </template>
        <template #footer>
            <div class="button-group">
                <f-button
                    class="button-group__item"
                    size="large"
                    variant="primary"
                    @click="emit('close')"
                >
                    Close
                </f-button>
            </div>
        </template>
    </f-modal>
</template>
