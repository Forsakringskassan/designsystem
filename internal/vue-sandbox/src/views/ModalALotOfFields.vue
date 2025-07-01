<script setup lang="ts">
import { ref } from "vue";
import { FFormModal, FTextField } from "@fkui/vue";

withDefaults(defineProps<{ isOpen?: boolean; useErrorList?: boolean }>(), {
    useErrorList: false,
});

defineEmits<{
    cancel: [];
    close: [];
    submit: [value: unknown];
}>();

const foo = ref("");
const bar = ref("");
const baz = ref("");
const qux = ref("");
const waldo = ref("");
const fred = ref("");
const wilma = ref("");
const dino = ref("");
const betty = ref("");
</script>

<template>
    <f-form-modal
        :use-error-list="useErrorList"
        :is-open="isOpen"
        @submit="(e: unknown) => $emit('submit', e)"
        @cancel="() => $emit('cancel')"
        @close="() => $emit('close')"
    >
        <template #header> Lägg till ny person </template>
        <template #input-text-fields>
            <f-text-field v-model="foo" v-validation.required> Foo </f-text-field>
            <f-text-field v-model="bar" v-validation.required> Bar </f-text-field>
            <f-text-field v-model="baz" v-validation.required> Baz </f-text-field>
            <f-text-field v-model="qux" v-validation.required> Qux </f-text-field>
            <f-text-field v-model="waldo" v-validation.required> Waldo </f-text-field>
            <f-text-field v-model="fred" v-validation.required> Fred </f-text-field>
            <f-text-field v-model="wilma" v-validation.required> Wilma </f-text-field>
            <f-text-field v-model="dino" v-validation.required> Dino </f-text-field>
            <f-text-field v-model="betty" v-validation.required> Betty </f-text-field>
        </template>
    </f-form-modal>
</template>
