<script>
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";

export default defineComponent({
    name: "FIconStack",
    components: { FIcon },
});
</script>

<template>
    <div class="icon-stack">
        <f-icon name="pdf"></f-icon>
        <f-icon name="success"></f-icon>
    </div>
</template>
