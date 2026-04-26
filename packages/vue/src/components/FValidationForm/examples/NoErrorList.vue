<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FTextField, FValidationForm } from "@fkui/vue";

export default defineComponent({
    name: "NoErrorListExample",
    components: { FButton, FTextField, FValidationForm },
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
    <f-validation-form :use-error-list="false" @submit="onSubmit">
        <template #error-message> <span> Custom message </span> </template>
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
                <f-button
                    class="button-group__item"
                    data-test="submit-button"
                    size="large"
                    type="submit"
                >
                    Spara
                </f-button>
                <f-button
                    class="button-group__item"
                    data-test="cancel-button"
                    size="large"
                    variant="secondary"
                    @click="onCancel"
                >
                    Avbryt
                </f-button>
            </div>
        </template>
    </f-validation-form>
</template>
