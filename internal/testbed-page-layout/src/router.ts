import { createRouter, createWebHashHistory } from "vue-router";
import { XOverviewView, XDocumentView, XJournalView } from "./views";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", name: "overview", component: XOverviewView },
        { path: "/journal", name: "journal", component: XJournalView },
        { path: "/documents", name: "documents", component: XDocumentView },
    ],
});

export default router;
