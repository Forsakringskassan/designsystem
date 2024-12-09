<template>
    <div class="f-confirm-modal">
        <button v-if="!action" type="button" class="button button--secondary" @click="onClick">
            Ta bort
        </button>
        <template v-if="action">
            <button id="addButton" type="button" class="button button--secondary">Lägg till</button>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { type ModalResult, openModal, FConfirmModal } from "@fkui/vue";
import { focus } from "@fkui/logic";

export default defineComponent({
    name: "FConfirmModalExample",
    data() {
        return {
            action: undefined as ModalResult<void> | undefined,
            isOpen: false,
            buttons: [
                {
                    label: "Ja, ta bort",
                    type: "primary",
                    screenreader: "telefonnumret",
                    event: "confirm",
                },
                { label: "Nej, ta inte bort", screenreader: "telefonnumret", event: "dismiss" },
            ],
        };
    },
    methods: {
        async onClick() {
            this.action = await openModal(this, FConfirmModal, {
                props: {
                    heading: "Ta bort telefonnummer",
                    content: "Vill du ta bort ditt telefonnummer?",
                    buttons: this.buttons,
                    size: "large",
                    focus: "open",
                },
            });
            await nextTick();
            focus(document.getElementById("addButton"));
        },
    },
});
</script>
