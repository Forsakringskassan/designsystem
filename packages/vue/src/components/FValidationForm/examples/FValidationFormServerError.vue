<script>
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import {
    FTextField,
    FValidationForm,
    FValidationFormAction,
    getElementFromVueRef,
} from "@fkui/vue";

export default defineComponent({
    name: "FValidationFormServerError",
    components: { FTextField, FValidationForm },
    data() {
        return {
            field1: "",
            field2: "",
        };
    },
    methods: {
        onSubmit() {
            alert("Spara");
        },
        onCancel() {
            alert("Avbryt");
        },
        async runServerValidation() {
            // simulera att första fältet är felaktigt vid servervalidering
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const field1 = getElementFromVueRef(this.$refs.field1);
            ValidationService.setError(field1, "Serverfel");
            return FValidationFormAction.CANCEL;
        },
    },
});
</script>
<template>
    <f-validation-form :before-submit="runServerValidation" @submit="onSubmit">
        <template #error-message> Oj, du har glömt fylla i något. Gå till: </template>
        <template #default>
            <f-text-field
                ref="field1"
                v-model="field1"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
            >
                Ett inmatningsfält
            </f-text-field>
            <f-text-field
                v-model="field2"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
            >
                Ett annat inmatningsfält
            </f-text-field>
            <div class="button-group">
                <button
                    type="submit"
                    class="button button-group__item button--primary button--large"
                >
                    Spara
                </button>
                <button
                    type="button"
                    class="button button-group__item button--secondary button--large"
                    @click="onCancel"
                >
                    Avbryt
                </button>
            </div>
        </template>
    </f-validation-form>
</template>
