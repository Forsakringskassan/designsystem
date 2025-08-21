<script lang="ts">
import { defineComponent } from "vue";
import { FIcon, FMessageBox } from "@fkui/vue";

export default defineComponent({
    name: "FMessageBoxIconLink",
    components: { FMessageBox, FIcon },
});
</script>

<template>
    <f-message-box type="info">
        <template #default="{ headingSlotClass }">
            <h2 :class="headingSlotClass">Meddelanderuta med länk</h2>
            <p>Glöm inte att klicka på länken.</p>
            <a class="anchor anchor--block" href="javascript:" target="_blank">
                Länk
                <span class="sr-only"> öppnas i nytt fönster </span>
                <f-icon name="new-window"></f-icon>
            </a>
        </template>
    </f-message-box>
</template>
