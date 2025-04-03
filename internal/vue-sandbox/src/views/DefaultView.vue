<script lang="ts">
import { defineComponent } from "vue";
import { FWizard, FWizardStep, FTooltip, FTextareaField } from "@fkui/vue";

export default defineComponent({
    components: { FWizard, FWizardStep, FTooltip, FTextareaField },
    data() {
        return {
            namn: "",
        };
    },
});
</script>

<template>
    <div class="sandbox-root">
        <h1>FKUI Sandbox</h1>
        <p>
            Ett internt paket som innehåller en avskalad Vue-applikation. Applikationen är konsument av övriga
            FKUI-paket och innehåller enbart ett tomt exempel.
        </p>
        <p>
            <strong>Ändra och labba gärna här men glöm inte återställa innan merge!</strong>
        </p>
        <hr />
        <f-wizard header-tag="h2">
            <!-- Steg 1 -->
            <f-wizard-step key="bar" :use-error-list="false" title="Stegrubrik 1">
                <!-- Lång text -->
                <f-textarea-field id="lang" v-model="namn" :maxlength="1000" :soft-limit="100" name="lang">
                    <template #default> Lång text (tooltip nåbar) </template>
                    <template #tooltip>
                        <f-tooltip
                            header-tag="h3"
                            screen-reader-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        >
                            <template #header> Hur ska jag fylla i arbetstid under sjukskrivning på deltid? </template>
                            <template #body>
                                <div>
                                    <p>
                                        Skriv hur många timmar och minuter i veckan du jobbar under sjukskrivning på
                                        deltid, och hur tiden fördelas per dag.
                                    </p>
                                </div>
                            </template>
                        </f-tooltip>
                    </template>
                    <template #description="{ discreteDescriptionClass }">
                        <span :class="discreteDescriptionClass"> (max 1 000 tecken) </span>
                    </template>
                </f-textarea-field>

                <!-- Kort text -->
                <f-textarea-field id="kort" v-model="namn" :maxlength="1000" :soft-limit="100" name="kort">
                    <template #default> Kort text (tooltip ej nåbar) </template>
                    <template #tooltip>
                        <f-tooltip
                            header-tag="h3"
                            screen-reader-text="Lorem ipsum dolor sit amet, [...] labore et dolore magna aliqua."
                        >
                            <template #header> Hur ska jag fylla i arbetstid under sjukskrivning på deltid? </template>
                            <template #body>
                                <div>
                                    <p>
                                        Skriv hur många timmar och minuter i veckan du jobbar under sjukskrivning på
                                        deltid, och hur tiden fördelas per dag.
                                    </p>
                                </div>
                            </template>
                        </f-tooltip>
                    </template>
                    <template #description="{ discreteDescriptionClass }">
                        <span :class="discreteDescriptionClass"> (max 1 000 tecken) </span>
                    </template>
                </f-textarea-field>
            </f-wizard-step>

            <!-- Steg 3 -->
            <f-wizard-step key="baz" :use-error-list="false" title="Stegrubrik 2">
                En informationstext
                <template #next-button-text> Klar </template>
            </f-wizard-step>
        </f-wizard>
    </div>
</template>

<style>
.sandbox-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 2rem;
}

hr {
    margin-bottom: 2rem;
}
</style>
