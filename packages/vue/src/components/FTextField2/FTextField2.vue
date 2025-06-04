<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts">
import { ElementIdService } from "@fkui/logic";
import { ref } from "vue";
import { FLabel } from "@fkui/vue";

const hasError = ref(false);
const validationMessage = ref("Fel fel fel!");
const id = ElementIdService.generateElementId();
const viewValue = defineModel<string>();

function onBlur() {
    const result = validate({ getViewValue, getModelValue, validators });
}
</script>

<template>
    <f-label :for="id">
        <template #default>
            <!-- @slot Slot for label content. -->
            <slot name="default"> </slot>
        </template>

        <template #error-message>
            <!--
                    @slot Slot for displaying single or several error messages.
                    @binding {boolean} hasError Set to true when a validation error is present
                    @binding {string} validationMessage Descriptive validation error message for current error
                -->
            <slot name="error-message" v-bind="{ hasError, validationMessage }">
                <template v-if="hasError">{{ validationMessage }}</template>
            </slot>
        </template>
    </f-label>
    <input :id v-model="viewValue" type="text" @blur="onBlur" />
</template>
