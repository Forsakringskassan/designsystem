<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FButton, FTextField, FValidationForm } from "@fkui/vue";

interface Config {
    minLength: number;
}

/* register a new validator named "notShorter" */
ValidationService.registerValidator<Config>({
    name: "notShorter",
    validation(value, element, config) {
        const { minLength = 0 } = config;
        return value.length >= minLength;
    },
});

export default defineComponent({
    name: "ValidationPluginDynamicValidation",
    components: {
        FButton,
        FTextField,
        FValidationForm,
    },
    data() {
        return {
            name: "",
            minLength: "8",
        };
    },
});
</script>

<template>
    <f-validation-form :use-error-list="false">
        <p>Namn får inte vara kortare än minsta längd.</p>

        <template #error-message> Alla frågor är inte korrekt ifyllda. Titta i: </template>

        <div class="row">
            <div id="min-name" class="col col--md-6">
                <f-text-field
                    v-model="name"
                    v-validation.required.maxLength.notShorter="{
                        notShorter: {
                            minLength,
                            errorMessage: 'Namn får inte vara kortare än minimum längd',
                        },
                        maxLength: { length: 100 },
                    }"
                >
                    Namn
                </f-text-field>
            </div>
            <div id="min-minLength" class="col col--md-6">
                <f-text-field
                    v-model="minLength"
                    v-validation.required.maxLength="{ maxLength: { length: 100 } }"
                >
                    Minimumlängd
                </f-text-field>
            </div>
        </div>

        <f-button type="submit">Signera</f-button>
    </f-validation-form>
</template>
