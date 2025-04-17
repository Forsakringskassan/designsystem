<script lang="ts">
import { defineComponent } from "vue";
import { FTextField, FValidationForm } from "@fkui/vue";

export default defineComponent({
    name: "RequiredExample",
    components: { FTextField, FValidationForm },
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
            <button
                id="submit"
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
    </f-validation-form>
</template>
