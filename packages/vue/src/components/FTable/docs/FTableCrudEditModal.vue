<script setup lang="ts">
import { ref } from "vue";
import { FCurrencyTextField, FFormModal, FSelectField } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
    pris?: number;
}

const props = defineProps<{ isOpen: boolean; row: Row }>();

const emit = defineEmits<{ close: [event: { reason: string; data?: Row }] }>();

const lander = [
    "",
    "Colombia",
    "Costa Rica",
    "Dominikanska republiken",
    "Ecuador",
    "Frankrike",
    "Italien",
    "Spanien",
    "Sverige",
    "Sydafrika",
];

const value = ref<Row>({ ...props.row });
</script>

<template>
    <f-form-modal :is-open :value :use-error-list="false" @close="(event) => emit('close', event)">
        <template #header> Ändra {{ row.namn }} </template>
        <template #input-text-fields>
            <f-select-field v-model="value.land">
                <template #label>Land</template>
                <option disabled hidden value="">Välj..</option>
                <option v-for="land in lander" :key="land">{{ land }}</option>
            </f-select-field>
            <f-currency-text-field v-model="value.pris"> Pris </f-currency-text-field>
        </template>
    </f-form-modal>
</template>
