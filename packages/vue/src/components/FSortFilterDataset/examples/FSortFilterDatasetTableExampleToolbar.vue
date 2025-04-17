<script lang="ts">
import { defineComponent } from "vue";
import { FSortFilterDataset, FInteractiveTable, FTableColumn, FIcon } from "@fkui/vue";
import { fruits } from "./fruit-data";

export default defineComponent({
    components: { FSortFilterDataset, FInteractiveTable, FTableColumn, FIcon },
    data() {
        return {
            sortableAttributes: {
                name: "Namn",
                origin: "Land",
            },
            fruits,
        };
    },
});
</script>

<template>
    <h3>Frukter</h3>
    <f-sort-filter-dataset
        :data="fruits"
        default-sort-attribute="name"
        :default-sort-ascending="true"
        :sortable-attributes="sortableAttributes"
    >
        <template #header>
            <div class="button-group">
                <button
                    class="button button-group__item button--tertiary button--small"
                    type="button"
                >
                    <f-icon name="trashcan" class="button__icon"></f-icon>
                    <span> Ta bort </span>
                </button>
                <button
                    class="button button-group__item button--tertiary button--small"
                    type="button"
                >
                    <f-icon name="paper-clip" class="button__icon"></f-icon>
                    <span> Bifoga </span>
                </button>
            </div>
        </template>

        <template #default="{ sortFilterResult }">
            <f-interactive-table :rows="sortFilterResult" striped selectable key-attribute="id">
                <template #caption>
                    <span class="sr-only"> Frukter </span>
                </template>
                <template #checkbox-description> Välj denna raden </template>
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
