<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { setFormSubmitted, validateElement } from "@fkui/validation";
import { FTextField2 } from "../components";

const namn = ref("World");
const validity = ref<{ isValid: boolean }>({ isValid: false });
const form = useTemplateRef("form");

async function onSubmit(event: Event) {
    event.preventDefault();
    if (form.value) {
        setFormSubmitted(form.value);
        const result = await validateElement(form.value);
        console.log(result);
    }
}
</script>

<template>
    <form @submit="onSubmit" ref="form">
        <f-text-field2 v-model="namn" v-model:validity="validity"> Namn </f-text-field2>
        <button type="submit">Submit</button>
        <p v-if="validity.isValid">Denna texten visas bara om värdet är giltigt</p>
        <pre>{{ JSON.stringify({ namn, validity }) }}</pre>
    </form>
</template>
