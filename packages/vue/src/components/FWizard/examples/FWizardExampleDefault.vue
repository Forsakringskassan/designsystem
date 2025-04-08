<script>
import { defineComponent } from "vue";
import { FWizard, FWizardStep, FTextField, FDatepickerField, FSelectField } from "@fkui/vue";

export default defineComponent({
    name: "WizardExampleDefault",
    components: { FWizard, FWizardStep, FTextField, FDatepickerField, FSelectField },
    data() {
        return {
            current: null,
            visible: true,
            done: false,
            date: "",
            options: "",
        };
    },
    methods: {
        onCompleted() {
            this.done = true;
        },
    },
});
</script>

<template>
    <div>
        <f-wizard v-model="current" header-tag="h2" @completed="onCompleted">
            <f-wizard-step key="foo" :use-error-list="false" title="Stegrubrik 1">
                <f-text-field v-validation.required.maxLength="{ maxLength: { length: 100 } }">
                    Etikett-rubrik
                </f-text-field>
                <f-text-field v-validation.maxLength="{ maxLength: { length: 100 } }">
                    Etikett-rubrik (frivillig)
                </f-text-field>
            </f-wizard-step>

            <f-wizard-step key="bar" :use-error-list="false" title="Stegrubrik 2">
                <f-datepicker-field v-model="date" v-validation.required>
                    Etikett-rubrik
                </f-datepicker-field>
                <f-select-field v-model="options" v-validation.required>
                    <template #label> Etikett-rubrik </template>

                    <option :disabled="true" value="">Välj</option>
                    <option value="ALTERNATIV1">Alternativ 1</option>
                    <option value="ALTERNATIV2">Alternativ 2</option>
                </f-select-field>
            </f-wizard-step>
            <f-wizard-step key="baz" :use-error-list="false" title="Stegrubrik 3">
                En informationstext
                <template #next-button-text> Klar </template>
            </f-wizard-step>
        </f-wizard>
        <p v-if="done">Allt är ifyllt</p>
    </div>
</template>
