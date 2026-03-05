<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FTextField, FValidationForm } from "@fkui/vue";

export default defineComponent({
    name: "RequiredExample",
    components: { FButton, FTextField, FValidationForm },
    data() {
        return { model: "" };
    },
    methods: {
        onSubmit(): void {
            alert("Spara");
        },
        onCancel(): void {
            alert("Avbryt");
        },
    },
});
</script>

<template>
    <f-validation-form :use-error-list="false" @submit="onSubmit">
        <f-text-field v-model="model" v-validation.required> Fyll i minst ett tecken </f-text-field>
        <div class="button-group">
            <f-button id="submit" class="button-group__item" size="large" type="submit">
                Spara
            </f-button>
            <f-button class="button-group__item" size="large" variant="secondary" @click="onCancel">
                Avbryt
            </f-button>
        </div>
    </f-validation-form>
</template>
