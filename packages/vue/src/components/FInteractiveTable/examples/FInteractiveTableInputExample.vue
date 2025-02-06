<template>
    <div class="row">
        <div class="col col--lg-10">
            <f-interactive-table :rows="betalningar" key-attribute="id">
                <template #caption> Justera betalningar </template>
                <template #default="{ row }">
                    <f-table-column name="beskrivning" title="Beskrivning" type="text" shrink>
                        {{ row.beskrivning }}
                    </f-table-column>
                    <f-table-column name="date" title="Utbetalningsdatum" type="text" shrink>
                        <f-datepicker-field v-model="row.date" v-validation.required>
                            Utbetalningsdatum
                        </f-datepicker-field>
                    </f-table-column>

                    <f-table-column name="belopp" title="Utbetalat belopp" type="text" shrink>
                        <f-numeric-text-field v-model="row.belopp" v-validation.required>
                            Utbetalt belopp
                        </f-numeric-text-field>
                    </f-table-column>
                </template>
            </f-interactive-table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FDatepickerField, FInteractiveTable, FTableColumn, FNumericTextField } from "@fkui/vue";

export default defineComponent({
    name: "FInteractiveTableInputExample",
    components: {
        FInteractiveTable,
        FTableColumn,
        FDatepickerField,
        FNumericTextField,
    },
    data() {
        return {
            betalningar: [
                {
                    id: "1",
                    date: "2024-05-25",
                    belopp: "",
                    beskrivning: "Första utbetalning",
                },
                {
                    id: "2",
                    date: "2024-06-25",
                    belopp: "",
                    beskrivning: "Andra utbetalning",
                },
                {
                    id: "3",
                    date: "2024-07-24",
                    belopp: "",
                    beskrivning: "Tredje utbetalning",
                },
            ],
        };
    },
});
</script>
