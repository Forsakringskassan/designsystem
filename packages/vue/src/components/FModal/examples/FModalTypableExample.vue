<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import ConfigurableModal from "./ConfigurableModal.vue";
import { FButton, FSelectField, useModal } from "@fkui/vue";

const wrapperRef = useTemplateRef("wrapper");

const { openModal } = useModal();
const modalSize = ref("");

onMounted(() => {
    assertRef(wrapperRef);
    wrapperRef.value.style.width = "200px";
});

async function onClick(): Promise<void> {
    await openModal(ConfigurableModal, { props: { size: modalSize.value } });
}
</script>

<template>
    <div ref="wrapper">
        <f-select-field id="dropplista" v-model="modalSize">
            <template #label> Storlek </template>
            <option value="small">Liten</option>
            <option value="medium">Medium</option>
            <option value="large">Stor</option>
            <option value="fullwidth">Fullbredd</option>
        </f-select-field>

        <f-button class="button-group__item" size="medium" variant="secondary" @click="onClick">
            Visa</f-button
        >
    </div>
</template>
