<script lang="ts">
import { defineComponent } from "vue";
import { FPaginateDataset, FPaginator } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { persons } from "./pagination-data";

export default defineComponent({
    name: "PaginationExample",
    components: {
        LiveExample,
    },
    data() {
        return {};
    },
    computed: {
        components(): object {
            return {
                FPaginateDataset,
                FPaginator,
            };
        },
        livedata(): object {
            return {
                rows: persons,
            };
        },
        template(): string {
            return /* HTML */ `
                <f-paginate-dataset :items="rows">
                    <template #default="{ items: currentPageItems }">
                        <f-paginator />
                    </template>
                </f-paginate-dataset>
            `;
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata></live-example>
</template>
