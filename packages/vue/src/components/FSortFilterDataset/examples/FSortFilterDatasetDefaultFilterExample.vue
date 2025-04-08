<script setup lang="ts">
import { FInteractiveTable, FSortFilterDataset, FTableColumn } from "@fkui/vue";
import { fruits } from "./fruit-data";
</script>

<template>
    <f-sort-filter-dataset :data="fruits" :sortable-attributes="{ name: 'Namn' }">
        <template #header="{ slotClass }">
            <h3 :class="slotClass">Frukter</h3>
        </template>
        <template #default="{ sortFilterResult }">
            <f-interactive-table :rows="sortFilterResult" striped key-attribute="id">
                <template #caption>
                    <span class="sr-only"> Frukter </span>
                </template>
                <template #default="{ row }">
                    <f-table-column name="name" title="Namn" type="text" shrink>
                        {{ row.name }}
                    </f-table-column>
                    <f-table-column name="origin" title="Land" type="text" shrink>
                        {{ row.origin }}
                    </f-table-column>
                    <f-table-column name="description" title="Beskrivning" type="text" expand>
                        {{ row.description }}
                    </f-table-column>
                </template>
            </f-interactive-table>
        </template>
    </f-sort-filter-dataset>
</template>
