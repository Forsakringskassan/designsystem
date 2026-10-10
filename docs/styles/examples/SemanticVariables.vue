<script setup lang="ts">
import { h } from "vue";
/* eslint-disable-next-line import-x/extensions -- does not work without
 * extension unless we add exports field to theme package :( (but that would
 * be breaking) */
import theme from "@fkui/theme-default/dist/metadata.mjs";
import { FSortFilterDataset, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";

const rows = useDatasetRef(theme.tokens);
const themes = theme.themes;
const columns = defineTableColumns([
    { type: "text", header: "Semantisk variabel", key: "name", size: "shrink" },
    ...themes.map((name) => ({
        header: name,
        size: "shrink" as const,
        render(token: (typeof theme.tokens)[number]) {
            const value = token.values?.[name];
            return h("td", { class: "table-ng__cell table-ng__cell--static" }, [
                h("div", [
                    h("span", {
                        class: "color-table__color",
                        style: { "--value": value?.value },
                    }),
                    h("code", { class: "color-table__term" }, value?.palette ?? value?.value ?? ""),
                ]),
            ]);
        },
    })),
    { type: "text", header: "Beskrivning", value: () => "-" },
]);
</script>

<template>
    <f-sort-filter-dataset
        :data="rows"
        :show-sort="false"
        :sortable-attributes="{
            name: 'Semantisk variabel',
            palette: 'Palettfärg',
            value: 'Färgkod',
        }"
    >
        <template #default="{ sortFilterResult }">
            <!-- [html-validate-disable-block aria-label-misuse -- tested ok for this usage]-->
            <!-- [html-validate-disable-block vue/required-slots -- bug in fkui metadata, should require either caption or aria-labelledby]-->
            <f-table
                :rows="sortFilterResult"
                :columns
                striped
                class="density-densest"
                aria-labelledby="semantiska_farger"
            >
                <template #caption><span class="sr-only">Semantiska färger</span></template>
            </f-table>
        </template>
    </f-sort-filter-dataset>
</template>

<style scoped>
.table__column {
    white-space: nowrap;
}
</style>
