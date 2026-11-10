<script setup lang="ts">
import { ref } from "vue";
import ConfigurableModal from "./ConfigurableModal.vue";
import { FButton, FSelectField, useModal } from "@fkui/vue";

const { openModal } = useModal();
const modalSize = ref("small");

async function onClick(): Promise<void> {
    await openModal(ConfigurableModal, { props: { size: modalSize.value } });
}
</script>

<template>
    <!-- html-validate-disable-next no-inline-style -- example -->
    <div style="width: 200px">
        <f-select-field v-model="modalSize">
            <template #label> Storlek </template>
            <option value="small">Liten</option>
            <option value="medium">Medium</option>
            <option value="large">Stor</option>
            <option value="fullwidth">Fullbredd</option>
        </f-select-field>

        <f-button size="medium" variant="secondary" @click="onClick"> Visa </f-button>
    </div>
</template>
