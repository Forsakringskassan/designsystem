<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import {
    FButton,
    FCheckboxField,
    FEmailTextField,
    FFieldset,
    FPhoneTextField,
    FRadioField,
    FValidationForm,
} from "@fkui/vue";

export default defineComponent({
    name: "FValidationFormDefault",
    components: {
        FButton,
        FCheckboxField,
        FEmailTextField,
        FFieldset,
        FRadioField,
        FPhoneTextField,
        FValidationForm,
    },
    data() {
        return {
            phone: "",
            phoneAlt: "",
            email: "",
            info: "",
            tips: false,
            news: false,
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
    <f-validation-form @submit="onSubmit">
        <template #error-message> Oj, du har glömt fylla i något. Gå till: </template>
        <template #default>
            <f-phone-text-field v-model="phone" v-validation.required></f-phone-text-field>

            <f-phone-text-field v-model="phoneAlt">
                Alternativt telefonnummer (frivilligt)
            </f-phone-text-field>

            <f-email-text-field v-model="email" v-validation.required></f-email-text-field>

            <f-fieldset v-validation.required name="info">
                <template #label> Hur vill du få information från oss? </template>

                <template #default>
                    <f-radio-field v-model="info" value="mejl"> Mejl </f-radio-field>
                    <f-radio-field v-model="info" value="sms"> Sms </f-radio-field>
                </template>
            </f-fieldset>

            <f-fieldset v-validation.required name="type">
                <template #label> Vilken information vill du ha? </template>

                <template #default>
                    <f-checkbox-field v-model="news" :value="true"> Nyheter </f-checkbox-field>
                    <f-checkbox-field v-model="tips" :value="true"> Tips </f-checkbox-field>
                </template>
            </f-fieldset>

            <div class="button-group">
                <f-button class="button-group__item" size="large" type="submit">Spara</f-button>
                <f-button
                    class="button-group__item"
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
