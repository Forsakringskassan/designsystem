<script>
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";

export default defineComponent({
    name: "FIconFlip",
    components: { FIcon },
});
</script>

<template>
    <div>
        <f-icon name="pic" flip="horizontal"></f-icon>
        <f-icon name="pic" flip="vertical"></f-icon>
    </div>
</template>
