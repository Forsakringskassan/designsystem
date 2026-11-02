<script setup lang="ts">
import { ref, watch } from "vue";
import { FButton, FMessageBox, FTable, FValidationForm, defineTableColumns } from "@fkui/vue";

interface Row {
    namn: string;
    land: string;
}

const data: Row[] = [
    { namn: "Apelsin", land: "spanien" },
    { namn: "Banan", land: "ecuador" },
    { namn: "Äpple", land: "sverige" },
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
        options: [
            {
                value: "spanien",
                label: "Spanien",
            },
            {
                value: "ecuador",
                label: "Ecuador",
            },
            {
                value: "sverige",
                label: "Sverige",
            },
        ],
        validation: {
            required: {},
        },
    },
]);

const rows = ref(data);
const showSuccess = ref(false);

function addRow(): void {
    showSuccess.value = false;
    rows.value.push({
        namn: "",
        land: "",
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
