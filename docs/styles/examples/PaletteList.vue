<script lang="ts">
import { defineComponent } from "vue";
import palette from "@fkui/theme-default/dist/palette.json";
import ColorTable from "./ColorTable.vue";

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
