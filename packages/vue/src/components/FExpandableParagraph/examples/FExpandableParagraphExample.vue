<script>
import { defineComponent } from "vue";
import { FExpandableParagraph } from "@fkui/vue";

export default defineComponent({
    name: "FExpandableParagraphExample",
    components: { FExpandableParagraph },
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
    <f-expandable-paragraph :expanded="expanded" header-tag="span" @toggle="onToggle">
        <template #title> Titel (span) </template>
        <template #default>
            <span> Innehåll </span>
            <p>
                <a class="anchor" href="" target="_blank"> Länk till annan sida </a>
            </p>
        </template>
    </f-expandable-paragraph>
</template>
