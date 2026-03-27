<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { type SassVariable } from "@fkui/theme-default/dist/palette.json";
import { FDataTable, FTableColumn } from "@fkui/vue";

export default defineComponent({
    components: { FDataTable, FTableColumn },
    props: {
        colors: {
            type: Array as PropType<SassVariable[]>,
            required: true,
        },
    },
});
</script>

<template>
    <f-data-table :rows="colors" key-attribute="name" class="density-densest">
        <template #caption> <span class="sr-only"> Färgpaletten </span> </template>
        <template #default="{ row }">
            <f-table-column title="Namn" type="text" shrink>
                <code class="color-table__term">{{ row.name }}</code>
            </f-table-column>
            <f-table-column title="Färg" type="text" expand>
                <!-- [html-validate-disable-next no-inline-style] -->
                <span class="color-table__color" :style="`--value: ${row.value}`"></span>
                <code class="color-table__term">{{ row.value }}</code>
            </f-table-column>
        </template>
    </f-data-table>
</template>
