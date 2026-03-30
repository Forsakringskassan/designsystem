import { createRouter, createWebHashHistory } from "vue-router";
import { NavigationView, SortFilterView } from "./views";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "default",
            component: NavigationView,
        },
        {
            path: "/sort",
            name: "sort",
            component: SortFilterView,
        },
    ],
});

export default router;
