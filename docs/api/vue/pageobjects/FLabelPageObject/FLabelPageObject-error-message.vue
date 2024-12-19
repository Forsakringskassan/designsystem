<script setup lang="ts">
import { FTextField, FValidationForm } from "@fkui/vue";
</script>

<!-- cut above -->
<template>
    <f-validation-form>
        <f-text-field v-validation.required v-test="'awesome-label'"> Etikett </f-text-field>
        <button type="submit" class="button button--primary">Skicka in</button>
    </f-validation-form>
</template>
