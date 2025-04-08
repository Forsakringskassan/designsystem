<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { FDataTable, FTableColumn } from "@fkui/vue";
import { type SassVariable } from "@fkui/theme-default/dist/palette.json";

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
    <f-data-table :rows="colors" key-attribute="name">
        <template #caption> <span class="sr-only"> Färgpaletten </span> </template>
        <template #default="{ row }">
            <f-table-column title="Namn" type="text" shrink>
                {{ row.name }}
            </f-table-column>
            <f-table-column title="Exempel" type="text" shrink>
                <!-- [html-validate-disable-next no-inline-style] -->
                <span class="color-table__color" :style="{ 'background-color': row.value }"></span>
            </f-table-column>
            <f-table-column title="Färgkod" type="text" shrink>
                <code>{{ row.value }}</code>
            </f-table-column>
        </template>
    </f-data-table>
</template>
