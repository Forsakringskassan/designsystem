<script setup lang="ts">
import { ref } from "vue";
import { FButton, FTable, FValidationForm, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    id: string;
    firstName: string;
    lastName: string;
    subscribed: boolean;
}

const rows = useDatasetRef<Row>([
    {
        id: "1",
        firstName: "Jane",
        lastName: "Doe",
        subscribed: false,
    },
    {
        id: "2",
        firstName: "John",
        lastName: "Doe",
        subscribed: false,
    },
]);

const selectedRows = ref<Row[]>([]);

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Förnamn",
        key: "firstName",
        editable: true,
    },
    {
        type: "text",
        header: "Efternamn",
        key: "lastName",
        editable: true,
    },
    {
        type: "checkbox",
        header: "Prenumerera",
        key: "subscribed",
        label: (row) => `Prenumerera ${row.firstName}`,
    },
]);

const submitCount = ref(0);

function onSubmit(): void {
    submitCount.value++;
}
</script>

<template>
    <h2>FTable + FValidationForm - Enter skickar formuläret</h2>

    <p>
        Redigera textfälten i tabellen genom att trycka Enter. Kontrollera om formuläret skickats trots att du inte
        klickat på knappen "Skicka".
    </p>

    <f-validation-form @submit="onSubmit">
        <h3>Checkbox-kolumn</h3>
        <f-table :rows :columns key-attribute="id" />

        <h3>Radio (selectable="single")</h3>
        <f-table v-model:selected-rows="selectedRows" :rows :columns key-attribute="id" selectable="single" />

        <f-button type="submit" size="medium" variant="primary">Skicka</f-button>
    </f-validation-form>

    <p>Formuläret har skickats {{ submitCount }} gånger.</p>
</template>
