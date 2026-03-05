<script lang="ts">
import { defineComponent } from "vue";
import { FButton, confirmModal } from "@fkui/vue";

interface Frukt {
    namn: string;
}

export default defineComponent({
    name: "FConfirmModalApiExample",
    components: { FButton },
    data() {
        return {
            frukt: {
                namn: "Mango",
            } satisfies Frukt,
        };
    },
    methods: {
        confirmRemove(frukt: Frukt) {
            return confirmModal(this, {
                heading: "Ta bort frukt",
                content: `Är du säker att du vill ta bort "${frukt.namn}"?`,
                confirm: "Ja, ta bort",
                dismiss: "Nej, behåll",
            });
        },
        async onClick() {
            if (await this.confirmRemove(this.frukt)) {
                alert("Bekräftade");
            }
        },
    },
});
</script>

<template>
    <div>
        <f-button variant="secondary" @click="onClick">Ta bort</f-button>
    </div>
</template>
