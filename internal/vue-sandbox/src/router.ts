import { createRouter, createWebHashHistory } from "vue-router";
import DefaultView from "./views/DefaultView.vue";
import EditableListLong from "./views/prototypes/EditableListLong.vue";
import EditableListShort from "./views/prototypes/EditableListShort.vue";
import ExamplePrototype from "./views/prototypes/ExamplePrototype.vue";
import PanelListLong from "./views/prototypes/PanelListLong.vue";
import PanelListShort from "./views/prototypes/PanelListShort.vue";
import PanelerVsKort from "./views/prototypes/PanelerVsKort.vue";
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
    {
        path: "/paneler-vs-kort",
        name: "Paneler vs Kort",
        component: PanelerVsKort,
    },
];

const subRoutes = [
    {
        path: "/paneler-vs-kort/panellista-lang",
        name: "Panellista längre",
        component: PanelListLong,
    },
    {
        path: "/paneler-vs-kort/panellista-kortare",
        name: "Panellista kortare",
        component: PanelListShort,
    },
    {
        path: "/paneler-vs-kort/redigerbar-lista-lang",
        name: "Redigerbar lista längre",
        component: EditableListLong,
    },
    {
        path: "/paneler-vs-kort/redigerbar-lista-kortare",
        name: "Redigerbar lista kortare",
        component: EditableListShort,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", name: "", component: DefaultView },
        ...prototypes,
        ...subRoutes,
    ],
});

export default router;
