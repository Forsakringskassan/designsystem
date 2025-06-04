<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts">
import { ElementIdService } from "@fkui/logic";
import { onMounted, ref, useTemplateRef } from "vue";
import { FLabel } from "@fkui/vue";
import { enableValidation, validateElement } from "../../vite-dev/ValidationService2";
import { personnummer } from "../../vite-dev/validators";

const hasError = ref(false);
const validationMessage = ref("Fel fel fel!");
const id = ElementIdService.generateElementId();
const viewValue = defineModel<string>();

const element = useTemplateRef("input");

onMounted(() => {
    if (!element.value) {
        return;
    }
    enableValidation(element.value, {
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
    //addValidator(Element, "personnummer", config);
});

function onBlur(): void {
    if (!element.value) {
        return;
    }
    const result = validateElement(element.value);
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
    <input :id v-model="viewValue" type="text" ref="input" @blur="onBlur" />
</template>
