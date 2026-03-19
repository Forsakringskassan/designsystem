<script setup lang="ts">
import { FButton, useModal } from "@fkui/vue";
import MyAwesomeModal from "./MyAwesomeModal.vue";

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
