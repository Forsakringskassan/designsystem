<script>
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";

export default defineComponent({
    name: "FIconCircleBackground",
    components: { FIcon },
});
</script>

<template>
    <div>
        <div>
            <div class="icon-stack icon-stack--circle">
                <f-icon name="circle"></f-icon>
                <f-icon name="success"></f-icon>
            </div>
            <div class="icon-stack icon-stack--circle">
                <f-icon name="circle"></f-icon>
                <f-icon name="bell"></f-icon>
            </div>
        </div>
        <div>
            <div class="icon-stack icon-stack--circle-bottom">
                <f-icon name="circle"></f-icon>
                <f-icon name="success"></f-icon>
            </div>
            <div class="icon-stack icon-stack--circle-bottom">
                <f-icon name="circle"></f-icon>
                <f-icon name="bell"></f-icon>
            </div>
        </div>
    </div>
</template>
