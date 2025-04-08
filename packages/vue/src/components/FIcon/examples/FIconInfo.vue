<script>
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";

export default defineComponent({
    name: "FIconInfo",
    components: { FIcon },
});
</script>

<template>
    <f-icon name="pen" tabindex="0">
        <title>Redigera</title>
    </f-icon>
</template>
