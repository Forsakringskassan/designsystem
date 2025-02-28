<script setup lang="ts">
import { ref } from "vue";
import {
    FCrudDataset,
    FCrudButton,
    FDataTable,
    FInteractiveTable,
    FList,
    FTableColumn,
    FSortFilterDataset,
    FDatepickerField,
    FTextField,
    FStaticField,
} from "@fkui/vue";

const listKeyItems = ref([
    { id: 0, name: "Banan", date: "2024-03-14" },
    { id: 1, name: "Äpple", date: "2024-03-16" },
    { id: 2, name: "Apelsin", date: "2024-03-15" },
    { id: 3, name: "Mango", date: "2024-03-14" },
]);

const dataKeyItems = ref([
    { id: 0, name: "Banan", date: "2024-03-14" },
    { id: 1, name: "Äpple", date: "2024-03-16" },
    { id: 2, name: "Apelsin", date: "2024-03-15" },
    { id: 3, name: "Mango", date: "2024-03-14" },
]);

const interactiveKeyItems = ref([
    {
        id: 0,
        name: "Banan",
        date: "2024-03-14",
        expandable: [
            {
                id: "0a",
                name: "Banan #1",
                date: "2024-03-14",
            },
            {
                id: "0b",
                name: "Banan #2",
                date: "2024-03-14",
            },
        ],
    },
    { id: 1, name: "Äpple", date: "2024-03-16" },
    {
        id: 2,
        name: "Apelsin",
        date: "2024-03-15",
        expandable: [
            {
                id: "2a",
                name: "Apelsin #1",
                date: "2024-03-15",
            },
            {
                id: "2b",
                name: "Apelsin #2",
                date: "2024-03-15",
            },
        ],
    },
    { id: 3, name: "Mango", date: "2024-03-14" },
]);

const listItems = ref([
    { id: 0, name: "Banan", date: "2024-03-14" },
    { id: 1, name: "Äpple", date: "2024-03-16" },
    { id: 2, name: "Apelsin", date: "2024-03-15" },
    { id: 3, name: "Mango", date: "2024-03-14" },
]);

const dataItems = ref([
    { id: 0, name: "Banan", date: "2024-03-14" },
    { id: 1, name: "Äpple", date: "2024-03-16" },
    { id: 2, name: "Apelsin", date: "2024-03-15" },
    { id: 3, name: "Mango", date: "2024-03-14" },
]);

const interactiveItems = ref([
    {
        id: 0,
        name: "Banan",
        date: "2024-03-14",
        expandable: [
            {
                id: "0a",
                name: "Banan",
                date: "2024-03-14",
            },
            {
                id: "0b",
                name: "Banan",
                date: "2024-03-14",
            },
        ],
    },
    { id: 1, name: "Äpple", date: "2024-03-16" },
    {
        id: 2,
        name: "Apelsin",
        date: "2024-03-15",
        expandable: [
            {
                id: "2a",
                name: "Apelsin",
                date: "2024-03-15",
            },
            {
                id: "2b",
                name: "Apelsin",
                date: "2024-03-15",
            },
        ],
    },
    { id: 3, name: "Mango", date: "2024-03-14" },
]);
</script>

<template>
    <div class="sandbox-root">
        <h1>FKUI Sandbox</h1>
        <h2>Med key-attribute</h2>

        <button type="button" @click="console.log(listKeyItems)">Get items</button>
        <f-crud-dataset v-model="listKeyItems">
            <template #default>
                <f-sort-filter-dataset
                    :data="listKeyItems"
                    :sortable-attributes="{ name: 'Fruktsort', date: 'Inköpsdatum' }"
                >
                    <template #header="{ slotClass }">
                        <h3 :class="slotClass">FList</h3>
                    </template>
                    <template #default="{ sortFilterResult }">
                        <f-list :items="sortFilterResult" key-attribute="id" selectable>
                            <template #default="{ item }">
                                <h3>{{ item.name }} (ID: {{ item.id }})</h3>
                                <span>Inköpsdatum: {{ item.date }}</span>
                            </template>
                            <template #screenreader="{ item }"> Frukt {{ item.name }} </template>
                        </f-list>
                    </template>
                </f-sort-filter-dataset>
            </template>

            <template #add="{ item }">
                <f-text-field
                    v-model="item.id"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    ID
                </f-text-field>
                <f-text-field
                    v-model="item.name"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    Fruktsort
                </f-text-field>
                <f-datepicker-field v-model="item.date" v-validation.required></f-datepicker-field>
            </template>
        </f-crud-dataset>

        <button type="button" @click="console.log(dataKeyItems)">Get items</button>
        <f-crud-dataset v-model="dataKeyItems">
            <template #default>
                <f-sort-filter-dataset
                    :data="dataKeyItems"
                    :sortable-attributes="{ name: 'Fruktsort', date: 'Inköpsdatum' }"
                >
                    <template #header="{ slotClass }">
                        <h3 :class="slotClass">FDataTable</h3>
                    </template>
                    <template #default="{ sortFilterResult }">
                        <f-data-table :rows="sortFilterResult" key-attribute="id">
                            <template #caption><span class="sr-only">FDataTable</span></template>
                            <template #default="{ row }">
                                <f-table-column name="id" title="ID">{{ row.id }}</f-table-column>
                                <f-table-column name="name" title="Fruktsort">{{ row.name }}</f-table-column>
                                <f-table-column name="date" title="Inköpsdatum">{{ row.date }}</f-table-column>
                            </template>
                        </f-data-table>
                    </template>
                </f-sort-filter-dataset>
            </template>

            <template #add="{ item }">
                <f-text-field
                    v-model="item.id"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    ID
                </f-text-field>
                <f-text-field
                    v-model="item.name"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    Fruktsort
                </f-text-field>
                <f-datepicker-field v-model="item.date" v-validation.required></f-datepicker-field>
            </template>
        </f-crud-dataset>

        <button type="button" @click="console.log(interactiveKeyItems)">Get items</button>
        <f-crud-dataset v-model="interactiveKeyItems">
            <template #default>
                <f-sort-filter-dataset
                    :data="interactiveKeyItems"
                    :sortable-attributes="{ name: 'Fruktsort', date: 'Inköpsdatum' }"
                >
                    <template #header="{ slotClass }">
                        <h3 :class="slotClass">FInteractiveTable</h3>
                    </template>
                    <template #default="{ sortFilterResult }">
                        <f-interactive-table
                            :rows="sortFilterResult"
                            key-attribute="id"
                            expandable-attribute="expandable"
                            selectable
                        >
                            <template #caption><span class="sr-only">FDataTable</span></template>
                            <template #default="{ row }">
                                <f-table-column name="id" title="ID">{{ row.id }}</f-table-column>
                                <f-table-column name="name" title="Fruktsort">{{ row.name }}</f-table-column>
                                <f-table-column name="date" title="Inköpsdatum">{{ row.date }}</f-table-column>
                                <f-table-column name="actions" title="Åtgärd" type="action" shrink>
                                    <f-crud-button action="modify" :icon="true" :item="row"></f-crud-button>
                                    <f-crud-button action="delete" :icon="true" :item="row"></f-crud-button>
                                </f-table-column>
                            </template>
                        </f-interactive-table>
                    </template>
                </f-sort-filter-dataset>
            </template>

            <template #add="{ item }">
                <f-text-field
                    v-model="item.id"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    ID
                </f-text-field>
                <f-text-field
                    v-model="item.name"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    Fruktsort
                </f-text-field>
                <f-datepicker-field v-model="item.date" v-validation.required></f-datepicker-field>
            </template>

            <template #modify="{ item }">
                <f-static-field v-model="item.id" type="text">
                    <template #label> ID </template>
                    <template #default> {{ item.id }}</template>
                </f-static-field>
                <f-text-field
                    v-model="item.name"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    Fruktsort
                </f-text-field>
                <f-datepicker-field v-model="item.date" v-validation.required></f-datepicker-field>
            </template>

            <template #delete="{ item }"> Vill du verkligen radera frukten "{{ item.name }}"? </template>
        </f-crud-dataset>

        <h2>Utan key-attribute</h2>

        <button type="button" @click="console.log(listItems)">Get items</button>
        <f-crud-dataset v-model="listItems">
            <template #default>
                <f-sort-filter-dataset
                    :data="listItems"
                    :sortable-attributes="{ name: 'Fruktsort', date: 'Inköpsdatum' }"
                >
                    <template #header="{ slotClass }">
                        <h3 :class="slotClass">FList</h3>
                    </template>
                    <template #default="{ sortFilterResult }">
                        <f-list :items="sortFilterResult" selectable>
                            <template #default="{ item }">
                                <h3>{{ item.name }} (ID: {{ item.id }})</h3>
                                <span>Inköpsdatum: {{ item.date }}</span>
                            </template>
                            <template #screenreader="{ item }"> Frukt {{ item.name }} </template>
                        </f-list>
                    </template>
                </f-sort-filter-dataset>
            </template>

            <template #add="{ item }">
                <f-text-field
                    v-model="item.id"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    ID
                </f-text-field>
                <f-text-field
                    v-model="item.name"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    Fruktsort
                </f-text-field>
                <f-datepicker-field v-model="item.date" v-validation.required></f-datepicker-field>
            </template>
        </f-crud-dataset>

        <button type="button" @click="console.log(dataItems)">Get items</button>
        <f-crud-dataset v-model="dataItems">
            <template #default>
                <f-sort-filter-dataset
                    :data="dataItems"
                    :sortable-attributes="{ name: 'Fruktsort', date: 'Inköpsdatum' }"
                >
                    <template #header="{ slotClass }">
                        <h3 :class="slotClass">FDataTable</h3>
                    </template>
                    <template #default="{ sortFilterResult }">
                        <f-data-table :rows="sortFilterResult">
                            <template #caption><span class="sr-only">FDataTable</span></template>
                            <template #default="{ row }">
                                <f-table-column name="id" title="ID">{{ row.id }}</f-table-column>
                                <f-table-column name="name" title="Fruktsort">{{ row.name }}</f-table-column>
                                <f-table-column name="date" title="Inköpsdatum">{{ row.date }}</f-table-column>
                            </template>
                        </f-data-table>
                    </template>
                </f-sort-filter-dataset>
            </template>

            <template #add="{ item }">
                <f-text-field
                    v-model="item.id"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    ID
                </f-text-field>
                <f-text-field
                    v-model="item.name"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    Fruktsort
                </f-text-field>
                <f-datepicker-field v-model="item.date" v-validation.required></f-datepicker-field>
            </template>
        </f-crud-dataset>

        <button type="button" @click="console.log(interactiveItems)">Get items</button>
        <f-crud-dataset v-model="interactiveItems">
            <template #default>
                <f-sort-filter-dataset
                    :data="interactiveItems"
                    :sortable-attributes="{ name: 'Fruktsort', date: 'Inköpsdatum' }"
                >
                    <template #header="{ slotClass }">
                        <h3 :class="slotClass">FInteractiveTable</h3>
                    </template>
                    <template #default="{ sortFilterResult }">
                        <f-interactive-table :rows="sortFilterResult" expandable-attribute="expandable" selectable>
                            <template #caption><span class="sr-only">FDataTable</span></template>
                            <template #default="{ row }">
                                <f-table-column name="id" title="ID">{{ row.id }}</f-table-column>
                                <f-table-column name="name" title="Fruktsort">{{ row.name }}</f-table-column>
                                <f-table-column name="date" title="Inköpsdatum">{{ row.date }}</f-table-column>
                                <f-table-column name="actions" title="Åtgärd" type="action" shrink>
                                    <f-crud-button action="modify" :icon="true" :item="row"></f-crud-button>
                                    <f-crud-button action="delete" :icon="true" :item="row"></f-crud-button>
                                </f-table-column>
                            </template>
                        </f-interactive-table>
                    </template>
                </f-sort-filter-dataset>
            </template>

            <template #add="{ item }">
                <f-text-field
                    v-model="item.id"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    ID
                </f-text-field>
                <f-text-field
                    v-model="item.name"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    Fruktsort
                </f-text-field>
                <f-datepicker-field v-model="item.date" v-validation.required></f-datepicker-field>
            </template>

            <template #modify="{ item }">
                <f-static-field v-model="item.id" type="text">
                    <template #label> ID </template>
                    <template #default> {{ item.id }}</template>
                </f-static-field>
                <f-text-field
                    v-model="item.name"
                    v-validation.required.maxLength="{ maxLength: { length: 32 } }"
                    type="text"
                >
                    Fruktsort
                </f-text-field>
                <f-datepicker-field v-model="item.date" v-validation.required></f-datepicker-field>
            </template>

            <template #delete="{ item }"> Vill du verkligen radera frukten "{{ item.name }}"? </template>
        </f-crud-dataset>
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
