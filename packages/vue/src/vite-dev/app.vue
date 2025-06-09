<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { setFormSubmitted } from "@fkui/validation";
import { FTextField2 } from "../components";

const namn = ref("World");
const form = useTemplateRef("form");

function onSubmit(event) {
    event.preventDefault();
    setFormSubmitted(form.value);
}
</script>

<template>
    <form @submit="onSubmit" ref="form">
        <f-text-field2 v-model="namn"> Namn </f-text-field2>
        <button type="submit"> Submit </button>
    </form>
</template>
