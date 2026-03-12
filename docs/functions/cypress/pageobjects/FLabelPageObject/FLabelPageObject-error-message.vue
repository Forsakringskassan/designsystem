<script setup lang="ts">
import { FButton, FTextField, FValidationForm } from "@fkui/vue";
</script>

<!-- cut above -->
<template>
    <f-validation-form>
        <f-text-field v-validation.required v-test="'awesome-label'"> Etikett </f-text-field>
        <f-button type="submit">Skicka in</f-button>
    </f-validation-form>
</template>
