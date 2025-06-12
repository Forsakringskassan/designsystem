<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts">
import { ElementIdService, formatNumber, parseNumber } from "@fkui/logic";
import { onMounted, ref, useTemplateRef, watch, watchEffect } from "vue";
import { FLabel } from "@fkui/vue";
import { type UpdateEvent, enableValidation, addValidatorsToElement } from "@fkui/validation";
import { type Validity, useValidation } from "./use-validation";

const id = ElementIdService.generateElementId();

const modelValue = defineModel<string | number>({ default: "" });
const viewValue = ref<string>(formatNumber(modelValue.value) ?? "");
const validity = defineModel<Validity>("validity", {
    required: false,
    default: { isValid: false },
});

const element = useTemplateRef("input");
const { attributes, showValidationError, validationMessage } = useValidation(element, {
    viewValue,
    modelValue,
    validity,
    parser(value: string): number {
        return parseNumber(value)!;
    },
    formatter(value: number): string {
        return formatNumber(value)!;
    },
    event: ["blur"],
});

/* workaround until plugin directive is in place */
onMounted(() => {
    if (!element.value) {
        return;
    }
    addValidatorsToElement(element.value, {
        required: {},
        number: {},
        minValue: { limit: 5 },
    });
});
</script>

<template>
    <f-label :for="id">
        <template #default>
            <!-- @slot Slot for label content. -->
            <slot name="default"> </slot>
        </template>

        <template #error-message>
            <template v-if="showValidationError">{{ validationMessage }}</template>
        </template>
    </f-label>
    <!-- [html-validate-disable-block fkui/required-max-length -- temp] -->
    <input
        :id
        :ariaInvalid="attributes.ariaInvalid"
        :required="attributes.required.value"
        ref="input"
        v-model="viewValue"
        type="text"
    />
    <pre>{{ JSON.stringify({ showValidationError, validationMessage, viewValue, modelValue, validity }, null, 2) }}</pre>
</template>
