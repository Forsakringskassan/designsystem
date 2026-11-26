<script setup lang="ts">
import { ref } from "vue";
import { FButton, FPhoneTextField, FValidationForm } from "@fkui/vue";

const phone = ref("");

function onSubmit(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 5000));
}

function onCancel(): void {
    alert("Avbryt");
}
</script>

<template>
    <f-validation-form @submit="onSubmit">
        <template #error-message> Oj, du har glömt fylla i något. Gå till: </template>
        <template #default>
            <f-phone-text-field id="field1" v-model="phone"></f-phone-text-field>

            <div class="button-group">
                <f-button
                    data-test="submit-button"
                    variant="primary"
                    class="button-group__item"
                    size="large"
                    type="submit"
                >
                    Spara
                </f-button>
                <f-button
                    data-test="cancel-button"
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
