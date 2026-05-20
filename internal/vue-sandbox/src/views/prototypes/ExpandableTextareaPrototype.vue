<script lang="ts">
import { defineComponent, ref } from "vue";
import { FFieldset, FRadioField, FWizard, FWizardStep } from "@fkui/vue";
import { FExpandableTextareaField } from "@fkui/vue-labs";

export default defineComponent({
    components: {
        FExpandableTextareaField,
        FFieldset,
        FRadioField,
        FWizard,
        FWizardStep,
    },
    setup() {
        const message = ref("");
        const testMode = ref("standalone");
        const wizardHasContent = ref("");
        const wizardMessage = ref("");

        return {
            message,
            testMode,
            wizardHasContent,
            wizardMessage,
        };
    },
});
</script>

<template>
    <div class="prototype-root expandable-textarea-prototype">
        <router-link class="anchor" to="/">← Tillbaka</router-link>
        <h1>Expanderande textarea</h1>

        <section class="prototype-section">
            <div class="row">
                <div class="col col--md-6">
                    <f-fieldset name="test-mode">
                        <template #label>Testläge</template>
                        <f-radio-field v-model="testMode" value="standalone">Fristående</f-radio-field>
                        <f-radio-field v-model="testMode" value="wizard">Steg-för-steg</f-radio-field>
                    </f-fieldset>
                </div>
            </div>
        </section>

        <section v-if="testMode === 'standalone'" class="prototype-section">
            <div class="row">
                <div class="col col--md-6">
                    <f-expandable-textarea-field id="expandable-message" v-model="message" :maxlength="500">
                        Expanderande inmatningsfält
                        <template #description="{ descriptionClass }">
                            <span :class="descriptionClass">Bygger på FTextareaField med autoResize.</span>
                        </template>
                    </f-expandable-textarea-field>
                </div>
            </div>
        </section>

        <section v-if="testMode === 'wizard'" class="prototype-section">
            <h2>Inuti FWizard</h2>
            <f-wizard header-tag="h3" disable-initial-focus>
                <f-wizard-step key="textarea" :use-error-list="false" title="Text">
                    <div class="row">
                        <div class="col col--md-6">
                            <f-expandable-textarea-field
                                id="expandable-wizard-message"
                                v-model="wizardMessage"
                                :maxlength="500"
                            >
                                Expanderande inmatningsfält
                                <template #description="{ descriptionClass }">
                                    <span :class="descriptionClass">Bygger på FTextareaField med autoResize.</span>
                                </template>
                            </f-expandable-textarea-field>
                        </div>
                    </div>
                </f-wizard-step>
                <f-wizard-step key="empty" :use-error-list="false" title="Tomt steg">
                    <div class="row">
                        <div class="col col--md-6">
                            <f-fieldset name="wizard-content-test">
                                <template #label>Test med innehåll</template>
                                <f-radio-field v-model="wizardHasContent" value="ja">Ja</f-radio-field>
                                <f-radio-field v-model="wizardHasContent" value="nej">Nej</f-radio-field>
                            </f-fieldset>
                        </div>
                    </div>
                    <template #next-button-text>Fortsätt</template>
                </f-wizard-step>
                <f-wizard-step key="review" :use-error-list="false" title="Granska">
                    <div class="row">
                        <div class="col col--md-9">
                            <dl class="review-list">
                                <dt>Expanderande inmatningsfält</dt>
                                <dd>{{ wizardMessage || "Ej ifyllt" }}</dd>
                                <dt>Test med innehåll</dt>
                                <dd>{{ wizardHasContent || "Ej valt" }}</dd>
                            </dl>
                        </div>
                    </div>
                </f-wizard-step>
            </f-wizard>
        </section>
    </div>
</template>

<style lang="scss">
@use "@fkui/design/src/core/size";

.expandable-textarea-prototype {
    width: min(100% - 2rem, 80ch);
    margin: auto;

    h1 {
        margin-top: 3rem;
        margin-bottom: size.$margin-150;
    }

    h2 {
        margin-top: 0;
        margin-bottom: size.$margin-100;
    }
}

.prototype-section {
    margin-bottom: size.$margin-200;
}

.review-list {
    dt {
        font-weight: 700;
    }

    dd {
        margin: 0 0 size.$margin-100;
        overflow-wrap: anywhere;
        white-space: pre-wrap;
    }
}
</style>
