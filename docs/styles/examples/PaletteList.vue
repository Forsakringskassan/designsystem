<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
/* eslint-disable-next-line import-x/extensions -- metadata is an ESM file */
import theme, { type PaletteColor } from "@fkui/theme-default/dist/metadata.mjs";
import ColorTable from "./ColorTable.vue";

const groups = Map.groupBy(theme.palette, (color: PaletteColor) => color.group);
const palette = Array.from(groups, ([name, colors]) => ({
    name,
    variables: colors,
}));

export default defineComponent({
    components: { ColorTable },
    data() {
        return {
            palette,
        };
    },
});
</script>

<template>
    <div>
        <template v-for="p in palette" :key="p.name">
            <h3>{{ p.name }}</h3>
            <color-table :colors="p.variables"></color-table>
        </template>
    </div>
</template>
