import { createRouter, createWebHashHistory } from "vue-router";
import DefaultView from "./views/DefaultView.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ path: "/", name: "", component: DefaultView }],
});

export default router;
