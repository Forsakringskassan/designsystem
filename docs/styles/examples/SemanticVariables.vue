<script setup lang="ts">
/* eslint-disable-next-line import/extensions -- does not work without
 * extension unless we add exports field to theme package :( (but that would
 * be breaking) */
import theme from "@fkui/theme-default/dist/metadata.mjs";
import { FDataTable, FSortFilterDataset, FTableColumn } from "@fkui/vue";

const rows = theme.tokens;
const themes = theme.themes;
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
        <template #header>
            <h2 id="semantiska_farger">Semantiska färger</h2>
        </template>
        <template #default="{ sortFilterResult }">
            <!-- [html-validate-disable-block aria-label-misuse -- tested ok for this usage]-->
            <!-- [html-validate-disable-block vue/required-slots -- bug in fkui metadata, should require either caption or aria-labelledby]-->
            <f-data-table
                :rows="sortFilterResult"
                key-attribute="name"
                striped
                class="density-densest"
                aria-labelledby="semantiska_farger"
            >
                <template #default="{ row: token }">
                    <f-table-column name="name" title="Semantisk variabel" shrink>
                        <code>{{ token.name }}</code>
                    </f-table-column>
                    <f-table-column v-for="name in themes" :key="name" :name :title="name" shrink>
                        <!-- [html-validate-disable-next no-inline-style -- variable only] -->
                        <span
                            class="color"
                            :style="`--value: ${token.values?.[name].value}`"
                        ></span>
                        <code>{{
                            token.values?.[name].palette ?? token.values?.[name].value
                        }}</code>
                    </f-table-column>
                    <f-table-column name="description" title="Beskrivning" expand>
                        -
                    </f-table-column>
                </template>
            </f-data-table>
        </template>
    </f-sort-filter-dataset>
</template>

<style scoped>
code {
    background: transparent;
}

.table__column {
    white-space: nowrap;
}

.color {
    background: var(--value);
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    border-radius: 4px;
    vertical-align: text-bottom;

    @media (prefers-color-scheme: light) {
        border: 1px solid black;
    }

    @media (prefers-color-scheme: dark) {
        border: 1px solid white;
    }
}
</style>
