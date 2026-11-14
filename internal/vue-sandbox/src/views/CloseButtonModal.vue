<script setup lang="ts">
import { FFormModal, FModal } from "@fkui/vue";

const { type } = defineProps<{
    type: "" | "information" | "warning" | "error" | "form";
}>();

const emit = defineEmits<{ close: [] }>();
const heading = "Rubrik";
</script>

<template>
    <f-form-modal
        v-if="type === 'form'"
        size="small"
        @close="emit('close')"
        @cancel="emit('close')"
        @submit="emit('close')"
    >
        <template #header>{{ heading }}</template>
        Här finns formulärsmodalens innehåll.
    </f-form-modal>
    <f-modal v-else is-open :type size="small" @close="emit('close')">
        <template #header>{{ heading }}</template>
        <template #content>Här finns modalens innehåll.</template>
    </f-modal>
</template>
