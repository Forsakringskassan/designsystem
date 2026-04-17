<script setup lang="ts">
import { FSortFilterDataset, useDatasetRef } from "@fkui/vue";
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
]);

const sortableAttributes = { text: "Text" };
</script>

<template>
    <div class="row">
        <div class="col col--sm-4">
            <f-sort-filter-dataset
                v-test="'filter'"
                mode="lazy"
                :data="rows"
                :sortable-attributes
                default-sort-attribute="text"
            >
                <template #default="{ sortFilterResult }">
                    <f-table
                        :rows="sortFilterResult"
                        :columns
                        key-attribute="id"
                        selectable="multi"
                    />
                </template>
            </f-sort-filter-dataset>
        </div>

        <div class="col col--sm-8">
            <h2>Redigerbar tabell med sortering och filtrering (lazy), flerval</h2>
            <p>
                Lazy-läge kör inte om sortering vid inline-editering och lägger till nya rader sist.
                Ny sortering/filtrering körs först när användaren sorterar eller filtrerar.
            </p>
            <h3>Om man lägger till en eller flera rader</h3>
            <pre>
        - när ingen sortering eller filtrering är aktiv, så visas rad så som den blivit placerad i dataset
        - när sortering eller filtrering är aktiv, så visas rad sist
        - val behålls. bulkruta status kan påverkas (från ikryssad till indeterminate).
    </pre
            >

            <h3>Om man tar bort en eller flera rader</h3>
            <pre>
        - val behålls. bulkruta status kan påverkas (från indeterminate till ikryssad).
    </pre
            >

            <h3>Om man redigerar rader</h3>
            <pre>
        - när ingen sortering eller filtrering är aktiv: inget speciell hantering
        - när filtrering eller sortering är aktiva:
          - rad ska finnas kvar även om filtret ej längre matchar raden
          - rad ska ligga kvar på samma position även om ändringen påverkar sorteringsordning.
          - sortering ska sättas till ovald ("Välj")
    </pre
            >

            <h3>
                Om man helt ersätter all data, inga rader kvar från föregående data (instansbaserat)
            </h3>
            <pre>
        - när ingen sortering eller filtrering är aktiv: allt visas
        - när filter eller sortering är aktiva:
          - filter och sortering körs om
        - val nollställs
    </pre
            >

            <h3>Om man filtrerar</h3>
            <pre>
        - filtrering och sortering körs om
        - val nollställs
    </pre
            >

            <h3>Om man sorterar</h3>
            <pre>
        - filtrering och sortering körs om
        - val behålls
    </pre
            >

            <h3>Om man kör refresh (`fSortFilterDataset.refresh()`)</h3>
            <pre>
        - filtrering och sortering körs om
        - val behålls
    </pre
            >
        </div>
    </div>
</template>
