<script lang="ts" setup generic="T extends { id: number }">
import { computed, provide, ref } from "vue";
import { FIcon } from "@fkui/vue";
import FGridCell from "./FGridCell.vue";

const { rows, expandableAttribute = undefined } = defineProps<{ rows: T[]; expandableAttribute: string | undefined }>();

const columns = [
    { id: "expander", size: "", title: "" },
    { id: "foo", size: "", title: "Förnamn" },
    { id: "bar", size: "", title: "Efternamn" },
];

function escapeNewlines(value: string): string {
    return value.replace(/\n/g, "<br/>");
}

const activeRowIndex = ref<number | undefined>(0);
const activeCellIndex = ref<number | undefined>(0);

provide("activeRowIndex", activeRowIndex);
provide("activeCellIndex", activeCellIndex);

const expandables = computed(() => rows.filter((it) => it[expandableAttribute]).map((it) => it["id"]));

function isExpandable(id: string): boolean {
    return expandables.value.includes(id);
}
const expanded = ref([]);

function toggleExpanded(id: string): void {
    const index = expanded.value.indexOf(id);
    if (index < 0) {
        expanded.value.push(id);
    } else {
        console.log("splice", id);
        expanded.value.splice(index, 1);
    }
}

// actionCell? som aktiverar element inuti vid pilning. som navigerar vidare vid pilning. som, dessutom, renderas ibland bara, ibland tomt.
// som.. har en ikon beroende på whatever. som spänner hela cellen vid click.

// editCell. som delegerar till vy och editläge.

function toggleIcon(id: string): string {
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
</script>

<template>
    {{ expandables }}
    {{ expanded }}
    <table class="table table--striped">
        <colgroup>
            <col v-for="column in columns" :key="column.id" :class="column.size" />
        </colgroup>
        <thead>
            <tr class="table__row">
                <th v-for="column in columns" :key="column.id" scope="col" class="table__column">
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <span v-html="escapeNewlines(column.title)"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in currentRows" :key="row.id" class="table__row">
                <template v-if="isExpandable(row.id)">
                    <f-grid-cell :focusable="false">
                        <template #default="{ active }">
                            <button
                                :ref="row.id"
                                v-focus="active"
                                aria-label="expander"
                                type="button"
                                class="expander"
                                @click="toggleExpanded(row.id)"
                            >
                                <f-icon class="button__icon" :name="toggleIcon(row.id)"></f-icon>
                            </button>
                        </template>
                    </f-grid-cell>

                    <!-- vad sa vi? tdn blir dum. låt inject under lösa fokushantering. men då kanske den kan vara en komponent i sig.. td button td link td checkbox  -->
                    <!--  i enkla fall jag vill lägga in en knapp. eller whatever. fokus ska bara funka.  -->
                </template>
                <template v-else>
                    <f-grid-cell><span></span></f-grid-cell>
                </template>

                <slot v-bind="{ row }"></slot>
            </tr>
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
