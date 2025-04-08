<script>
import { defineComponent, useTemplateRef } from "vue";
import { FTooltip } from "@fkui/vue";

export default defineComponent({
    components: { FTooltip },
    setup() {
        const heading1 = useTemplateRef("heading1");
        const heading2 = useTemplateRef("heading2");
        const heading3 = useTemplateRef("heading3");
        const heading4 = useTemplateRef("heading4");
        const heading5 = useTemplateRef("heading5");
        const heading6 = useTemplateRef("heading6");
        return { heading1, heading2, heading3, heading4, heading5, heading6 };
    },
});
</script>

<template>
    <div ref="heading1">
        <h1>Heading level 1</h1>
    </div>
    <f-tooltip :attach-to="heading1" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading2">
        <h2>Heading level 2</h2>
    </div>
    <f-tooltip :attach-to="heading2" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading3">
        <h3>Heading level 3</h3>
    </div>
    <f-tooltip :attach-to="heading3" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading4">
        <h4>Heading level 4</h4>
    </div>
    <f-tooltip :attach-to="heading4" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading5">
        <h5>Heading level 5</h5>
    </div>
    <f-tooltip :attach-to="heading5" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <div ref="heading6">
        <h6>Heading level 6</h6>
    </div>
    <f-tooltip :attach-to="heading6" screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>

    <h2>Unattached</h2>
    <f-tooltip screen-reader-text="Skärmläsartext">
        <template #body> Lorem ipsum dolor sit amet. </template>
    </f-tooltip>
</template>
