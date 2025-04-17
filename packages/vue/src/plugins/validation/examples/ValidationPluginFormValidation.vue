<script>
import { defineComponent } from "vue";
import { FValidationForm, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginFormValidation",
    components: { FValidationForm, FTextField },
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

        <button type="submit">Trigga fel</button>
    </f-validation-form>
</template>
