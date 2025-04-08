<script lang="ts">
import { defineComponent } from "vue";
import {
    FInteractiveTable,
    FTableColumn,
    FValidationForm,
    FEmailTextField,
    FPostalCodeTextField,
} from "@fkui/vue";

export default defineComponent({
    name: "TestApp",
    components: {
        FInteractiveTable,
        FTableColumn,
        FValidationForm,
        FEmailTextField,
        FPostalCodeTextField,
    },
    data() {
        return {
            insatser: [
                {
                    id: "1",
                    email: "",
                    postnr: "",
                },
                {
                    id: "2",
                    email: "",
                    postnr: "",
                },
                {
                    id: "3",
                    email: "",
                    postnr: "",
                },
            ],
        };
    },
});
</script>

<template>
    <f-validation-form :use-error-list="false">
        <f-interactive-table :rows="insatser" hover key-attribute="id">
            <template #caption> PopupError example </template>
            <template #default="{ row }">
                <f-table-column title="Epost" type="text" shrink>
                    <f-email-text-field
                        v-model="row.email"
                        v-validation.required
                    ></f-email-text-field>
                </f-table-column>

                <f-table-column title="Postnummer" type="text" shrink>
                    <f-postal-code-text-field
                        v-model="row.postnr"
                        v-validation.required
                    ></f-postal-code-text-field>
                </f-table-column>
            </template>
        </f-interactive-table>
        <button class="button button--primary" type="submit">Submit</button>
    </f-validation-form>
</template>
