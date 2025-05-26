<script lang="ts" setup generic="T extends { id: number } & Record<string, any>">
import { computed, provide, type Ref, ref } from "vue";
import { FIcon } from "..";
import FGridRow from "./FGridRow.vue";
import FGridCell from "./FGridCell.vue";

const { rows, expandableAttribute = undefined } = defineProps<{ rows: T[]; expandableAttribute?: string }>();

let columns;

if (expandableAttribute) {
    columns = [
        { id: "expander", size: "", title: "" },
        { id: "id", size: "", title: "Id" },
        { id: "foo", size: "", title: "Förnamn" },
        { id: "bar", size: "", title: "Efternamn" },
    ];
} else {
    columns = [
        { id: "select", size: "", title: "Välj" },
        { id: "id", size: "", title: "Id" },
        { id: "foo", size: "", title: "Namn" },
        { id: "bar", size: "", title: "När" },
        { id: "shortcut", size: "", title: "" },
    ];
}

function escapeNewlines(value: string): string {
    return value.replace(/\n/g, "<br/>");
}

const activeRowIndex = ref(1);
const activeCellIndex = ref(0);

const expandables = computed(() =>
    expandableAttribute ? rows.filter((it) => it[expandableAttribute]).map((it) => it.id) : [],
);

function isExpandable(id: number): boolean {
    return expandables.value.includes(id);
}
const expanded: Ref<number[]> = ref([]);

function toggleExpanded(id: number): void {
    // att göra: hantera fokus, tabindex för action celler vid klick

    const index = expanded.value.indexOf(id);
    if (index < 0) {
        expanded.value.push(id);
    } else {
        expanded.value.splice(index, 1);
    }
}

function toggleIcon(id: number): string {
    return expanded.value.includes(id) ? "arrow-down" : "arrow-right";
}

const currentRows = computed(() => {
    if (!expandableAttribute) {
        return rows;
    }

    return rows.flatMap((it) => {
        if (expanded.value.includes(it["id"])) {
            return [it, ...it[expandableAttribute]];
        }

        return [it];
    });
});

const lastRowIndex = computed(() => {
    return currentRows.value.length;
});

provide("activeRowIndex", activeRowIndex);
provide("activeCellIndex", activeCellIndex);
provide("lastRowIndex", lastRowIndex);
</script>

<template>
    <table role="grid" class="table table--striped" aria-label="Exempeltabell">
        <colgroup>
            <col v-for="column in columns" :key="column.id" :class="column.size" />
        </colgroup>
        <thead>
            <!-- [html-validate-disable-next element-permitted-content -- this is a tr]-->
            <f-grid-row>
                <th v-for="column in columns" :key="column.id" scope="col" class="table__column">
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <span v-html="escapeNewlines(column.title)"></span>
                </th>
            </f-grid-row>
        </thead>
        <tbody>
            <!-- [html-validate-disable-next element-permitted-content -- this is a tr]-->
            <f-grid-row v-for="row in currentRows" :key="row.id">
                <template v-if="expandableAttribute">
                    <template v-if="isExpandable(row.id)">
                        <f-grid-cell :focusable="false">
                            <template #default="{ active }">
                                <button
                                    :ref="row.id"
                                    v-focus="active"
                                    :tabindex="active ? 0 : -1"
                                    aria-label="expander"
                                    type="button"
                                    class="expander"
                                    @click="toggleExpanded(row.id)"
                                >
                                    <f-icon class="button__icon" :name="toggleIcon(row.id)"></f-icon>
                                </button>
                            </template>
                        </f-grid-cell>
                    </template>
                    <template v-else>
                        <f-grid-cell><span></span></f-grid-cell>
                    </template>
                </template>

                <slot v-bind="{ row }"></slot>
            </f-grid-row>
        </tbody>
    </table>
</template>

<style>
.expander {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
}
</style>
