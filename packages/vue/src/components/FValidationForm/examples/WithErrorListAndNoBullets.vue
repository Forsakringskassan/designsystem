<script>
import { defineComponent } from "vue";
import { FTextField, FValidationForm } from "@fkui/vue";

export default defineComponent({
    name: "WithErrorListAndNoBullets",
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
    },
});
</script>
<template>
    <f-validation-form :error-list-bullets="false" @submit="onSubmit">
        <template #error-message> <span> No Bullets </span> </template>
        <template #default>
            <f-text-field
                id="field1"
                v-model="field1"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
            >
                Field1
            </f-text-field>
            <f-text-field
                id="field2"
                v-model="field2"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
            >
                Field2
            </f-text-field>
            <div class="button-group">
                <button
                    type="submit"
                    data-test="submit-button"
                    class="button button-group__item button--primary button--large"
                >
                    Spara
                </button>
                <button
                    type="button"
                    data-test="cancel-button"
                    class="button button-group__item button--secondary button--large"
                    @click="onCancel"
                >
                    Avbryt
                </button>
            </div>
        </template>
    </f-validation-form>
</template>
