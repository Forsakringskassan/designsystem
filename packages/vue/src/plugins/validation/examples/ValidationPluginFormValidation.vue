<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FTextField, FValidationForm } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginFormValidation",
    components: { FButton, FTextField, FValidationForm },
});
</script>

<template>
    <f-validation-form v-test="'form-validation-prefix'">
        <template #error-message> Fel i följande fält... </template>

        <div v-validation-prefix="'PREFIX '">
            <f-text-field
                v-validation-prefix.maxLength="'1 '"
                v-validation.required
                :maxlength="100"
            >
                Okreativ etikett
            </f-text-field>
            <f-text-field
                v-validation-prefix.maxLength="'2 '"
                v-validation.required
                :maxlength="100"
            >
                Okreativ etikett
            </f-text-field>
            <f-text-field
                v-validation-prefix.maxLength="'3 '"
                v-validation.required
                :maxlength="100"
            >
                Okreativ etikett
            </f-text-field>
        </div>

        <f-button type="submit">Trigga fel</f-button>
    </f-validation-form>
</template>
