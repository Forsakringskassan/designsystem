<template>
    <div>
        <pre>selectedRoute: {{ selectedRoute }}</pre>
        <f-navigation-menu
            :routes="routes"
            @selected-route="selectedRoute = $event"
        ></f-navigation-menu>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { FNavigationMenu } from "@fkui/vue";
/* same routes as used by vue-router */
import { routes } from "./router";

export default defineComponent({
    name: "FNavigationMenuExample",
    components: { FNavigationMenu },
    props: {},
    data: () => {
        return {
            routes: routes,
            selectedRoute: "",
        };
    },
    methods: {},
});
</script>
