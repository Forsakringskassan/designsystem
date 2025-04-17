<script lang="ts">
import { defineComponent } from "vue";
import { FLabel, FTooltip, FCheckboxField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FTooltipLiveExample",
    components: { LiveExample, FCheckboxField },
    data() {
        return {
            hasHeader: false,
            longText: false,
        };
    },
    computed: {
        components(): object {
            return {
                FLabel,
                FTooltip,
            };
        },
        header(): string {
            return this.hasHeader ? "<template #header> Lär dig mer om [..] </template>" : "";
        },
        headerTag(): string {
            return this.hasHeader ? 'header-tag="h2"' : "";
        },
        template(): string {
            const { longText } = this;
            const text = longText
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit in elit nunc, iaculis sit amet consequat vel, placerat et purus"
                : "Etikett";
            return /* HTML */ `
                <f-label>
                    <template #default> ${text} </template>
                    <template #tooltip>
                        <f-tooltip
                            screen-reader-text="Denna text syns bara för skärmläsare"
                            ${this.headerTag}
                        >
                            ${this.header}
                            <template #body> Lorem ipsum dolor sit amet. </template>
                        </f-tooltip>
                    </template>
                </f-label>
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template">
        <f-checkbox-field v-model="hasHeader" :value="true"> Rubrik i tooltip </f-checkbox-field>
        <f-checkbox-field v-model="longText" :value="true"> Lång text </f-checkbox-field>
    </live-example>
</template>
