<script>
import { defineComponent } from "vue";
import { FMessageBox } from "@fkui/vue";

export default defineComponent({
    name: "FMessageBoxContext",
    components: { FMessageBox },
});
</script>

<template>
    <f-message-box type="info" :provide-screen-reader-context="false">
        <template #default="{ headingSlotClass }">
            <h2 :class="headingSlotClass">
                En rubrik som fristående tydligt förklarar sin kontext när den får fokus
            </h2>
            <p>Komponenten kommer vid fokus inte längre att läsa texten Informationsmeddelande.</p>
        </template>
    </f-message-box>
</template>
