<script>
import { defineComponent } from "vue";
import { confirmModal } from "@fkui/vue";

export default defineComponent({
    name: "FConfirmModalApiExample",
    data() {
        return {
            frukt: {
                namn: "Mango",
            },
        };
    },
    methods: {
        confirmRemove(frukt) {
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
        <button type="button" class="button button--secondary" @click="onClick">Ta bort</button>
    </div>
</template>
