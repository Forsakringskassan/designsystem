<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
    FButton,
    FCheckboxField,
    FPaginateDataset,
    FPaginator,
    FSortFilterDataset,
    FTable,
    defineTableColumns,
    removeDatasetRows,
    useDatasetRef,
    useModal,
} from "@fkui/vue";

import { LiveExample } from "@forsakringskassan/docs-live-example";

interface Row {
    namn: string;
    land: string;
}

const data: Row[] = [
    {
        namn: "Apelsin",
        land: "Spanien",
    },
    {
        namn: "Banan",
        land: "Columbia",
    },
    {
        namn: "Äpple",
        land: "Sverige",
    },
    {
        namn: "Päron",
        land: "Italien",
    },
];

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "Frukt",
        key: "namn",
    },
    {
        type: "text",
        header: "Land",
        key: "land",
    },
]);

const sortableAttributes = { namn: "Frukt", land: "Land" };
const itemsPerPage = ref(3);
const rows = useDatasetRef([...data]);
const selectedRows = ref<Row[]>([]);

const useSortFilter = ref(false);
const usePagination = ref(false);

const components = {
    FTable,
    FSortFilterDataset,
    FPaginateDataset,
    FPaginator,
    FButton,
};

const livedata = {
    rows,
    columns,
    sortableAttributes,
    itemsPerPage,
    selectedRows,
};

const { confirmModal } = useModal();

const livemethods = {
    async onRemoveSelectedRows(): Promise<void> {
        if (selectedRows.value.length === 0) {
            return;
        }

        const confirmed = await confirmModal({
            heading: "Ta bort frukt(er)",
            content: "Är du säker att du vill ta bort valda frukt(er)?",
            confirm: "Ja, ta bort",
            dismiss: "Nej, behåll",
        });

        if (confirmed) {
            removeDatasetRows(rows, selectedRows);
        }
    },
    onRestoreRows() {
        rows.value = [...data];
    },
};

const actionsTemplate = /* HTML */ `
    <div class="button-group">
        <f-button variant="secondary" @click="onRemoveSelectedRows"
            >Ta bort valda frukt(er)</f-button
        >
        <f-button variant="secondary" @click="onRestoreRows">Återställ</f-button>
    </div>
`;

function tableTemplate(rowsRef?: string) {
    const rowsTemplate = rowsRef ? `:rows="${rowsRef}"` : `:rows`;

    return /* HTML */ `<f-table
        ${rowsTemplate}
        :columns
        selectable="multi"
        v-model:selected-rows="selectedRows"
    ></f-table>`;
}

function sortFilterTemplate(): string {
    return /* HTML */ `
        <f-sort-filter-dataset :data="rows" :sortable-attributes>
            <template #default="{ sortFilterResult }">
                ${tableTemplate("sortFilterResult")}
            </template>
        </f-sort-filter-dataset>
    `;
}

function paginationTemplate(itemsRef?: string): string {
    const itemsTemplate = itemsRef ? `:items="${itemsRef}"` : `:items="rows"`;

    return /* HTML */ `
        <f-paginate-dataset ${itemsTemplate} :items-per-page>
            <template #default="{ items: currentPageItems }">
                ${tableTemplate("currentPageItems")}
                <f-paginator />
            </template>
        </f-paginate-dataset>
    `;
}

function sortFilterPaginationTemplate(): string {
    return /* HTML */ `
        <f-sort-filter-dataset :data="rows" :sortable-attributes>
            <template #default="{ sortFilterResult }">
                ${paginationTemplate("sortFilterResult")}
            </template>
        </f-sort-filter-dataset>
    `;
}

const template = computed(() => {
    let resolvedTemplate: string;

    if (useSortFilter.value) {
        if (usePagination.value) {
            resolvedTemplate = sortFilterPaginationTemplate();
        } else {
            resolvedTemplate = sortFilterTemplate();
        }
    } else if (usePagination.value) {
        resolvedTemplate = paginationTemplate();
    } else {
        resolvedTemplate = tableTemplate();
    }

    return [resolvedTemplate, actionsTemplate].join("\n");
});

watch(template, () => {
    rows.value = [...data];
});
</script>

<template>
    <live-example :components :template :livedata :livemethods>
        <f-checkbox-field v-model="useSortFilter" :value="true">
            Datamängdsortering
        </f-checkbox-field>
        <f-checkbox-field v-model="usePagination" :value="true"> Paginering </f-checkbox-field>
    </live-example>
</template>
