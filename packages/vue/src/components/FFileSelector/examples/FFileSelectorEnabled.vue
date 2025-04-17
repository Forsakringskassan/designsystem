<script>
import { defineComponent } from "vue";
import { FFileSelector } from "@fkui/vue";

export default defineComponent({
    name: "FFileSelectorEnabled",
    components: { FFileSelector },
});
</script>

<template>
    <f-file-selector accept="application/pdf, image/jpeg, image/tiff, image/png">
        Lägg till fil
    </f-file-selector>
</template>
