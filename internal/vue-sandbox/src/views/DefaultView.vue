<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FRadioField, FTextField, FTextareaField, FWizard, FWizardStep } from "@fkui/vue";

export default defineComponent({
    components: {
        FCheckboxField,
        FFieldset,
        FRadioField,
        FTextareaField,
        FTextField,
        FWizard,
        FWizardStep,
    },
    data() {
        return {
            autoResizeModel: "",
            autoRowsModel: "",
            maxRowsModel: "",
            combinedModel: "",
            wizardChoice: "",
            wizardConfirmed: false,
            wizardInputModel: "",
            wizardModel: "",
            wizardStep: "wizard-text",
        };
    },
});
</script>

<template>
    <div class="container sandbox-root">
        <header class="sandbox-header">
            <h1>FTextareaField med auto-resize</h1>
        </header>

        <div class="row sandbox-row">
            <div class="col col--md-4">
                <section class="sandbox-section">
                    <code class="sandbox-case">auto-resize</code>
                    <f-textarea-field id="auto-resize-field" v-model="autoResizeModel" auto-resize>
                        Automatisk höjd, standard 4 rader
                    </f-textarea-field>
                </section>
            </div>
        </div>

        <div class="row sandbox-row">
            <div class="col col--md-4">
                <section class="sandbox-section">
                    <code class="sandbox-case">auto-resize + rows="1"</code>
                    <f-textarea-field id="auto-resize-rows-field" v-model="autoRowsModel" auto-resize rows="1">
                        Automatisk höjd, minst 1 rad
                    </f-textarea-field>
                </section>
            </div>
        </div>

        <div class="row sandbox-row">
            <div class="col col--md-4">
                <section class="sandbox-section">
                    <code class="sandbox-case">auto-resize + rows="1" + max-rows="3"</code>
                    <f-textarea-field id="max-rows-field" v-model="maxRowsModel" auto-resize rows="1" :max-rows="3">
                        Automatisk höjd, max 3 rader
                    </f-textarea-field>
                </section>
            </div>
        </div>

        <div class="row sandbox-row">
            <div class="col col--md-4">
                <section class="sandbox-section">
                    <code class="sandbox-case">auto-resize + resizable</code>
                    <f-textarea-field id="combined-field" v-model="combinedModel" auto-resize resizable>
                        Automatisk höjd vinner över justerbar
                    </f-textarea-field>
                </section>
            </div>
        </div>

        <div class="row sandbox-row">
            <div class="col col--md-4">
                <section class="sandbox-section">
                    <h2>Automatisk höjd i wizard</h2>
                    <f-wizard v-model="wizardStep" header-tag="h2" disable-initial-focus>
                        <f-wizard-step key="wizard-text" title="Steg 1" :use-error-list="false">
                            <f-fieldset name="wizard-choice">
                                <template #label> Välj alternativ </template>
                                <f-radio-field v-model="wizardChoice" value="alternativ-1">
                                    Alternativ 1
                                </f-radio-field>
                                <f-radio-field v-model="wizardChoice" value="alternativ-2">
                                    Alternativ 2
                                </f-radio-field>
                            </f-fieldset>
                            <f-textarea-field
                                id="wizard-auto-resize-field"
                                v-model="wizardModel"
                                v-validation.required
                                auto-resize
                                rows="3"
                                :max-rows="6"
                            >
                                Flerradigt inmatningsfält med auto-resize
                            </f-textarea-field>
                            <f-checkbox-field v-model="wizardConfirmed" :value="true">
                                Ett alternativ
                            </f-checkbox-field>
                        </f-wizard-step>
                        <f-wizard-step key="wizard-review" title="Steg 2" :use-error-list="false">
                            <f-text-field
                                id="wizard-text-field"
                                v-model="wizardInputModel"
                                v-validation.maxLength="{ maxLength: { length: 100 } }"
                            >
                                Vanligt inmatningsfält
                            </f-text-field>
                            <template #next-button-text> Klar </template>
                        </f-wizard-step>
                    </f-wizard>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@fkui/design/src/core/size";

.sandbox-root {
    padding-top: size.$padding-200;
    padding-bottom: size.$padding-200;
}

.sandbox-header {
    margin-bottom: size.$margin-200;
}

.sandbox-header h1,
.sandbox-section h2 {
    margin: 0;
}

.sandbox-row {
    row-gap: size.$margin-200;
}

.sandbox-section {
    padding-top: size.$padding-150;
}

.sandbox-section h2 {
    margin-bottom: size.$margin-050;
}

.sandbox-case {
    display: inline-block;
    margin-bottom: size.$margin-100;
}
</style>
