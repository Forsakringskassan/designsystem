<script>
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";

export default defineComponent({
    name: "FIconRotate",
    components: { FIcon },
});
</script>

<template>
    <div>
        <f-icon name="pic" rotate="90"></f-icon>
        <f-icon name="pic" rotate="180"></f-icon>
        <f-icon name="pic" rotate="270"></f-icon>
    </div>
</template>
