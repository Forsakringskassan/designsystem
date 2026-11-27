<script setup lang="ts">
import { h } from "vue";
import { type PaletteColor } from "@fkui/theme-default/metadata";
import { FTable, defineTableColumns } from "@fkui/vue";

const { colors: rows } = defineProps<{ colors: PaletteColor[] }>();

const columns = defineTableColumns<PaletteColor>([
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
