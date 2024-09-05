<template>
    <div>
        <pre>selectedRoute: {{ selectedRoute }}</pre>
        <f-navigation-menu
            vertical
            :routes="routes"
            @selected-route="selectedRoute = $event"
        ></f-navigation-menu>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { FNavigationMenu } from "@fkui/vue";

export default defineComponent({
    name: "FNavigationMenuVertical",
    components: { FNavigationMenu },
    data() {
        return {
            /** @type {NavigationMenuItem[]} */
            routes: [
                { label: "label1", route: "ROUTE_1" },
                { label: "label2", route: "ROUTE_2" },
                { label: "label3", route: "ROUTE_3" },
                { label: "label4", route: "ROUTE_4", href: "/", target: "" },
            ],
            selectedRoute: "",
        };
    },
});
</script>
