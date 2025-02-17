<script setup lang="ts">
import { useModal } from "..";
import OptionsModal from "./options-modal.vue";
import CompositionModal from "./composition-modal.vue";

const { openModal } = useModal();

async function openComposition() {
    console.log(await openModal(CompositionModal));
}

async function openOptions() {
    console.log(await openModal(OptionsModal));
}
</script>

<template>
    <div class="container">
        <button type="button" @click="openComposition">Composition</button>
        <button type="button" @click="openOptions">Options</button>
    </div>
</template>
