<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FDefinitionList } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FDefinitionListLiveExample",
    components: { FCheckboxField, LiveExample },
    data() {
        return {
            useAlignedLayout: false,
        };
    },
    computed: {
        livedata(): object {
            return {
                exampleDefinitions: [
                    { term: "Skulle ha jobbat", description: "8 timmar" },
                    { term: "Vabbade", description: "8 timmar" },
                    { term: "Omfattning", description: "100 procent" },
                ],
            };
        },
        components(): object {
            return {
                FDefinitionList,
            };
        },
        aligned(): string {
            return this.useAlignedLayout ? "aligned" : "";
        },
        template(): string {
            return /* HTML */ `
                <f-definition-list :definitions="exampleDefinitions" ${this.aligned} />
            `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-checkbox-field v-model="useAlignedLayout" :value="true">
            Använd justerad layout
        </f-checkbox-field>
    </live-example>
</template>
