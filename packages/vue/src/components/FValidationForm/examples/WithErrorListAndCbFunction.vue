<script>
import { defineComponent } from "vue";
import { FTextField, FValidationForm, FExpandablePanel } from "@fkui/vue";

export default defineComponent({
    name: "ErrorListWithOptionsExample",
    components: { FTextField, FValidationForm, FExpandablePanel },
    data() {
        return {
            field1: "",
            field2: "",
            expand: false,
        };
    },
    methods: {
        onSubmit() {
            alert("Spara");
        },
        onCancel() {
            this.expand = false;
        },
        onToggle() {
            this.expand = !this.expand;
        },
        expandPanel() {
            this.expand = true;
        },
    },
});
</script>
<template>
    <f-validation-form :error-list-before-navigate="expandPanel" @submit="onSubmit">
        <template #error-message> <span> Custom message </span> </template>
        <template #default>
            <f-expandable-panel :expanded="expand" @toggle="onToggle">
                <template #title>Panel to be expanded</template>
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
                </template>
            </f-expandable-panel>
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
