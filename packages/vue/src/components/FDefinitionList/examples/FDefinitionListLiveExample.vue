<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FDefinitionList } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FDefinitionListLiveExample",
    components: { FCheckboxField, LiveExample },
    data() {
        return {
            useJustifiedLayout: false,
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
        justified(): string {
            return this.useJustifiedLayout ? "justified" : "";
        },
        template(): string {
            return /* HTML */ `
                <f-definition-list :definitions="exampleDefinitions" ${this.justified} />
            `;
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-checkbox-field v-model="useJustifiedLayout" :value="true">
            Använd marginaljusterad layout
        </f-checkbox-field>
    </live-example>
</template>
