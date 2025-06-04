<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts">
import { ElementIdService } from "@fkui/logic";
import { ref } from "vue";
import { FLabel } from "@fkui/vue";
import { validateElement } from "../../vite-dev/ValidationService2";
import { personnummer } from "../../vite-dev/validators";

const hasError = ref(false);
const validationMessage = ref("Fel fel fel!");
const id = ElementIdService.generateElementId();
const viewValue = defineModel<string>();

function onBlur(): void {
    const result = validateElement({
        getViewValue() {
            return viewValue.value;
        },
        getModelValue() {
            return "model value not implemented";
        },
        parser(value) {
            return value;
        },
        formatter(value) {
            return value;
        },
        validators: [personnummer],
    });
    hasError.value = !result;
    console.log({ result });
}
</script>

<template>
    <f-label :for="id">
        <template #default>
            <!-- @slot Slot for label content. -->
            <slot name="default"> </slot>
        </template>

        <template #error-message>
            <template v-if="hasError">{{ validationMessage }}</template>
        </template>
    </f-label>
    <input :id v-model="viewValue" type="text" @blur="onBlur" />
</template>
