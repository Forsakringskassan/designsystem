<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FExpandablePanel, FTextField, FValidationForm } from "@fkui/vue";

export default defineComponent({
    name: "ErrorListWithOptionsExample",
    components: { FButton, FExpandablePanel, FTextField, FValidationForm },
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
                    type="button"
                    variant="secondary"
                    @click="onCancel"
                >
                    Avbryt
                </f-button>
            </div>
        </template>
    </f-validation-form>
</template>
