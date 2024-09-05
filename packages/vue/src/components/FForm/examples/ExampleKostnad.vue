<template>
    <div>
        <f-form-step :id="`formstep-${formStepId}`">
            <template #header="header">
                <h2 :class="header.slotClass">{{ formStepId + 2 }}. Kostnad</h2>
                <span v-if="header.isValid" class="sr-only"> Steget är korrekt ifyllt. </span>
            </template>

            <template v-if="exampleOptions.errorMessageFormStep" #error-message>
                <p>{{ exampleOptions.errorMessageFormStep }}</p>
            </template>

            <template #default="scope">
                <f-text-field
                    v-model="formData.kostnad"
                    v-validation.required.maxLength="{
                        maxLength: { length: 100 },
                    }"
                >
                    Kostnad
                </f-text-field>
                <f-numeric-text-field v-model="formData.belopp" v-validation.required>
                    Belopp
                </f-numeric-text-field>
                <f-textarea-field v-model="formData.beskrivning" v-validation.whitelist>
                    Hur har du räknat
                </f-textarea-field>
                <f-form-step-button
                    :is-open="
                        // @ts-ignore
                        scope.isOpen
                    "
                    :is-any-field-touched="
                        // @ts-ignore
                        scope.isAnyFieldTouched
                    "
                    @click="
                        // @ts-ignore
                        scope.toggleIsOpen()
                    "
                ></f-form-step-button>
            </template>
        </f-form-step>
    </div>
</template>
<script lang="ts">
import { type PropType, defineComponent } from "vue";
import {
    FFormStep,
    FFormStepButton,
    FNumericTextField,
    FTextField,
    FTextareaField,
} from "@fkui/vue";

interface Kostnad {
    kostnad: string;
    belopp: string;
    beskrivning: string;
}

export default defineComponent({
    name: "ExampleKostnad",
    components: {
        FFormStep,
        FFormStepButton,
        FNumericTextField,
        FTextField,
        FTextareaField,
    },
    props: {
        kostnad: {
            type: Object as PropType<Kostnad>,
            required: true,
        },
        formStepId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            formData: { kostnad: "", belopp: "", beskrivning: "" },
            exampleOptions: {
                errorMessageTitleForm: "Innan du går vidare...",
                errorMessageForm: "Du har några fel, glöm inte att titta i följande steg:",
                errorMessageFormStep: "",
                displayError: true,
                numberOfSteps: 2,
                dataMissing: "Information saknas.",
            },
        };
    },
    created() {
        this.formData = this.kostnad;
    },
});
</script>
