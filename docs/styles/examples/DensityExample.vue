<script lang="ts">
import { defineComponent } from "vue";
import { FDataTable, FTableColumn } from "@fkui/vue";

export default defineComponent({
    components: { FDataTable, FTableColumn },
    data() {
        return {
            selectedItems: [],
            items: [
                { id: "1", date: "2022-02-01", amount: "2 300" },
                { id: "2", date: "2024-04-20", amount: "5 250" },
                { id: "3", date: "2024-05-01", amount: "2 100" },
            ],
        };
    },
});
</script>

<template>
    <div class="row">
        <div class="col col--md-6 density-default">
            <f-data-table :rows="items" key-attribute="id">
                <template #caption> Tabell med standard densitet </template>
                <template #default="{ row }">
                    <f-table-column title="Datum" type="text">
                        {{ row.date }}
                    </f-table-column>
                    <f-table-column title="Belopp" type="numeric">
                        {{ row.amount }}
                    </f-table-column>
                </template>
            </f-data-table>
        </div>
        <div class="col col--md-6 density-dense">
            <f-data-table :rows="items" key-attribute="id">
                <template #caption> Tabell med kompakt densitet </template>
                <template #default="{ row }">
                    <f-table-column title="Datum" type="text">
                        {{ row.date }}
                    </f-table-column>
                    <f-table-column title="Belopp" type="numeric">
                        {{ row.amount }}
                    </f-table-column>
                </template>
            </f-data-table>
        </div>
    </div>
</template>
