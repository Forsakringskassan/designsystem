<script setup lang="ts">
import { ref } from "vue";
import { FTextField, FIcon, FTable, FTableCell, FTableEditCell, FTableSelectCell } from "@fkui/vue";

const rows = ref([
    {
        id: "1",
        animal: "Katt",
        level: "Föräldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: "10000",
        expandableRows: [
            {
                id: "1a",
                level: "Sjukpenningsnivå",
                start: "2022-04-18",
                end: "2022-04-20",
                antal: "30000",
            },
            {
                id: "1b",
                level: "Lägstanivå",
                start: "2022-04-16",
                end: "2022-04-17",
                antal: "20000",
            },
            {
                id: "1c",
                level: "Sjukpenningsnivå",
                start: "2022-04-11",
                end: "2022-04-15",
                antal: "50000",
            },
        ],
        expandableContent: [
            {
                id: "1a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "2",
        animal: "Spindel",
        level: "Tillfällig föräldrapenning",
        start: "2022-05-02",
        end: "2022-05-04",
        antal: "30000",
        expandableRows: [
            {
                id: "2a",
                level: "Heldag",
                start: "2022-05-02",
                end: "2022-05-04",
                antal: "30000",
            },
        ],
        expandableContent: [
            {
                id: "2a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "3",
        animal: "Hamster",
        level: "Föräldrapenning",
        start: "2022-05-16",
        end: "2022-05-27",
        antal: "11000",
        expandableRows: [
            {
                id: "3a",
                level: "Sjukpenningsnivå",
                start: "2022-05-23",
                end: "2022-05-27",
                antal: "40000",
            },
            {
                id: "3b",
                level: "Lägstanivå",
                start: "2022-05-21",
                end: "2022-05-22",
                antal: "20000",
            },
            {
                id: "3c",
                level: "Sjukpenningsnivå",
                start: "2022-05-16",
                end: "2022-05-20",
                antal: "50000",
            },
        ],
        expandableContent: [
            {
                id: "3a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
]);

const selectFieldOptions = ref(["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"]);

function onButtonClick(value: string): void {
    alert(`Du klickade på ${value}`);
}
</script>

<template>
    <f-table :rows key-attribute="id" striped>
        <template #default="{ row }">
            <f-table-cell title="Kryssruta">
                <input type="checkbox" aria-label="Kryssruta" />
            </f-table-cell>
            <f-table-select-cell
                v-model="row.animal"
                :options="selectFieldOptions"
                title="Dropplista"
            />
            <f-table-cell title="Text">{{ row.id }}</f-table-cell>
            <f-table-cell v-format:number="row.antal" title="Formatterad text"></f-table-cell>
            <f-table-cell title="Knapp">
                <button class="icon-button" type="button" @click="() => onButtonClick(row.id)">
                    <f-icon name="trashcan"></f-icon>
                    <span class="sr-only">Knapptext</span>
                </button>
            </f-table-cell>
            <f-table-cell title="Länk">
                <a class="anchor anchor--block" href="#">Länktext</a>
            </f-table-cell>
            <f-table-edit-cell title="Redigerbar text">
                <f-text-field
                    v-model="row.level"
                    v-validation.required
                    class="table-input"
                    maxlength="40"
                ></f-text-field>
            </f-table-edit-cell>
        </template>
    </f-table>
</template>

<style>
.icon-button {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
    cursor: pointer;
}

.level-2 {
    margin-left: 0.5rem;
}

.level-3 {
    padding-left: 1rem;
}
</style>
