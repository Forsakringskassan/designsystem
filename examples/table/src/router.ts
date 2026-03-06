import { createRouter, createWebHashHistory } from "vue-router";
import { SortFilterTableView, TableView } from "./views";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", name: "default", component: TableView },
        {
            path: "/sorttable",
            name: "sorttable",
            component: SortFilterTableView,
        },
    ],
});

export default router;
