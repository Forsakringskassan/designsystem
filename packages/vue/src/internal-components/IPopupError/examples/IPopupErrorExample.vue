<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FTable, FValidationForm, defineTableColumns, useDatasetRef } from "@fkui/vue";

interface Row {
    id: string;
    email: string;
    postnr: string;
}

const rows = useDatasetRef<Row>([
    { id: "1", email: "", postnr: "" },
    { id: "2", email: "", postnr: "" },
    { id: "3", email: "", postnr: "" },
]);
const columns = defineTableColumns<Row>([
    {
        type: "text:email",
        header: "Epost",
        key: "email",
        editable: true,
        label: () => "Epost",
        validation: { required: {} },
    },
    {
        type: "text:postalCode",
        header: "Postnummer",
        key: "postnr",
        editable: true,
        label: () => "Postnummer",
        validation: { required: {} },
    },
]);

export default defineComponent({
    name: "TestApp",
    components: {
        FButton,
        FTable,
        FValidationForm,
    },
    setup() {
        return { rows, columns };
    },
});
</script>

<template>
    <f-validation-form :use-error-list="false">
        <f-table :rows :columns>
            <template #caption> PopupError example </template>
        </f-table>
        <f-button size="large" variant="primary" type="submit">Submit</f-button>
    </f-validation-form>
</template>
