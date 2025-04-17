<script>
import { defineComponent } from "vue";
import { FExpandableParagraph } from "@fkui/vue";

export default defineComponent({
    name: "FExpandableParagraphMultipleExample",
    components: { FExpandableParagraph },
    data() {
        return {
            expanded1: false,
            expanded2: false,
            expanded3: false,
        };
    },
    methods: {
        onToggle1() {
            this.expanded1 = !this.expanded1;
        },
        onToggle2() {
            this.expanded2 = !this.expanded2;
        },
        onToggle3() {
            this.expanded3 = !this.expanded3;
        },
    },
});
</script>

<template>
    <div>
        <f-expandable-paragraph :expanded="expanded1" header-tag="h2" @toggle="onToggle1">
            <template #title> Titel (h2) </template>
            <template #default>
                <span> Innehåll </span>
            </template>
        </f-expandable-paragraph>
        <f-expandable-paragraph :expanded="expanded2" header-tag="h3" @toggle="onToggle2">
            <template #title> Titel (h3) </template>
            <template #default>
                <span> Innehåll </span>
            </template>
        </f-expandable-paragraph>
        <f-expandable-paragraph :expanded="expanded3" header-tag="h4" @toggle="onToggle3">
            <template #title> Titel (h4) </template>
            <template #related> 2020-06-25 </template>
            <template #default>
                <span> Innehåll </span>
            </template>
        </f-expandable-paragraph>
    </div>
</template>
