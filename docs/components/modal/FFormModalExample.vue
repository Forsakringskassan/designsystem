<script setup lang="ts">
import { FFormModal, FTextField } from "@fkui/vue";

interface Person {
    name: string;
    age: string;
}

const { value } = defineProps<{
    value: Person;
}>();
</script>

<!-- eslint-disable vue/no-mutating-props -->
<template>
    <f-form-modal :value>
        <template #header> Awesome Modal </template>
        <template #input-text-fields>
            <f-text-field v-model="value.name"> Namn </f-text-field>
            <f-text-field v-model="value.age"> Ålder </f-text-field>
        </template>
    </f-form-modal>
</template>
