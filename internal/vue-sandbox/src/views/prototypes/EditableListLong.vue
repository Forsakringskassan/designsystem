<script lang="ts">
import { defineComponent, ref, useTemplateRef } from "vue";
import { FMessageBox, FTextField, FValidationFormAction, FWizard, FWizardStep } from "@fkui/vue";
import EditableCardList from "./components/EditableCardList.vue";

export default defineComponent({
    components: { FWizard, FWizardStep, FTextField, FMessageBox, EditableCardList },
    setup() {
        const currentStep = ref<string | undefined>(undefined);
        const firstName = ref("");
        const cardList = useTemplateRef<InstanceType<typeof EditableCardList>>("cardList");
        const showMinCardsError = ref(false);

        function beforeNextStep2(): FValidationFormAction | undefined {
            if ((cardList.value?.cards?.length ?? 0) < 3) {
                showMinCardsError.value = true;
                return FValidationFormAction.CANCEL;
            }
            showMinCardsError.value = false;
            return undefined;
        }

        return { currentStep, firstName, showMinCardsError, beforeNextStep2 };
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
                    <editable-card-list ref="cardList" />
                </div>
                <f-message-box v-if="showMinCardsError" type="error" layout="short" class="i-width-md-9">
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
