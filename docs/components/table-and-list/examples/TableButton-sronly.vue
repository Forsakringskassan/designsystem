<script setup lang="ts">
import { FInteractiveTable, FTableButton, FTableColumn } from "@fkui/vue";
import rows from "./table-data";

function modifyRow(_item: unknown): void {
    /* do nothing */
}
</script>

<template>
    <!-- cut above -->
    <f-interactive-table :rows>
        <template #caption> Tabell exempel </template>
        <template #default="{ row }">
            <f-table-column title="Kolumn A" type="text">
                {{ row.foo }}
            </f-table-column>
            <f-table-column title="Kolumn B" type="text">
                {{ row.bar }}
            </f-table-column>
            <f-table-column title="Kolumn C" type="text">
                {{ row.baz }}
            </f-table-column>
            <f-table-column title="Åtgärder" type="action" shrink>
                <f-table-button icon="pen" label @click="modifyRow(row)">
                    Redigera <span class="sr-only">rad {{ row.id }}</span>
                </f-table-button>
            </f-table-column>
        </template>
    </f-interactive-table>
    <!-- cut below -->
</template>
