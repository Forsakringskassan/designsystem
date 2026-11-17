<script setup lang="ts">
/**
 * Internal modal for the "delete" operation of `FCrudDataset`.
 *
 * Opened with `openModal()` so slots cannot be passed, the content is instead
 * passed as a functional component rendering the consumer slot. The `close`
 * and `confirm` listeners falls through to `FConfirmModal`.
 */
import { type FunctionalComponent } from "vue";
import { FConfirmModal } from "../FModal";
import { type FModalButtonDescriptor } from "../FModal/modal-button";

defineProps<{
    heading: string;
    buttons: FModalButtonDescriptor[];
    content: FunctionalComponent;
}>();
</script>

<template>
    <f-confirm-modal :buttons>
        <template #heading>{{ heading }}</template>
        <template #content>
            <component :is="content" />
        </template>
    </f-confirm-modal>
</template>
