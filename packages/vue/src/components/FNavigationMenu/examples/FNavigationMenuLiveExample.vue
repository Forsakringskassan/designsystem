<script lang="ts">
import { defineComponent } from "vue";
import { FCheckboxField, FNavigationMenu } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

export default defineComponent({
    name: "FNavigationMenuLiveExample",
    components: { LiveExample, FCheckboxField },
    data() {
        return {
            isVertical: false,
        };
    },
    computed: {
        livedata(): object {
            return {
                routes: [
                    { label: "label1", route: "ROUTE_1" },
                    { label: "label2", route: "ROUTE_2" },
                    { label: "label3", route: "ROUTE_3" },
                    { label: "label4", route: "ROUTE_4" },
                    { label: "label5", route: "ROUTE_5" },
                ],
            };
        },
        components(): object {
            return { FNavigationMenu };
        },
        vertical(): string {
            return this.isVertical ? "vertical" : "";
        },
        template(): string {
            return /* HTML */ `
                <f-navigation-menu
                    aria-label="Example navigation"
                    :routes="routes"
                    ${this.vertical}
                ></f-navigation-menu>
            `;
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <f-checkbox-field v-model="isVertical" :value="true"> Vertikal </f-checkbox-field>
    </live-example>
</template>
