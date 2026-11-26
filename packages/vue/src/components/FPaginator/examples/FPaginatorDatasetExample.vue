<script setup lang="ts">
import {
    type FDefinitionListItem,
    FDefinitionList,
    FList,
    FPaginateDataset,
    FPaginator,
    getDatasetMetadata,
    useDatasetRef,
} from "@fkui/vue";

interface Row {
    name: string;
    children?: Row[];
}

const items = useDatasetRef<Row>(
    /* page 1 */
    [
        {
            name: "Kalle Anka",
            children: [{ name: "Knatte Anka" }, { name: "Fnatte Anka" }, { name: "Tjatte Anka" }],
        },
        {
            name: "Joakim von Anka",
        },
        {
            name: "Alexander Lukas",
        },
        {
            name: "Oppfinnar-Jocke",
        },
        {
            name: "Magica de Hex",
        },

        /* page 2 */
        {
            name: "Knase Anka",
        },
        {
            name: "Kajsa Anka",
            children: [{ name: "Kicki Anka" }, { name: "Pippi Anka" }, { name: "Titti Anka" }],
        },
        {
            name: "Farmor Anka",
        },
    ],
    "children",
);

function itemDefinitions(row: Row): FDefinitionListItem[] {
    const meta = getDatasetMetadata(row);
    return [
        { term: "Namn", definition: row.name },
        { term: "Radindex", definition: String(meta.ariaRowIndex) },
    ];
}
</script>

<template>
    <f-paginate-dataset :items :items-per-page="5">
        <template #default="{ items: currentPageItems }">
            <f-list id="rows" :items="currentPageItems">
                <template #default="{ item }">
                    <f-definition-list :definitions="itemDefinitions(item)" />
                    <f-list v-if="item.children" :items="item.children">
                        <template #default="{ item: nestedItem }">
                            <f-definition-list :definitions="itemDefinitions(nestedItem)" />
                        </template>
                    </f-list>
                </template>
            </f-list>
            <f-paginator></f-paginator>
        </template>
    </f-paginate-dataset>
</template>
