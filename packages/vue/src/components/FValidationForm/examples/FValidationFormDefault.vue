<script>
import { defineComponent } from "vue";
import {
    FCheckboxField,
    FEmailTextField,
    FFieldset,
    FRadioField,
    FPhoneTextField,
    FValidationForm,
} from "@fkui/vue";

export default defineComponent({
    name: "FValidationFormDefault",
    components: {
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
