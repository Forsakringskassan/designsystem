<script>
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FValidationForm, FTextField } from "@fkui/vue";

/* register a new validator named "notShorter" */
ValidationService.registerValidator({
    name: "notShorter",
    validation(value, element, config) {
        return value.length >= config.minLength;
    },
});

export default defineComponent({
    name: "ValidationPluginDynamicValidation",
    components: {
        FValidationForm,
        FTextField,
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
                            minLength: minLength,
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

        <button class="button" type="submit">Signera</button>
    </f-validation-form>
</template>
