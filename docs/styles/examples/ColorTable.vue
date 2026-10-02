<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { h } from "vue";
import { type SassVariable } from "@fkui/theme-default/dist/palette.json";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

const columns = defineTableColumns<SassVariable>([
    { type: "text", header: "Namn", key: "name", size: "shrink" },
    {
        header: "Färg",
        size: "grow",
        render(row) {
            return h("td", { class: "table-ng__cell table-ng__cell--static" }, [
                h("div", [
                    h("span", {
                        class: "color-table__color",
                        style: { "--value": row.value },
                    }),
                    h("code", { class: "color-table__term" }, row.value),
                ]),
            ]);
        },
    },
]);

export default defineComponent({
    components: { FTable },
    props: {
        colors: {
            type: Array as PropType<SassVariable[]>,
            required: true,
        },
    },
    setup(props) {
        return { columns, rows: useDatasetRef(props.colors) };
    },
});
</script>

<template>
    <f-table :rows :columns class="density-densest">
        <template #caption> <span class="sr-only"> Färgpaletten </span> </template>
    </f-table>
</template>
