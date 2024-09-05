<template>
    <div>
        <pre>selectedRoute: {{ selectedRoute }}</pre>
        <pre>availableRoutes: {{ availableRoutes }}</pre>
        <p>
            <input
                v-model="routeInput"
                v-validation.maxLength="{ maxLength: { length: 20 } }"
                type="text"
            />
            <button type="button" @click="selectedRoute = routeInput">Go to route</button>
        </p>
        <f-navigation-menu v-model:route="selectedRoute" :routes="routes"></f-navigation-menu>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { FNavigationMenu } from "@fkui/vue";

export default defineComponent({
    name: "FNavigationMenuActiveRoute",
    components: { FNavigationMenu },
    data() {
        return {
            /** @type {NavigationMenuItem[]} */
            routes: [
                { label: "label1", route: "ROUTE_1" },
                { label: "label2", route: "ROUTE_2" },
                { label: "label3", route: "ROUTE_3" },
                {
                    label: "label4",
                    route: "ROUTE_4",
                    href: "#f-navigation-menu-active-route-qwerty",
                },
                {
                    label: "label5",
                    route: "ROUTE_5",
                    href: "#f-navigation-menu-active-route-asdfgh",
                },
            ],
            selectedRoute: "ROUTE_2", // or this.route.path (from Vue router in setup)
            routeInput: "ROUTE_3",
        };
    },
    computed: {
        availableRoutes() {
            return this.routes.map((r) => r.route).join(", ");
        },
    },
});
</script>
