<script setup lang="ts">
/**
 * Internal modal for the "add" and "modify" operations of `FCrudDataset`.
 *
 * Opened with `openModal()` so slots cannot be passed, the content is instead
 * passed as a functional component rendering the consumer slot. The `close`
 * and `submit` listeners falls through to `FFormModal`.
 */
import { type FunctionalComponent } from "vue";
import { FFormModal } from "../FModal";
import { type FModalButtonDescriptor } from "../FModal/modal-button";
import { type FModalSize } from "../FModal/sizes";
import { type FValidationFormCallback } from "../FValidationForm";

defineProps<{
    header: string;
    ariaCloseText: string;
    buttons: FModalButtonDescriptor[];
    size: FModalSize | "fullscreen" | "";
    beforeSubmit: FValidationFormCallback;
    beforeValidation: FValidationFormCallback;
    content: FunctionalComponent;
}>();
</script>

<template>
    <f-form-modal :aria-close-text :buttons :size :use-error-list="false" :before-submit :before-validation>
        <template #header>{{ header }}</template>
        <template #input-text-fields>
            <component :is="content" />
        </template>
    </f-form-modal>
</template>
