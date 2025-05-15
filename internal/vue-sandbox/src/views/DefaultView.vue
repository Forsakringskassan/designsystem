<script setup lang="ts">
import { ref } from "vue";
import { FCrudButton, FCrudDataset, FInteractiveTable, FTableColumn, FTextField, FTextareaField } from "@fkui/vue";

const rowsOne = ref([
    {
        id: "1",
        name: "Äpple",
        origin: "Sverige",
        description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
    },
    {
        id: "2",
        name: "Banan",
        origin: "Colombia",
        description: "Lång, gul frukt med mjukt och sött fruktkött.",
    },
    {
        id: "3",
        name: "Vattenmelon",
        origin: "Spanien",
        description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
    },
]);

const rowsTwo = ref([
    {
        id: "1",
        name: "Äpple",
        origin: "Sverige",
        description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
        expandable: [
            {
                id: "1a",
                name: "Äpple",
                origin: "Sverige",
                description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
            },
            {
                id: "1b",
                name: "Äpple",
                origin: "Sverige",
                description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
            },
        ],
    },
    {
        id: "2",
        name: "Banan",
        origin: "Colombia",
        description: "Lång, gul frukt med mjukt och sött fruktkött.",
        expandable: [
            {
                id: "2a",
                name: "Banan",
                origin: "Colombia",
                description: "Lång, gul frukt med mjukt och sött fruktkött.",
            },
            {
                id: "2b",
                name: "Banan",
                origin: "Colombia",
                description: "Lång, gul frukt med mjukt och sött fruktkött.",
            },
        ],
    },
    {
        id: "3",
        name: "Vattenmelon",
        origin: "Spanien",
        description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
        expandable: [
            {
                id: "3a",
                name: "Vattenmelon",
                origin: "Spanien",
                description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
            },
            {
                id: "3b",
                name: "Vattenmelon",
                origin: "Spanien",
                description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
            },
        ],
    },
]);

const rowsThree = ref([
    {
        id: "1",
        name: "Äpple",
        origin: "Sverige",
        description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
        expandable: [
            {
                id: "1a",
                name: "Äpple",
                origin: "Sverige",
                description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
            },
            {
                id: "1b",
                name: "Äpple",
                origin: "Sverige",
                description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
            },
        ],
    },
    {
        id: "2",
        name: "Banan",
        origin: "Colombia",
        description: "Lång, gul frukt med mjukt och sött fruktkött.",
        expandable: [
            {
                id: "2a",
                name: "Banan",
                origin: "Colombia",
                description: "Lång, gul frukt med mjukt och sött fruktkött.",
            },
            {
                id: "2b",
                name: "Banan",
                origin: "Colombia",
                description: "Lång, gul frukt med mjukt och sött fruktkött.",
            },
        ],
    },
    {
        id: "3",
        name: "Vattenmelon",
        origin: "Spanien",
        description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
        expandable: [
            {
                id: "3a",
                name: "Vattenmelon",
                origin: "Spanien",
                description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
            },
            {
                id: "3b",
                name: "Vattenmelon",
                origin: "Spanien",
                description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
            },
        ],
    },
]);

const rowsFour = ref([
    {
        id: "1",
        name: "Äpple",
        origin: "Sverige",
        description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
        expandable: [
            {
                id: "1a",
                name: "Äpple",
                origin: "Sverige",
                description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
            },
            {
                id: "1b",
                name: "Äpple",
                origin: "Sverige",
                description: "Rund, ofta röd eller grön frukt med söt eller syrlig smak.",
            },
        ],
    },
    {
        id: "2",
        name: "Banan",
        origin: "Colombia",
        description: "Lång, gul frukt med mjukt och sött fruktkött.",
        expandable: [
            {
                id: "2a",
                name: "Banan",
                origin: "Colombia",
                description: "Lång, gul frukt med mjukt och sött fruktkött.",
            },
            {
                id: "2b",
                name: "Banan",
                origin: "Colombia",
                description: "Lång, gul frukt med mjukt och sött fruktkött.",
            },
        ],
    },
    {
        id: "3",
        name: "Vattenmelon",
        origin: "Spanien",
        description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
        expandable: [
            {
                id: "3a",
                name: "Vattenmelon",
                origin: "Spanien",
                description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
            },
            {
                id: "3b",
                name: "Vattenmelon",
                origin: "Spanien",
                description: "Stor, rund frukt med grönt skal och saftigt, rött fruktkött.",
            },
        ],
    },
]);
</script>

<template>
    <div class="sandbox-root">
        <h1>FKUI Sandbox</h1>
        <div>
            <h2>Ej expanderbar tabell med crud</h2>
            <f-crud-dataset v-model="rowsOne">
                <template #default>
                    <f-interactive-table :rows="rowsOne">
                        <template #caption> <b>Frukter</b> </template>
                        <template #default="{ row }">
                            <f-table-column title="Namn" type="text" shrink>
                                {{ row.name }}
                            </f-table-column>
                            <f-table-column title="Land" type="text" shrink>
                                {{ row.origin }}
                            </f-table-column>
                            <f-table-column title="Beskrivning" type="text" expand>
                                {{ row.description }}
                            </f-table-column>
                            <f-table-column title="Åtgärd" type="action" shrink>
                                <f-crud-button action="modify" :item="row" icon />
                                <f-crud-button action="delete" :item="row" icon />
                            </f-table-column>
                        </template>
                    </f-interactive-table>
                </template>
                <template #modify="{ item }">
                    <f-text-field
                        v-model="item.name"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Namn
                    </f-text-field>
                    <f-text-field
                        v-model="item.origin"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Land
                    </f-text-field>
                    <f-textarea-field v-model="item.description" v-validation.required> Beskrivning </f-textarea-field>
                    ID {{ item.id }}
                </template>

                <template #add="{ item }">
                    <f-text-field
                        v-model="item.id"
                        v-validation.required.maxLength="{ maxLength: { length: 4 } }"
                        type="text"
                    >
                        ID
                    </f-text-field>
                    <f-text-field
                        v-model="item.name"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Namn
                    </f-text-field>
                    <f-text-field
                        v-model="item.origin"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Land
                    </f-text-field>
                    <f-textarea-field v-model="item.description" v-validation.required> Beskrivning </f-textarea-field>
                </template>

                <template #delete="{ item }">
                    Vill du verkligen radera fruken "{{ item.name }}" med ID {{ item.id }}
                </template>
            </f-crud-dataset>

            <h2>Expanderbar tabell med crud</h2>
            <f-crud-dataset v-model="rowsTwo">
                <template #default>
                    <f-interactive-table :rows="rowsTwo" expandable-attribute="expandable">
                        <template #caption> <b>Frukter</b> </template>
                        <template #default="{ row }">
                            <f-table-column title="Namn" type="text" shrink>
                                {{ row.name }}
                            </f-table-column>
                            <f-table-column title="Land" type="text" shrink>
                                {{ row.origin }}
                            </f-table-column>
                            <f-table-column title="Beskrivning" type="text" expand>
                                {{ row.description }}
                            </f-table-column>
                            <f-table-column title="Åtgärd" type="action" shrink>
                                <f-crud-button action="modify" :item="row" icon />
                                <f-crud-button action="delete" :item="row" icon />
                            </f-table-column>
                        </template>
                    </f-interactive-table>
                </template>
                <template #modify="{ item }">
                    <f-text-field
                        v-model="item.name"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Namn
                    </f-text-field>
                    <f-text-field
                        v-model="item.origin"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Land
                    </f-text-field>
                    <f-textarea-field v-model="item.description" v-validation.required> Beskrivning </f-textarea-field>
                    ID {{ item.id }}
                </template>

                <template #add="{ item }">
                    <f-text-field
                        v-model="item.id"
                        v-validation.required.maxLength="{ maxLength: { length: 4 } }"
                        type="text"
                    >
                        ID
                    </f-text-field>
                    <f-text-field
                        v-model="item.name"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Namn
                    </f-text-field>
                    <f-text-field
                        v-model="item.origin"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Land
                    </f-text-field>
                    <f-textarea-field v-model="item.description" v-validation.required> Beskrivning </f-textarea-field>
                </template>

                <template #delete="{ item }">
                    Vill du verkligen radera fruken "{{ item.name }}" med ID {{ item.id }}
                </template>
            </f-crud-dataset>

            <h2>Custom expanderbar tabell med crud och fokuserbart innehåll</h2>
            <f-crud-dataset v-model="rowsThree">
                <template #default>
                    <f-interactive-table :rows="rowsThree" expandable-attribute="expandable">
                        <template #caption> <b>Frukter</b> </template>
                        <template #default="{ row }">
                            <f-table-column title="Namn" type="text" shrink>
                                {{ row.name }}
                            </f-table-column>
                            <f-table-column title="Land" type="text" shrink>
                                {{ row.origin }}
                            </f-table-column>
                            <f-table-column title="Beskrivning" type="text" expand>
                                {{ row.description }}
                            </f-table-column>
                            <f-table-column title="Åtgärd" type="action" shrink>
                                <f-crud-button action="modify" :item="row" icon />
                                <f-crud-button action="delete" :item="row" icon />
                            </f-table-column>
                        </template>
                        <template #expandable="{ expandableRow }">
                            <div v-if="expandableRow.id.endsWith('a')">
                                Knapp ska få fokus:
                                <button type="button" class="button button--secondary button--small">
                                    {{ expandableRow.name }}
                                </button>
                            </div>
                            <div v-else>Denna rad kan inte fokuseras</div>
                        </template>
                    </f-interactive-table>
                </template>
                <template #modify="{ item }">
                    <f-text-field
                        v-model="item.name"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Namn
                    </f-text-field>
                    <f-text-field
                        v-model="item.origin"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Land
                    </f-text-field>
                    <f-textarea-field v-model="item.description" v-validation.required> Beskrivning </f-textarea-field>
                    ID {{ item.id }}
                </template>

                <template #add="{ item }">
                    <f-text-field
                        v-model="item.id"
                        v-validation.required.maxLength="{ maxLength: { length: 4 } }"
                        type="text"
                    >
                        ID
                    </f-text-field>
                    <f-text-field
                        v-model="item.name"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Namn
                    </f-text-field>
                    <f-text-field
                        v-model="item.origin"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Land
                    </f-text-field>
                    <f-textarea-field v-model="item.description" v-validation.required> Beskrivning </f-textarea-field>
                </template>

                <template #delete="{ item }">
                    Vill du verkligen radera fruken "{{ item.name }}" med ID {{ item.id }}
                </template>
            </f-crud-dataset>

            <h2>Custom expanderbar tabell med crud utan fokuserbart innehåll</h2>
            <f-crud-dataset v-model="rowsFour">
                <template #default>
                    <f-interactive-table :rows="rowsFour" expandable-attribute="expandable">
                        <template #caption> <b>Frukter</b> </template>
                        <template #default="{ row }">
                            <f-table-column title="Namn" type="text" shrink>
                                {{ row.name }}
                            </f-table-column>
                            <f-table-column title="Land" type="text" shrink>
                                {{ row.origin }}
                            </f-table-column>
                            <f-table-column title="Beskrivning" type="text" expand>
                                {{ row.description }}
                            </f-table-column>
                            <f-table-column title="Åtgärd" type="action" shrink>
                                <f-crud-button action="modify" :item="row" icon />
                                <f-crud-button action="delete" :item="row" icon />
                            </f-table-column>
                        </template>
                        <template #expandable>
                            <div>Denna rad kan inte fokuseras</div>
                        </template>
                    </f-interactive-table>
                </template>
                <template #modify="{ item }">
                    <f-text-field
                        v-model="item.name"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Namn
                    </f-text-field>
                    <f-text-field
                        v-model="item.origin"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Land
                    </f-text-field>
                    <f-textarea-field v-model="item.description" v-validation.required> Beskrivning </f-textarea-field>
                    ID {{ item.id }}
                </template>

                <template #add="{ item }">
                    <f-text-field
                        v-model="item.id"
                        v-validation.required.maxLength="{ maxLength: { length: 4 } }"
                        type="text"
                    >
                        ID
                    </f-text-field>
                    <f-text-field
                        v-model="item.name"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Namn
                    </f-text-field>
                    <f-text-field
                        v-model="item.origin"
                        v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                        type="text"
                    >
                        Land
                    </f-text-field>
                    <f-textarea-field v-model="item.description" v-validation.required> Beskrivning </f-textarea-field>
                </template>

                <template #delete="{ item }">
                    Vill du verkligen radera fruken "{{ item.name }}" med ID {{ item.id }}
                </template>
            </f-crud-dataset>
        </div>
    </div>
</template>

<style>
.sandbox-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 2rem;
}

hr {
    margin-bottom: 2rem;
}
</style>
