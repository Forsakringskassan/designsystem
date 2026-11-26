import FTableColumnLiveExample from "@fkui/table-docs-examples/FTableColumnLiveExample.vue";
import FTableCrudDatasetExample from "@fkui/table-tests-examples/FTableCrudDatasetExample.vue";
import FTableDynamicContextmenuExample from "@fkui/table-tests-examples/FTableDynamicContextmenuExample.vue";
import FTableInputFieldsExample from "@fkui/table-tests-examples/FTableInputFieldsExample.vue";
import FTableNavigationExample from "@fkui/table-tests-examples/FTableNavigationExample.vue";
import FTableSortFilterExample from "@fkui/table-tests-examples/FTableSortFilterExample.vue";
import FTableSortFilterPaginationExample from "@fkui/table-tests-examples/FTableSortFilterPaginationExample.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "FTableNavigationExample",
            component: FTableNavigationExample,
        },
        {
            path: "/sortfilter",
            name: "FTableSortFilterExample",
            component: FTableSortFilterExample,
        },
        {
            path: "/paginationsort",
            name: "FTableSortFilterPaginationExample",
            component: FTableSortFilterPaginationExample,
        },
        {
            path: "/contextmenu",
            name: "FTableDynamicContextmenuExample",
            component: FTableDynamicContextmenuExample,
        },
        {
            path: "/columntypes",
            name: "FTableColumnLiveExample",
            component: FTableColumnLiveExample,
        },
        {
            path: "/crud",
            name: "FTableCrudDatasetExample",
            component: FTableCrudDatasetExample,
        },
        {
            path: "/inputfield",
            name: "FTableInputFieldsExample",
            component: FTableInputFieldsExample,
        },
    ],
});

export default router;
