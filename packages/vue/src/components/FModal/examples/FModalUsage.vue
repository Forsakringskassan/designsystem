<script setup lang="ts">
import MyAwesomeModal from "./MyAwesomeModal.vue";
import { FButton, useModal } from "@fkui/vue";

const { openModal } = useModal();

async function onClick(): Promise<void> {
    await openModal(MyAwesomeModal);
}
</script>

<template>
    <div>
        <f-button variant="secondary" @click="onClick">Open</f-button>
    </div>
</template>
