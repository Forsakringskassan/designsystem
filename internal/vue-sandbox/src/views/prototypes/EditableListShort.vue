<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";
import {
    FButton,
    FCard,
    FMessageBox,
    FTextField,
    FValidationFormAction,
    FWizard,
    FWizardStep,
    confirmModal,
} from "@fkui/vue";
import { useRouter } from "vue-router";
import EditableCardList, { type Card } from "./components/EditableCardList.vue";

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatGuardianship(value: string): string {
    if (value === "yes") {
        return "Ja";
    }
    if (value === "no") {
        return "Nej";
    }
    return value;
}

export default defineComponent({
    components: { FWizard, FWizardStep, FTextField, FMessageBox, FButton, FCard, EditableCardList },
    setup() {
        const instance = getCurrentInstance();
        const router = useRouter();
        const currentStep = ref<string | undefined>(undefined);
        const firstName = ref("");
        const showMinCardsError = ref(false);
        const cards = reactive<Card[]>([]);

        function beforeNextStep2(): FValidationFormAction | undefined {
            if (cards.length < 3) {
                showMinCardsError.value = true;
                return FValidationFormAction.CANCEL;
            }
            showMinCardsError.value = false;
            return undefined;
        }

        async function onCancel(): Promise<void> {
            const proxy = instance?.proxy;
            if (!proxy) {
                return;
            }
            const confirmed = await confirmModal(proxy, {
                heading: "",
                content: "Vill du verkligen avbryta?",
                confirm: "Ja, avbryt",
                dismiss: "Nej, gå tillbaka",
            });
            if (confirmed) {
                await router.push("/paneler-vs-kort");
            }
        }

        const submitted = ref(false);

        function onCompleted(): void {
            submitted.value = true;
        }

        return {
            currentStep,
            firstName,
            cards,
            showMinCardsError,
            beforeNextStep2,
            onCancel,
            onCompleted,
            submitted,
            capitalize,
            formatGuardianship,
        };
    },
});
</script>

<template>
    <div class="prototype-root">
        <router-link class="anchor" to="/paneler-vs-kort">← Tillbaka</router-link>
        <h1>Husdjursbidrag</h1>

        <p v-if="submitted">Tack för din ansökan!</p>
        <f-wizard
            v-else
            v-model="currentStep"
            header-tag="h2"
            disable-initial-focus
            @cancel="onCancel"
            @completed="onCompleted"
        >
            <f-wizard-step key="step1" :use-error-list="false" title="Dina uppgifter">
                <div class="i-width-md-6">
                    <f-text-field v-model="firstName" v-validation.required.maxLength="{ maxLength: { length: 100 } }"
                        >Ditt förnamn</f-text-field
                    >
                </div>
            </f-wizard-step>

            <f-wizard-step key="step2" :use-error-list="false" title="Husdjur" :before-next="beforeNextStep2">
                <div class="i-width-md-9">
                    <editable-card-list :cards variant="short" @interact="showMinCardsError = false" />
                </div>
                <f-message-box v-if="showMinCardsError" type="error" layout="short" class="i-width-md-9">
                    Du måste lägga till minst tre husdjur innan du kan gå vidare.
                </f-message-box>
            </f-wizard-step>

            <f-wizard-step key="step3" :use-error-list="false" title="Granska">
                <div class="summary-group">
                    <h3>Dina uppgifter</h3>
                    <p>
                        <label class="label">Förnamn</label>
                        <span>{{ firstName }}</span>
                    </p>
                    <f-button variant="tertiary" icon-left="pen" align-text @click="currentStep = 'step1'"
                        >Ändra Dina uppgifter</f-button
                    >
                </div>
                <div class="summary-group">
                    <h3>Husdjur</h3>
                    <div class="i-width-md-9">
                        <f-card v-for="(card, index) in cards" :key="card.id">
                            <template #header="{ headingSlotClass }">
                                <h3 :class="headingSlotClass">{{ card.name || `Husdjur ${index + 1}` }}</h3>
                            </template>
                            <template #default>
                                <p>
                                    <label class="label">Typ av husdjur</label>
                                    <span>{{ capitalize(card.animalType) }}</span>
                                </p>
                                <p>
                                    <label class="label">Är det bara du som bor med husdjuret?</label>
                                    <span>{{ formatGuardianship(card.soleGuardianship) }}</span>
                                </p>
                            </template>
                        </f-card>
                    </div>
                    <f-button variant="tertiary" icon-left="pen" align-text @click="currentStep = 'step2'"
                        >Ändra Husdjur</f-button
                    >
                </div>
                <template #next-button-text>Skicka in</template>
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

.summary-group {
    margin-bottom: size.$margin-100;

    h3 {
        margin-bottom: size.$margin-100;
    }
}
</style>
