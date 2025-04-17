<script>
import { defineComponent } from "vue";
import { FMessageBox } from "@fkui/vue";

export default defineComponent({
    name: "FMessageBoxContextPartial",
    components: { FMessageBox },
});
</script>

<template>
    <f-message-box type="info" :provide-screen-reader-context="false">
        <template #default="{ headingSlotClass }">
            <h2 :class="headingSlotClass">
                <span class="sr-only"> Skärmläsarinformation kombinerad med befintlig titel </span>
                En rubrik som kombineras med en skärmläsartext för att tydligt förklara sin kontext
                när den får fokus
            </h2>
            <p>Komponenten kommer vid fokus inte längre att läsa texten Informationsmeddelande.</p>
        </template>
    </f-message-box>
</template>
