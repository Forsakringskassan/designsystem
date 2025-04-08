<script>
import { defineComponent } from "vue";
import { FMessageBox } from "@fkui/vue";

export default defineComponent({
    name: "FMessageBoxContextSeparate",
    components: { FMessageBox },
});
</script>

<template>
    <f-message-box type="info" :provide-screen-reader-context="false">
        <template #default="{ headingSlotClass }">
            <h2 :class="headingSlotClass">
                <span class="sr-only">
                    Skärmläsarinformation som fullständigt ersätter rubriken och som innehåller
                    tydlig kontext
                </span>
                <span class="aria-hidden"> En rubrik som inte förklarar sin kontext </span>
            </h2>
            <p>Komponenten kommer vid fokus inte längre att läsa texten Informationsmeddelande.</p>
        </template>
    </f-message-box>
</template>
