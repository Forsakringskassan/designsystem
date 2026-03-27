<script lang="ts">
import { defineComponent, useTemplateRef } from "vue";
import { FTooltip } from "@fkui/vue";

export default defineComponent({
    components: { FTooltip },
    props: {
        expanded: {
            type: Boolean,
            required: false,
        },
    },
    setup() {
        const heading1 = useTemplateRef<HTMLElement>("heading1");
        const heading2 = useTemplateRef<HTMLElement>("heading2");
        const heading3 = useTemplateRef<HTMLElement>("heading3");
        const heading4 = useTemplateRef<HTMLElement>("heading4");
        const heading5 = useTemplateRef<HTMLElement>("heading5");
        const heading6 = useTemplateRef<HTMLElement>("heading6");
        return { heading1, heading2, heading3, heading4, heading5, heading6 };
    },
    data() {
        return {
            model1: this.expanded,
            model2: this.expanded,
            model3: this.expanded,
            model4: this.expanded,
            model5: this.expanded,
            model6: this.expanded,
            model7: this.expanded,
        };
    },
});
</script>

<template>
    <div ref="heading1">
        <h1>Heading level 1</h1>
    </div>
    <f-tooltip v-model="model1" :attach-to="heading1" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading2">
        <h2>Heading level 2</h2>
    </div>
    <f-tooltip v-model="model2" :attach-to="heading2" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading3">
        <h3>Heading level 3</h3>
    </div>
    <f-tooltip v-model="model3" :attach-to="heading3" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading4">
        <h4>Heading level 4</h4>
    </div>
    <f-tooltip v-model="model4" :attach-to="heading4" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading5">
        <h5>Heading level 5</h5>
    </div>
    <f-tooltip v-model="model5" :attach-to="heading5" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading6">
        <h6>Heading level 6</h6>
    </div>
    <f-tooltip v-model="model6" :attach-to="heading6" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <h2>Unattached</h2>
    <f-tooltip v-model="model7" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>
</template>
