<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script setup lang="ts">
import { defineComponent, ref } from "vue";
import ExampleModal from "./ExampleModal.vue";
import { FButton, useModal } from "@fkui/vue";

const { formModal } = useModal();
const result = ref("");

async function onClick(): Promise<void> {
    result.value = "";
    try {
        result.value = await formModal(ExampleModal, {
            props: {
                frukt: "Äpple",
            },
        });
    } catch {
        console.log("användaren avbröt");
    }
}
</script>

<template>
    <f-button size="medium" variant="secondary" @click="onClick"> Öppna Modal </f-button>
    <div v-if="result">
        <pre>Modalen stängdes med resultatet:</pre>
        <pre id="api-result">{{ result }}</pre>
    </div>
</template>
