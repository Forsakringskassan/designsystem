import { createRouter, createWebHashHistory } from "vue-router";
import ComponentTestsView from "./views/ComponentTestsView.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ path: "/", component: ComponentTestsView }],
});

export default router;
