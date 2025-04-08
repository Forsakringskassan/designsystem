<script>
import { defineComponent } from "vue";
import { FExpandablePanel } from "@fkui/vue";

export default defineComponent({
    name: "FExpandablePanelExample",
    components: { FExpandablePanel },
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
            <template #title> Titel med en notifiering </template>
            <template #default> Innehåll </template>
        </f-expandable-panel>

        <f-expandable-panel :expanded="expanded2" :notifications="2" @toggle="onToggle2">
            <template #title> Titel med två notifieringar </template>
            <template #default> Innehåll </template>
        </f-expandable-panel>
    </div>
</template>
