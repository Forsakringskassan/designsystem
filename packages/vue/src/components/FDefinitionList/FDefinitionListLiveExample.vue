<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FDefinitionList } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FDefinitionListLiveExample",
    components: { FCheckboxField, LiveExample },
    data() {
        return {
            showAsGrid: false,
        };
    },
    computed: {
        livedata(): object {
            return {
                exampleDefinitions: [
                    { term: "Skulle ha jobbat", definition: "8 timmar" },
                    { term: "Vabbade", definition: "8 timmar" },
                    { term: "Omfattning", definition: "100 procent" },
                ],
            };
        },
        components(): object {
            return {
                FDefinitionList,
            };
        },
        gridded(): string {
            return this.showAsGrid ? "gridded" : "";
        },
        template(): string {
            return /* HTML */ ` <f-definition-list :definitions="exampleDefinitions" ${this.gridded} /> `;
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-checkbox-field v-model="showAsGrid" :value="true"> Visa som rutnät </f-checkbox-field>
    </live-example>
</template>
