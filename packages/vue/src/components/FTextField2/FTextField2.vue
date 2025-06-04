<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts">
import { ElementIdService, formatNumber, parseNumber } from "@fkui/logic";
import { onMounted, ref, useTemplateRef } from "vue";
import { FLabel } from "@fkui/vue";
import { enableValidation, validateElement } from "../../vite-dev/ValidationService2";
import { min, number, personnummer } from "../../vite-dev/validators";

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
        parser(value: string): number {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- asdf
            return parseNumber(value)!;
        },
        formatter(value: number): string {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- asdf
            return formatNumber(value)!;
        },
        validators: [number, min],
    });
    console.log(element.value);
    //addValidators(Element, ["personnummer"], config);
});

async function onBlur(): Promise<void> {
    if (!element.value) {
        return;
    }
    // @TODO returvärde med data
    await validateElement(element.value);
}

function onFoo(event: CustomEvent): void {
    hasError.value = !event.detail.isValid;
    validationMessage.value = event.detail.message;
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
    <input :id ref="input" v-model="viewValue" type="text" @blur="onBlur" @foo="onFoo" />
</template>
