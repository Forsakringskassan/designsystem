<script>
import { defineComponent } from "vue";
import { FExpandablePanel } from "@fkui/vue";

export default defineComponent({
    name: "FExpandablePanelExample",
    components: { FExpandablePanel },
    data() {
        return {
            expanded: false,
            type: Boolean,
        };
    },
    methods: {
        onToggle() {
            this.expanded = !this.expanded;
        },
    },
});
</script>

<template>
    <f-expandable-panel :expanded="expanded" @toggle="onToggle">
        <template #title> Titel </template>
        <template #default> Innehåll </template>
        <template #outside>
            Relaterat innehåll som visas när panelen är expanderad men utanför body
        </template>
    </f-expandable-panel>
</template>
