import { createRouter, createWebHashHistory } from "vue-router";
import DefaultView from "./views/DefaultView.vue";
import ExamplePrototype from "./views/prototypes/ExamplePrototype.vue";
import ResetFields from "./views/prototypes/ResetFields.vue";

export const prototypes = [
    {
        path: "/prototyp/exempel",
        name: "Exempelprototyp",
        component: ExamplePrototype,
    },
    {
        path: "/prototyp/aterstall-belopp",
        name: "Återställ belopp",
        component: ResetFields,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ path: "/", name: "", component: DefaultView }, ...prototypes],
});

export default router;
