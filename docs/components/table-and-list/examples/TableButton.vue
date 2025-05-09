<script setup lang="ts">
import { FInteractiveTable, FTableButton, FTableColumn } from "@fkui/vue";

const items = [{ value: "Row 1" }, { value: "Row 2" }, { value: "Row 3" }];

function modifyRow(_item: unknown): void {
    /* do nothing */
}
</script>

<template>
    <!-- cut above -->
    <f-interactive-table :rows="items">
        <template #caption> Awesome Table </template>
        <template #default="{ row }">
            <f-table-column title="Kolumnrubrik" type="text">
                {{ row.value }}
            </f-table-column>
            <f-table-column title="Åtgärder" type="action" shrink>
                <f-table-button icon="pen" @click="modifyRow(row)">
                    Redigera {{ row.value }}
                </f-table-button>
            </f-table-column>
        </template>
    </f-interactive-table>
    <!-- cut below -->
</template>
