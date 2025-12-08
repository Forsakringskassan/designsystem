<script setup lang="ts">
import { ref } from "vue";
import { FButton, FCheckboxField, FFieldset, FTooltip, FValidationForm } from "@fkui/vue";

const data = ref();
</script>

<template>
    <!-- [html-validate-disable-next wcag/h32 -- false positive, FButton is a submit button ] -->
    <f-validation-form id="screenshot" :use-error-list="false">
        <template #default>
            <f-fieldset id="checkbox" v-validation.required name="checkbox" show-details="always">
                <template #label> Fieldset-etikett </template>

                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">
                        Exemplet visar ett fieldset med tre kryssrutor, utan tooltip och med
                        valideringsfel. Där första kryssrutan är i fokus.
                    </span>
                </template>

                <template #default>
                    <f-checkbox-field v-model="data" value="A">
                        Alternativ A
                        <template #details> Lite mer information om val A. </template>
                    </f-checkbox-field>

                    <f-checkbox-field v-model="data" value="B">
                        Alternativ B
                        <template #details> Lite mer information om val B. </template>
                    </f-checkbox-field>

                    <f-checkbox-field v-model="data" value="C">
                        Alternativ C
                        <template #details> Lite mer information om val C. </template>
                    </f-checkbox-field>
                </template>
            </f-fieldset>

            <f-fieldset
                id="checkbox-tooltip"
                v-validation.required
                name="checkbox-tooltip"
                show-details="always"
            >
                <template #label> Fieldset-etikett </template>

                <template #tooltip>
                    <f-tooltip screen-reader-text="Read more" header-tag="h2">
                        <template #header> Kryssrutor </template>
                        <template #body> Lite information. </template>
                    </f-tooltip>
                </template>

                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">
                        Exemplet visar ett fieldset med tre kryssrutor, tooltip och med
                        valideringsfel.</span
                    >
                </template>

                <template #default>
                    <f-checkbox-field v-model="data" value="A">
                        Alternativ A
                        <template #details> Lite mer information om val A. </template>
                    </f-checkbox-field>

                    <f-checkbox-field v-model="data" value="B">
                        Alternativ B
                        <template #details> Lite mer information om val B. </template>
                    </f-checkbox-field>

                    <f-checkbox-field v-model="data" value="C">
                        Alternativ C
                        <template #details> Lite mer information om val C. </template>
                    </f-checkbox-field>
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
