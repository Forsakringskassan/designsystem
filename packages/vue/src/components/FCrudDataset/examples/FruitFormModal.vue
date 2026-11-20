<script setup lang="ts">
import { ref } from "vue";
import { deepClone } from "@fkui/logic";
import { type FruitData } from "./fruit-data";
import { type FModalButtonDescriptor, FFormModal, FTextField, FTextareaField } from "@fkui/vue";

const props = defineProps<{
    isOpen: boolean;
    heading: string;
    confirmText: string;
    fruit: FruitData;
}>();

const emit = defineEmits<{
    close: [event: { reason: string; data?: FruitData }];
}>();

/* edit a copy so the original is left untouched if the user cancels */
const value = ref<FruitData>(deepClone(props.fruit));

const buttons: FModalButtonDescriptor[] = [
    { label: props.confirmText, event: "submit", type: "primary", submitButton: true },
    { label: "Avbryt", event: "dismiss", type: "secondary" },
];
</script>

<template>
    <f-form-modal
        :is-open
        :value
        :buttons
        :use-error-list="false"
        @close="(event) => emit('close', event)"
    >
        <template #header>{{ heading }}</template>
        <template #input-text-fields>
            <f-text-field
                v-model="value.name"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Namn
            </f-text-field>
            <f-text-field
                v-model="value.origin"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                type="text"
            >
                Land
            </f-text-field>
            <f-textarea-field v-model="value.description" v-validation.required>
                Beskrivning
            </f-textarea-field>
        </template>
    </f-form-modal>
</template>
