<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FInteractiveTable, FSortFilterDataset, FTableColumn } from "@fkui/vue";
import { fruits } from "./fruit-data";

export default defineComponent({
    components: { FButton, FInteractiveTable, FSortFilterDataset, FTableColumn },
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
        :sortable-attributes
    >
        <template #header>
            <div class="button-group">
                <f-button
                    class="button-group__item"
                    icon-left="trashcan"
                    size="small"
                    variant="tertiary"
                >
                    <span> Ta bort </span>
                </f-button>
                <f-button
                    class="button-group__item"
                    icon-left="paper-clip"
                    size="small"
                    variant="tertiary"
                >
                    <span> Bifoga </span>
                </f-button>
            </div>
        </template>

        <template #default="{ sortFilterResult }">
            <f-interactive-table
                :rows="sortFilterResult"
                striped
                selectable="multi"
                key-attribute="id"
            >
                <template #caption>
                    <span class="sr-only"> Frukter </span>
                </template>
                <template #selectable-description> Välj denna raden </template>
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
