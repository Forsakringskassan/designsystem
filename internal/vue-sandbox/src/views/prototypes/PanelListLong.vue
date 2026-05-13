<script lang="ts">
import { defineComponent, ref, useTemplateRef } from "vue";
import { FMessageBox, FTextField, FValidationFormAction, FWizard, FWizardStep } from "@fkui/vue";
import ExpandablePanelList from "./components/ExpandablePanelList.vue";

export default defineComponent({
    components: { FWizard, FWizardStep, FTextField, FMessageBox, ExpandablePanelList },
    setup() {
        const currentStep = ref<string | undefined>(undefined);
        const firstName = ref("");
        const panelList = useTemplateRef<InstanceType<typeof ExpandablePanelList>>("panelList");
        const showMinPanelsError = ref(false);

        function beforeNextStep2(): FValidationFormAction | undefined {
            if ((panelList.value?.panels?.length ?? 0) < 3) {
                showMinPanelsError.value = true;
                return FValidationFormAction.CANCEL;
            }
            showMinPanelsError.value = false;
            return undefined;
        }

        return { currentStep, firstName, showMinPanelsError, beforeNextStep2 };
    },
});
</script>

<template>
    <div class="prototype-root">
        <router-link class="anchor" to="/paneler-vs-kort">← Tillbaka</router-link>
        <h1>Husdjursbidrag</h1>

        <f-wizard v-model="currentStep" header-tag="h2" disable-initial-focus>
            <f-wizard-step key="step1" :use-error-list="false" title="Dina uppgifter">
                <div class="i-width-md-6">
                    <f-text-field v-model="firstName" v-validation.required>Ditt förnamn</f-text-field>
                </div>
            </f-wizard-step>

            <f-wizard-step key="step2" :use-error-list="false" title="Husdjur" :before-next="beforeNextStep2">
                <div class="i-width-md-9">
                    <expandable-panel-list ref="panelList" />
                </div>
                <f-message-box v-if="showMinPanelsError" type="error" layout="short" class="i-width-md-9">
                    Du måste lägga till minst tre husdjur innan du kan gå vidare.
                </f-message-box>
            </f-wizard-step>

            <f-wizard-step key="step3" :use-error-list="false" title="Granska">
                <p>Tack</p>
                <template #next-button-text>Klar</template>
            </f-wizard-step>
        </f-wizard>
    </div>
</template>

<style lang="scss">
@use "@fkui/design/src/core/size";

.prototype-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 2rem;
    margin-bottom: size.$margin-150;
}
</style>
