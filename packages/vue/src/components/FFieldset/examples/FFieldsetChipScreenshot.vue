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

const choices1 = ref();
const choices2 = ref([]);
</script>

<template>
    <!-- [html-validate-disable-next wcag/h32 -- false positive, FButton is a submit button ] -->
    <f-validation-form id="screenshot" :use-error-list="false">
        <template #default>
            <f-fieldset v-validation.required name="chips" chip horizontal>
                <template #label> Fieldset-etikett </template>

                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">
                        Exemplet visar ett fieldset med fyra horizontella chip, utan tooltip och med
                        valideringsfel. Där första chippet är i fokus.
                    </span>
                </template>

                <f-radio-field v-model="choices1" value="Ett alternativ">
                    Ett alternativ
                </f-radio-field>

                <f-radio-field v-model="choices1" value="Alternativ 2">
                    Alternativ 2
                </f-radio-field>

                <f-radio-field v-model="choices1" value="Ytterligare alternativ">
                    Ytterligare alternativ
                </f-radio-field>

                <f-radio-field v-model="choices1" value="Sista" disabled> Sista </f-radio-field>
            </f-fieldset>

            <f-fieldset v-validation.required name="chips" chip>
                <template #label> Fieldset-etikett </template>

                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer om alternativen" header-tag="h2">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>

                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">
                        Exemplet visar ett fieldset med fyra vertikala chip, tooltip och med
                        valideringsfel.
                    </span>
                </template>

                <f-checkbox-field v-model="choices2" value="Ett alternativ">
                    Ett alternativ
                </f-checkbox-field>

                <f-checkbox-field v-model="choices2" value="Alternativ 2">
                    Alternativ 2
                </f-checkbox-field>

                <f-checkbox-field v-model="choices2" value="Ytterligare alternativ">
                    Ytterligare alternativ
                </f-checkbox-field>

                <f-checkbox-field v-model="choices2" value="Sista" disabled>
                    Sista
                </f-checkbox-field>
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
