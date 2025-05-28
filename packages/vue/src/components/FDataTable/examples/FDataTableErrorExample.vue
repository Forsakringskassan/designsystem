<script setup lang="ts">
import { ref } from "vue";
import { FDataTable, FTableColumn, FMessageBox } from "@fkui/vue";

const showError = ref(true);
</script>

<template>
    <f-data-table :rows="[]">
        <template #caption> Exempel med felmeddelande </template>
        <template #default>
            <f-table-column title="Kolumnrubrik 1" type="text"> dummy text </f-table-column>
            <f-table-column title="Kolumnrubrik 2" type="text"> dummy text </f-table-column>
            <f-table-column title="Kolumnrubrik 3" type="text"> dummy text </f-table-column>
        </template>
        <template #empty>
            <f-message-box v-if="showError" type="error" layout="short">
                Något gick fel. Testa att ladda om sidan.
            </f-message-box>
        </template>
    </f-data-table>
</template>
