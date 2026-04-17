<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import {
    FButton,
    FPaginateDataset,
    FPaginator,
    FSortFilterDataset,
    useDatasetRef,
} from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    text: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Text",
        key: "text",
        editable: true,
    },
]);

const rows = useDatasetRef<Row>([
    { id: "1", text: "Apelsin" },
    { id: "2", text: "Banan" },
    { id: "3", text: "Citron" },
    { id: "4", text: "Druva" },
    { id: "5", text: "Fikon" },
    { id: "6", text: "Granatapple" },
]);

const selectedRows = ref<Row[]>([]);
const sortableAttributes = { text: "Text" };
const itemsPerPage = ref(3);
const sortFilter = useTemplateRef("sortFilter");

function onAddRow(): void {
    rows.value.push({
        id: String(rows.value.length + 1),
        text: "Äpple",
    });
}

function onRefresh(): void {
    sortFilter.value?.refresh();
}
</script>

<template>
    <div class="row">
        <div class="col col--sm-4">
            <p data-test="selected-count">Valda rader: {{ selectedRows.length }}</p>

            <f-button data-test="add-row" variant="secondary" @click="onAddRow"
                >Lägg till rad</f-button
            >
            <f-button data-test="refresh" variant="secondary" @click="onRefresh">Refresh</f-button>

            <f-sort-filter-dataset
                ref="sortFilter"
                v-test="'filter'"
                mode="lazy"
                :data="rows"
                :sortable-attributes
                default-sort-attribute="text"
            >
                <template #default="{ sortFilterResult }">
                    <f-paginate-dataset :items="sortFilterResult" :items-per-page>
                        <template #default="{ items: currentPageItems }">
                            <f-table
                                v-model:selected-rows="selectedRows"
                                :rows="currentPageItems"
                                :columns
                                key-attribute="id"
                                selectable="multi"
                            />
                            <f-paginator />
                        </template>
                    </f-paginate-dataset>
                </template>
            </f-sort-filter-dataset>
        </div>
        <div class="col col--sm-8">
            <h2>Redigerbar tabell med sortering och filtrering (lazy), paginering, flerval.</h2>
            <p>
                Lazy-läge kör inte om sortering vid inline-editering och lägger till nya rader sist.
                Ny sortering/filtrering körs först när användaren sorterar eller filtrerar.
            </p>

            <h3>Om man lägger till en eller flera rader</h3>
            <pre>
        - när ingen sortering eller filtrering är aktiv, så visas rad så som den blivit placerad i dataset, ingen sidnavigering sker
        - när sortering eller filtrering är aktiv, så visas rad sist, sidnavigering till sista sidan
        - val behålls. bulkruta status kan påverkas (från ikryssad till indeterminate).
    </pre
            >

            <h3>Om man tar bort en eller flera rader</h3>
            <pre>
        - val behålls. bulkruta status kan påverkas (från indeterminate till ikryssad).
        - sidnavigering sker till sista sidan om aktuell sida innan borttag inte längre finns kvar
    </pre
            >

            <h3>Om man redigerar rader</h3>
            <pre>
        - när ingen sortering eller filtrering är aktiv: inget speciell hantering
        - när filtrering eller sortering är aktiva:
          - rad ska finnas kvar även om filtret ej längre matchar raden
          - rad ska ligga kvar på samma position även om ändringen påverkar sorteringsordning.
          - sortering ska sättas till ovald ("Välj")
          - ingen sidnavigering sker
    </pre
            >

            <h3>
                Om man helt ersätter all data, inga rader kvar från föregående data (instansbaserat)
            </h3>
            <pre>
        - när ingen sortering eller filtrering är aktiv: allt visas
        - när filter eller sortering är aktiva: filter och sortering körs om
        - val nollställs
        - sidnavigering till första sidan
    </pre
            >
            <h3>Om man filtrerar</h3>
            <pre>
        - filtrering och sortering körs om
        - val nollställs
        - sidnavigering till första sidan
    </pre
            >

            <h3>Om man sorterar</h3>
            <pre>
        - filtrering och sortering körs om
        - val behålls
        - sidnavigering till första sidan
    </pre
            >

            <h3>Om man kör refresh (`fSortFilterDataset.refresh()`)</h3>
            <pre>
        - filtrering och sortering körs om
        - val behålls
        - sidnavigering till första sidan
            </pre>
        </div>
    </div>
</template>
