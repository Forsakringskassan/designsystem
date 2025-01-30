<script setup lang="ts">
import { useModal } from "@fkui/vue";
import MyAwesomeModal from "./MyAwesomeModal.vue";

const { openModal } = useModal();

async function onClick(): Promise<void> {
    await openModal(MyAwesomeModal);
}
</script>

<template>
    <div>
        <button type="button" class="button button--secondary" @click="onClick">Open</button>
    </div>
</template>
