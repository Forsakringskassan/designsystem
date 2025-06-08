<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts">
import { ElementIdService, formatNumber, parseNumber } from "@fkui/logic";
import { onMounted, ref, useTemplateRef } from "vue";
import { FLabel } from "@fkui/vue";
import { enableValidation, addValidatorsToElement, UpdateEvent } from "@fkui/validation";

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
        getModelValue(): number {
            return 5;
        },
        parser(value: string): number {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- asdf
            return parseNumber(value)!;
        },
        formatter(value: number): string {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- asdf
            return formatNumber(value)!;
        },
        event: ["blur"],
    });
    addValidatorsToElement(element.value, {
        number: {},
        minValue: { limit: 5 },
    });
});

function onValidationUpdate(event: UpdateEvent): void {
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
    <input :id ref="input" v-model="viewValue" type="text" @validation:update="onValidationUpdate" />
    <pre>{{ JSON.stringify({ viewValue }) }}</pre>
</template>
