<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts" generic="T">
import { ElementIdService } from "@fkui/logic";
import { onMounted, ref, useTemplateRef } from "vue";
import { FLabel } from "@fkui/vue";
import { addValidatorsToElement } from "@fkui/validation";
import { type Validity, useValidation } from "./use-validation";

const id = ElementIdService.generateElementId();

type ParserFn<U> = (value: string) => U;
type FormatterFn<U> = (value: U) => string;

const props = defineProps<{
    parser?: ParserFn<T>;
    formatter?: FormatterFn<T>;
}>();

const modelValue = defineModel<string | T>({ default: "" });
const viewValue = ref<string>(props.formatter ? props.formatter(modelValue.value as T) : (modelValue.value as string));
const validity = defineModel<Validity>("validity", {
    required: false,
    default: { isValid: false },
});

const element = useTemplateRef("input");
const { attributes, showValidationError, validationMessage } = useValidation<string, T>(element, {
    viewValue,
    modelValue,
    validity,
    parser(value) {
        return props.parser ? props.parser(value) : (value as T);
    },
    formatter(value) {
        return props.formatter ? props.formatter(value) : (value as string);
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
        ref="input"
        v-model="viewValue"
        :ariaInvalid="attributes.ariaInvalid"
        :required="attributes.required.value"
        type="text"
    />
    <pre>{{
        JSON.stringify({ showValidationError, validationMessage, viewValue, modelValue, validity }, null, 2)
    }}</pre>
</template>
