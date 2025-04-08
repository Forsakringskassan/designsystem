<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { FCheckboxField, FFieldset, type FValidationFormCallback } from "../..";
import { FWizard, FWizardStep } from "..";

export default defineComponent({
    components: { FWizard, FWizardStep, FFieldset, FCheckboxField },
    props: {
        beforeNext: {
            type: Function as PropType<FValidationFormCallback>,
            required: false,
            default() {
                /* do nothing */
            },
        },
    },
});
</script>

<template>
    <div>
        <f-wizard id="wizard" header-tag="h2">
            <f-wizard-step key="STEP1" title="STEP1" :before-next="beforeNext">
                <f-fieldset v-validation.required name="kryss">
                    <template #label>
                        <h2>Underskrift</h2>
                    </template>
                    <f-checkbox-field value="Ja"> Kryssa i mig för att gå vidare </f-checkbox-field>
                </f-fieldset>
            </f-wizard-step>
            <f-wizard-step key="STEP2" title="STEP2">
                STEP2 CONTENT
                <template #next-button-text> Klar </template>
            </f-wizard-step>
        </f-wizard>
    </div>
</template>
