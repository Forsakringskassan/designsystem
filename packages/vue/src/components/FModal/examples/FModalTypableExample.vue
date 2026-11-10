<script setup lang="ts">
import { ref } from "vue";
import ConfigurableModal from "./ConfigurableModal.vue";
import { FButton, FSelectField, useModal } from "@fkui/vue";

const { openModal } = useModal();
const modalType = ref("");

async function onClick(): Promise<void> {
    await openModal(ConfigurableModal, { props: { type: modalType.value } });
}
</script>

<template>
    <!-- html-validate-disable-next no-inline-style -- example -->
    <div style="width: 200px">
        <f-select-field v-model="modalType">
            <template #label> Variant </template>
            <option value="">Standard</option>
            <option value="information">Information</option>
            <option value="warning">Varning</option>
            <option value="error">Fel</option>
        </f-select-field>

        <f-button size="medium" variant="secondary" @click="onClick"> Visa </f-button>
    </div>
</template>
