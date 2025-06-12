<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { setFormSubmitted, validateElement } from "@fkui/validation";
import { FTextField2 } from "../components";

const namn = ref("World");
const isValid = ref(false);
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
        <f-text-field2 v-model="namn" v-model:is-valid="isValid" > Namn </f-text-field2>
        <button type="submit">Submit</button>
        <pre>{{ JSON.stringify({ namn, isValid }) }}</pre>
    </form>
</template>
