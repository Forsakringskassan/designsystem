<script>
import { defineComponent } from "vue";
import { FFileSelector } from "@fkui/vue";

export default defineComponent({
    name: "FFileSelectorDisabled",
    components: { FFileSelector },
});
</script>

<template>
    <f-file-selector id="dis" accept="image/jpeg, image/tiff" disabled>
        Lägg till fil
    </f-file-selector>
</template>
