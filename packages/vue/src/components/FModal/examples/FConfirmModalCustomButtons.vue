<script lang="ts">
import { defineComponent } from "vue";
import { type ModalResult, openModal, FConfirmModal } from "@fkui/vue";

export default defineComponent({
    name: "FConfirmModalCustomButtons",
    data() {
        return {
            action: undefined as ModalResult<void> | undefined,
            isOpen: false,
            threeButtons: [
                {
                    label: "Ja, ta bort",
                    type: "primary",
                    screenreader: "telefonnumret",
                    event: "confirm",
                },
                { label: "Nej, uppdatera telefonnumret", event: "update" },
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
                    buttons: this.threeButtons,
                    size: "large",
                },
            });
        },
    },
});
</script>

<template>
    <div>
        <button type="button" class="button button--secondary" @click="onClick">Tre knappar</button>
        <pre> Modalen stängdes med resultatet: {{ action }} </pre>
    </div>
</template>
