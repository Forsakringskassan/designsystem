<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import ConfigurableModal from "./ConfigurableModal.vue";
import { FButton, FSelectField, useModal } from "@fkui/vue";

const wrapperRef = useTemplateRef("wrapper");

const { openModal } = useModal();
const modalType = ref("");

onMounted(() => {
    assertRef(wrapperRef);
    wrapperRef.value.style.width = "200px";
});

async function onClick(): Promise<void> {
    await openModal(ConfigurableModal, { props: { type: modalType.value } });
}
</script>

<template>
    <div ref="wrapper">
        <f-select-field id="dropplista" v-model="modalType">
            <template #label> Variant </template>
            <option value="">Standard</option>
            <option value="information">Information</option>
            <option value="warning">Varning</option>
            <option value="error">Fel</option>
        </f-select-field>

        <f-button class="button-group__item" size="medium" variant="secondary" @click="onClick">
            Visa</f-button
        >
    </div>
</template>
