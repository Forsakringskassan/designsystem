<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts">
import { ElementIdService, formatNumber, parseNumber } from "@fkui/logic";
import { onMounted, ref, useTemplateRef, watch, watchEffect } from "vue";
import { FLabel } from "@fkui/vue";
import { type UpdateEvent, enableValidation, addValidatorsToElement } from "@fkui/validation";
import { useValidation } from "./use-validation";

const emit = defineEmits<{
    "update:is-valid": [value: boolean];
}>();

const props = defineProps<{
    isValid?: boolean,
}>();

const id = ElementIdService.generateElementId();
const modelValue = defineModel();
const rawValue = ref<string>("");

const element = useTemplateRef("input");
const { value, isValid, attributes, showValidationError, validationMessage } = useValidation(element, {
    getViewValue() {
        return rawValue.value;
    },
    getModelValue(): number {
        return modelValue.value;
    },
    initial: modelValue.value,
    parser(value: string): number {
        return parseNumber(value)!;
    },
    formatter(value: number): string {
        return formatNumber(value)!;
    },
    event: ["blur"],
});

watchEffect(() => {
    modelValue.value = value.value;
});

watch(isValid, (isValid) => {
    emit("update:is-valid", isValid);
}, { initial: true });

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
        v-model="rawValue"
        type="text"
    />
    <pre>{{ JSON.stringify({ showValidationError, validationMessage, value, rawValue, modelValue }, null, 2) }}</pre>
</template>
