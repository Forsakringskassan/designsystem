<script setup lang="ts">
import { ref } from "vue";
import { FButton, FFieldset, FRadioField, FTooltip, FValidationForm } from "@fkui/vue";

const modelValue1 = ref();
const modelValue2 = ref();
</script>

<template>
    <!-- [html-validate-disable-next wcag/h32 -- false positive, FButton is a submit button ] -->
    <f-validation-form id="screenshot" :use-error-list="false">
        <template #default>
            <f-fieldset v-validation.required name="radio1">
                <template #label> Fieldset-etikett </template>

                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">
                        Exemplet visar ett fieldset med två radioknappar, utan tooltip och med
                        valideringsfel. Där första radioknappen är i fokus.
                    </span>
                </template>

                <template #default>
                    <f-radio-field v-model="modelValue1" :value="true"> Ja </f-radio-field>
                    <f-radio-field v-model="modelValue1" :value="false"> Nej </f-radio-field>
                </template>
            </f-fieldset>

            <f-fieldset v-validation.required name="radio2" border>
                <template #label> Fieldset-etikett </template>

                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer om radioknappar" header-tag="h2">
                        <template #header> Radioknappar </template>
                        <template #body> Lite information. </template>
                    </f-tooltip>
                </template>

                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">
                        Exemplet visar ett fieldset med två radioknappar med ram, tooltip och
                        valideringsfel.
                    </span>
                </template>

                <template #default>
                    <f-radio-field v-model="modelValue2" :value="true"> Ja </f-radio-field>
                    <f-radio-field v-model="modelValue2" :value="false"> Nej </f-radio-field>
                </template>
            </f-fieldset>

            <f-button id="button" type="submit"> Validate </f-button>
        </template>
    </f-validation-form>
</template>

<style>
#screenshot {
    padding: 12px;
}
</style>
