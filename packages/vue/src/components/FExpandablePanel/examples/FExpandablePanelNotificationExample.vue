<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FExpandablePanel, FIcon } from "@fkui/vue";

export default defineComponent({
    name: "FExpandablePanelExample",
    components: { FExpandablePanel, FIcon },
    data() {
        return {
            expanded1: false,
            expanded2: false,
        };
    },
    methods: {
        onToggle1() {
            this.expanded1 = !this.expanded1;
        },
        onToggle2() {
            this.expanded2 = !this.expanded2;
        },
    },
});
</script>

<template>
    <div>
        <f-expandable-panel :expanded="expanded1" :notifications="1" @toggle="onToggle1">
            <template #title> Titel med standard notifierings ikon </template>
            <template #default> Innehåll </template>
        </f-expandable-panel>

        <f-expandable-panel :expanded="expanded2" :notifications="2" @toggle="onToggle2">
            <template #title> Titel med anpassad notifierings ikon </template>
            <template #default> Innehåll </template>
            <template #icon><f-icon name="i"></f-icon></template>
        </f-expandable-panel>
    </div>
</template>
