<script setup lang="ts">
import { ref } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";

const modelValue = ref<boolean>();
</script>

<template>
    <f-fieldset name="arbete-annat-land" horizontal>
        <template #label> Har du arbetat utomlands under de senaste 12 månaderna? </template>
        <f-radio-field v-model="modelValue" :value="true"> Ja </f-radio-field>
        <f-radio-field v-model="modelValue" :value="false"> Nej </f-radio-field>
    </f-fieldset>
</template>
