<script setup lang="ts">
import { ref } from "vue";
import {
    FButton,
    FCheckboxField,
    FFieldset,
    FRadioField,
    FTooltip,
    FValidationForm,
} from "@fkui/vue";

const data = ref();
const choices = ref([]);
const modelValue = ref();
</script>

<template>
    <f-validation-form id="screenshot" :use-error-list="false">
        <template #default>
            <f-fieldset
                id="checkbox-tooltip"
                v-validation.required
                name="checkbox-tooltip"
                show-details="always"
            >
                <template #label> Fieldset-etikett kryssruta </template>

                <template #tooltip>
                    <f-tooltip screen-reader-text="Read more" header-tag="h2">
                        <template #header> Kryssrutor </template>
                        <template #body> Lite information. </template>
                    </f-tooltip>
                </template>

                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">
                        Ett fieldset med två kryssrutor med valideringsfel samt tooltip.</span
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
                </template>
            </f-fieldset>

            <f-button id="button" type="submit" size="medium" variant="primary">
                Validate
            </f-button>
        </template>
    </f-validation-form>
    <f-fieldset name="chips" chip>
        <template #label> Fieldset-etikett chip </template>

        <template #description="{ descriptionClass }">
            <span :class="descriptionClass"> Ett annat fieldset med två vertikala chip. </span>
        </template>

        <f-checkbox-field v-model="choices" value="Ett alternativ">
            Ett alternativ
        </f-checkbox-field>

        <f-checkbox-field v-model="choices" value="Sista" disabled> Sista </f-checkbox-field>
    </f-fieldset>
    <f-fieldset v-validation.required name="radio2" border>
        <template #label> Fieldset-etikett radioknapp</template>

        <template #tooltip>
            <f-tooltip screen-reader-text="Läs mer om radioknappar" header-tag="h2">
                <template #header> Radioknappar </template>
                <template #body> Lite information. </template>
            </f-tooltip>
        </template>

        <template #description="{ descriptionClass }">
            <span :class="descriptionClass">
                Ett sista fieldset med två radioknappar samt tooltip.
            </span>
        </template>

        <template #default>
            <f-radio-field v-model="modelValue" :value="true"> Ja </f-radio-field>
            <f-radio-field v-model="modelValue" :value="false"> Nej </f-radio-field>
        </template>
    </f-fieldset>
</template>
