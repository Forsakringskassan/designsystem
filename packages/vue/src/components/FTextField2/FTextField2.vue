<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts">
import { ElementIdService, formatNumber, parseNumber } from "@fkui/logic";
import { onMounted, ref, useTemplateRef } from "vue";
import { FLabel } from "@fkui/vue";
import { type UpdateEvent, enableValidation, addValidatorsToElement } from "@fkui/validation";
import { useValidation } from "./use-validation";

// const hasError = ref(false);
// const validationMessage = ref("Fel fel fel!");
const id = ElementIdService.generateElementId();
const viewValue = defineModel<string>();

const element = useTemplateRef("input");
const { ariaInvalid, showValidationError, validationMessage } = useValidation(element, {
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
    <input :id :ariaInvalid ref="input" v-model="viewValue" type="text" />
    <pre>{{ JSON.stringify({ showValidationError, validationMessage, viewValue }) }}</pre>
</template>
