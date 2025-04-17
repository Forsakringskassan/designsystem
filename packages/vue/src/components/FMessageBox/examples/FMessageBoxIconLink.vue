<script>
import { defineComponent } from "vue";
import { FMessageBox, FIcon } from "@fkui/vue";

export default defineComponent({
    name: "FMessageBoxIconLink",
    components: { FMessageBox, FIcon },
});
</script>

<template>
    <f-message-box type="info">
        <template #default="{ headingSlotClass }">
            <h2 :class="headingSlotClass">Meddelanderuta med länk och ikon i meddelande</h2>
            <p>
                <a class="anchor" href="javascript:" target="_blank">
                    Länk
                    <span class="sr-only"> öppnas i nytt fönster </span>
                </a>
                <f-icon name="new-window"></f-icon>
            </p>
        </template>
    </f-message-box>
</template>
