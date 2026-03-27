<script setup lang="ts">
import { FIcon, FInteractiveTable, FTableColumn } from "@fkui/vue";
import rows from "./table-data";
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
            <f-table-column title="Länk" type="action" shrink>
                <a class="anchor table__anchor" href="#" target="_blank">
                    Öppna dokument
                    <span class="sr-only">{{ row.id }}</span>
                    <f-icon name="new-window"></f-icon>
                    <span class="sr-only">öppnas i ny flik</span>
                </a>
            </f-table-column>
        </template>
    </f-interactive-table>
    <!-- cut below -->
</template>
