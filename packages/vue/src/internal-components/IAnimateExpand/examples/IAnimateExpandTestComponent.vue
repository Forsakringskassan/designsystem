<script>
import { defineComponent } from "vue";
import IAnimateExpand from "../IAnimateExpand.vue";

export default defineComponent({
    namne: "IAnimateExpandExample",
    components: { IAnimateExpand },
    data() {
        return {
            isExpanded: false,
            style: "height: 200px; background: hotpink",
        };
    },
});
</script>

<template>
    <div>
        <button type="button" @click="isExpanded = !isExpanded">Öppna/stäng animering</button>
        <i-animate-expand :expanded="isExpanded" :opacity="true">
            <!-- [html-validate-disable-next no-inline-style] -->
            <div :style="style"></div>
        </i-animate-expand>
    </div>
</template>
