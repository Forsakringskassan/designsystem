<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FButton, IAnimateExpand } from "@fkui/vue";

export default defineComponent({
    name: "IAnimateExpandExample",
    components: { FButton, IAnimateExpand },
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
        <f-button @click="isExpanded = !isExpanded">Öppna/stäng animering</f-button>
        <i-animate-expand :expanded="isExpanded" :opacity="true">
            <!-- [html-validate-disable-next no-inline-style] -->
            <div :style></div>
        </i-animate-expand>
    </div>
</template>
