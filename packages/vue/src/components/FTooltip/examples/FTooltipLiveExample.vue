<template>
    <live-example :components="components" :template="template">
        <f-checkbox-field v-model="hasHeader" :value="true"> Rubrik i tooltip</f-checkbox-field>
    </live-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FTooltip, FCheckboxField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FTooltipLiveExample",
    components: { LiveExample, FCheckboxField },
    data() {
        return {
            hasHeader: false,
        };
    },
    computed: {
        components(): object {
            return {
                FTooltip,
            };
        },
        header(): string {
            return this.hasHeader ? "<template #header> Lär dig mer om [..] </template>" : "";
        },
        template(): string {
            return /* HTML */ `
                <div class="tooltip-before">
                    <label class="label tooltip-before__label"> Etikett </label>
                </div>
                <f-tooltip screen-reader-text="Denna text syns bara för skärmläsare">
                    ${this.header}
                    <template #body> Lorem ipsum dolor sit amet. </template>
                </f-tooltip>
            `;
        },
    },
});
</script>
