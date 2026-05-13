<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";
import {
    FButton,
    FExpandablePanel,
    FMessageBox,
    FTextField,
    FValidationFormAction,
    FWizard,
    FWizardStep,
    confirmModal,
} from "@fkui/vue";
import { useRouter } from "vue-router";
import ExpandablePanelList, { type Panel } from "./components/ExpandablePanelList.vue";

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatAge(age: string): string {
    const map: Record<string, string> = { "0-3": "0 till 3 år", "4-7": "4 till 7 år", "over-8": "8 år eller mer" };
    return map[age] ?? age;
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
    components: { FWizard, FWizardStep, FTextField, FMessageBox, FButton, FExpandablePanel, ExpandablePanelList },
    setup() {
        const instance = getCurrentInstance();
        const router = useRouter();
        const currentStep = ref<string | undefined>(undefined);
        const firstName = ref("");
        const showMinPanelsError = ref(false);
        const summaryExpanded = reactive<Record<number, boolean>>({});
        const panels = reactive<Panel[]>([
            {
                id: 1,
                savedName: "",
                savedAnimalType: "",
                animalType: "",
                name: "",
                age: "",
                legs: undefined,
                weight: undefined,
                soleGuardianship: "",
                expanded: true,
            },
        ]);

        function beforeNextStep2(): FValidationFormAction | undefined {
            if (panels.length < 3) {
                showMinPanelsError.value = true;
                return FValidationFormAction.CANCEL;
            }
            showMinPanelsError.value = false;
            for (const p of panels) {
                summaryExpanded[p.id] = true;
            }
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
            submitted,
            onCompleted,
            panels,
            summaryExpanded,
            showMinPanelsError,
            beforeNextStep2,
            onCancel,
            capitalize,
            formatAge,
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
                    <expandable-panel-list :panels @interact="showMinPanelsError = false" />
                </div>
                <f-message-box v-if="showMinPanelsError" type="error" layout="short" class="i-width-md-9">
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
                        <f-expandable-panel
                            v-for="(panel, index) in panels"
                            :key="panel.id"
                            :expanded="summaryExpanded[panel.id]"
                            @toggle="summaryExpanded[panel.id] = !summaryExpanded[panel.id]"
                        >
                            <template #title>{{ panel.name || `Husdjur ${index + 1}` }}</template>
                            <template #default>
                                <p>
                                    <label class="label">Typ av husdjur</label>
                                    <span>{{ capitalize(panel.animalType) }}</span>
                                </p>
                                <p>
                                    <label class="label">Hur gammalt är husdjuret?</label>
                                    <span>{{ formatAge(panel.age) }}</span>
                                </p>
                                <p>
                                    <label class="label">Antal ben</label>
                                    <span>{{ panel.legs }}</span>
                                </p>
                                <p>
                                    <label class="label">Hur mycket väger husdjuret?</label>
                                    <span>{{ panel.weight }}</span>
                                </p>
                                <p>
                                    <label class="label">Är det bara du som bor med husdjuret?</label>
                                    <span>{{ formatGuardianship(panel.soleGuardianship) }}</span>
                                </p>
                            </template>
                        </f-expandable-panel>
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
