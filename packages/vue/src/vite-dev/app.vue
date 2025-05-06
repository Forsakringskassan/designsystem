<script setup lang="ts">
import { FInteractiveTable, FTableColumn, FIcon, FCrudButton } from "../components";

const rows = [
    { name: "Banan", type: "Frukt" },
    { name: "Äpple", type: "Frukt" },
    { name: "Vitkål", type: "Grönsak" },
    { name: "Spenat", type: "Grönsak" },
];
</script>

<template>
    <f-interactive-table :rows>
        <template #caption> Awesome Table </template>
        <template #default="{ row }">
            <f-table-column title="A" type="text" expand>
                {{ row.name }}
            </f-table-column>
            <f-table-column title="B" type="text" expand> Lorem ipsum dolor sit amet </f-table-column>
            <f-table-column title="Åtgärder" type="action" shrink>
                <a class="anchor">Länk</a>
                <button aria-label="Redigera" class="button button--tertiary button--small" type="button">
                    <f-icon name="pen"></f-icon>
                </button>
                <button aria-label="Redigera" class="button button--discrete button--small" type="button">
                    <f-icon name="pen"></f-icon>
                </button>
                <f-crud-button action="modify" :item="row" icon />
            </f-table-column>
        </template>
    </f-interactive-table>
</template>
