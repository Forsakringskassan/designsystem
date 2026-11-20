<script setup lang="ts">
import { ref } from "vue";
import { FFormModal, FTextField } from "@fkui/vue";

interface Row {
    id: string;
    name: string;
    description: string;
}

const props = defineProps<{ isOpen: boolean; row: Row }>();
const emit = defineEmits<{ close: [event: { reason: string; data?: Row }] }>();
const value = ref<Row>({ ...props.row });
</script>

<template>
    <f-form-modal :is-open :value :use-error-list="false" @close="(event) => emit('close', event)">
        <template #header> Ärende </template>
        <template #input-text-fields>
            <f-text-field v-model="value.name" v-validation.maxLength="{ maxLength: { length: 32 } }" type="text">
                Namn
            </f-text-field>
            <f-text-field
                v-model="value.description"
                v-validation.maxLength="{ maxLength: { length: 100 } }"
                type="text"
            >
                Beskrivning
            </f-text-field>
        </template>
    </f-form-modal>
</template>
