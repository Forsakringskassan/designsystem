<script setup lang="ts">
import { h } from "vue";
import { type SassVariable } from "@fkui/theme-default/dist/palette.json";
import { FTable, defineTableColumns } from "@fkui/vue";

const { colors: rows } = defineProps<{ colors: SassVariable[] }>();

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
</script>

<template>
    <f-table :rows :columns class="density-densest">
        <template #caption> <span class="sr-only"> Färgpaletten </span> </template>
    </f-table>
</template>
