<script setup lang="ts">
import { ref } from "vue";
import { FButton, FDatepickerField, FLabel, FSelectField, FTooltip, useModal } from "@fkui/vue";
import CloseButtonModal from "./CloseButtonModal.vue";

const date = ref("");
const modalType = ref<"" | "information" | "warning" | "error" | "form">("");
const { openModal } = useModal();

async function onOpenModal(): Promise<void> {
    await openModal(CloseButtonModal, { props: { type: modalType.value } });
}
</script>

<template>
    <main class="sandbox-root">
        <h1>Gemensam stängknapp</h1>
        <p>Prova stängknappen i datumväljare, tooltip och modal.</p>

        <section id="datepicker" aria-labelledby="datepicker-heading">
            <h2 id="datepicker-heading">Datumväljare</h2>
            <f-datepicker-field v-model="date">Datum</f-datepicker-field>
        </section>

        <section id="tooltip" aria-labelledby="tooltip-heading">
            <h2 id="tooltip-heading">Tooltip</h2>
            <f-label>
                Etikett
                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer om etiketten">
                        <template #body>Här finns mer information om fältet.</template>
                    </f-tooltip>
                </template>
            </f-label>
        </section>

        <section id="modal" aria-labelledby="modal-heading">
            <h2 id="modal-heading">Modal</h2>
            <f-select-field v-model="modalType">
                <template #label>Typ av modal</template>
                <option value="">Standard</option>
                <option value="form">Formulärsmodal</option>
                <option value="information">Informationsmodal</option>
                <option value="warning">Varningsmodal</option>
                <option value="error">Felmodal</option>
            </f-select-field>
            <f-button size="medium" variant="secondary" @click="onOpenModal">Öppna modal</f-button>
        </section>
    </main>
</template>

<style scoped>
.sandbox-root {
    max-width: 75rem;
    margin: 2rem auto;
    padding: 0 1rem;
}

section {
    margin-top: 3rem;
    scroll-margin-top: 1rem;
}
</style>
