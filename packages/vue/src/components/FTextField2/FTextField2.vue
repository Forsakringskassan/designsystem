<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts" generic="T">
import { ElementIdService } from "@fkui/logic";
import { ref, useTemplateRef, watch } from "vue";
import { FLabel } from "@fkui/vue";
import { type ValidityModel, useValidation } from "@fkui/validation";

const id = ElementIdService.generateElementId();

type ParserFn<U> = (value: string) => U;
type FormatterFn<U> = (value: U) => string;

const props = defineProps<{
    modelValue?: T | undefined;
    parser?: ParserFn<T>;
    formatter?: FormatterFn<T>;
}>();

const emit = defineEmits<{
    "update:modelValue": [value: T | undefined];
}>();

const modelValue = ref<T | undefined>(props.modelValue);
const internalValue = ref<T | undefined>();
const viewValue = ref<string>(formatterFn(modelValue.value));
const validity = defineModel<ValidityModel>("validity", {
    required: false,
    default: { isValid: false },
});

watch(
    () => props.modelValue,
    (value) => {
        if (typeof value === "undefined") {
            return;
        }
        if (value === internalValue.value) {
            return;
        }
        internalValue.value = value;
    },
    { immediate: true },
);

watch(
    () => internalValue.value,
    (value) => {
        modelValue.value = value;
        emit("update:modelValue", value);
    },
);

const element = useTemplateRef<HTMLElement>("input");
const rootElement = useTemplateRef<HTMLElement>("root");
const { attributes, showValidationError, validationMessage, configuration } = useValidation<string, T>(
    element,
    rootElement,
    {
        viewValue,
        modelValue: internalValue,
        validity,
        parser: parseFn,
        formatter: formatterFn,
        event: ["blur"],
    },
);

function formatterFn(value: T | undefined): string {
    if (typeof value === "undefined") {
        return "";
    }
    return props.formatter ? props.formatter(value) : String(value);
}

function parseFn(value: string): T {
    return props.parser ? props.parser(value) : (value as T);
}
</script>

<template>
    <div ref="root">
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
            :ariaInvalid="attributes.ariaInvalid.value"
            :required="attributes.required.value"
            type="text"
        />
        <pre>{{ JSON.stringify({ viewValue, modelValue, validity, configuration }, null, 2) }}</pre>
    </div>
</template>
