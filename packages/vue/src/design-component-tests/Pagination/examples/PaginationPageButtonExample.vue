<script lang="ts">
import { defineComponent } from "vue";
import { FPaginateDataset, FPaginator } from "@fkui/vue";

export default defineComponent({
    components: {
        FPaginateDataset,
        FPaginator,
    },
    data() {
        return {
            rows: Array.from({ length: 100 }),
        };
    },
});
</script>

<template>
    <f-paginate-dataset :items="rows" :items-per-page="1">
        <template #default>
            <f-paginator />
        </template>
    </f-paginate-dataset>
</template>
