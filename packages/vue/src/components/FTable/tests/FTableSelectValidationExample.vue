<script setup lang="ts">
import { ref, watch } from "vue";
import { FButton, FMessageBox, FTable, FValidationForm, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const data: Row[] = [
    { namn: "Apelsin", land: "Spanien" },
    { namn: "Banan", land: "Ecuador" },
    { namn: "Äpple", land: "Sverige" },
];

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "namn",
        editable: true,
        validation: {
            required: {},
        },
    },
    {
        type: "select",
        header: "Land",
        key: "land",
        options: ["Spanien", "Ecuador", "Sverige"],
        validation: {
            required: {},
        },
    },
]);

const rows = useDatasetRef(data);
const showSuccess = ref(false);

function addRow(): void {
    showSuccess.value = false;
    rows.value.push({
        namn: "",
        land: "Välj...",
    });
}

function onSubmit(): void {
    showSuccess.value = true;
}

watch(
    () => rows.value.map(({ namn, land }) => [namn, land]),
    () => {
        showSuccess.value = false;
    },
);
</script>

<template>
    <f-validation-form @submit="onSubmit">
        <f-table :rows :columns />
        <f-message-box v-if="showSuccess" type="success"> Alla rader är korrekt ifyllda </f-message-box>
        <f-button variant="secondary" size="medium" type="button" @click="addRow">Lägg till rad</f-button>
        <f-button variant="primary" size="medium" type="submit">Validera</f-button>
    </f-validation-form>
</template>
