<script setup lang="ts">
import { type Ref, computed, ref, useTemplateRef } from "vue";
import { type ContextMenuItem, FContextMenu, FDatepickerField } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface Row {
    id: string;
    text1: string;
    text2: string;
    text3: string;
}

const columns = defineTableColumns<Row>([
    {
        type: "text",
        header: "ID",
        key: "id",
    },
    {
        type: "text",
        header: "Text 1",
        key: "text1",
    },
    {
        header: "Åtgärd",
        type: "menu",
        text(row) {
            return `Visa åtgärder för rad "${row.id}"`;
        },
        actions: [
            {
                label: "Visa",
                icon: "search",
                onClick(row) {
                    window.alert(`Visa detaljer för rad "${row.id}"`);
                },
            },
            {
                label: "Redigera",
                icon: "pen",
                onClick(row) {
                    window.alert(`Redigera rad "${row.id}"`);
                },
            },
            {
                label: "Ta bort",
                icon: "trashcan",
                onClick(row) {
                    window.alert(`Ta bort rad "${row.id}"`);
                },
            },
        ],
    },
    {
        type: "text",
        header: "Text 2",
        key: "text2",
    },
    {
        type: "text",
        header: "Text 3",
        key: "text3",
    },
]);

const rows = [
    {
        id: "1",
        text1: "Text 1",
        text2: "Text 2",
        text3: "Text 3",
    },
    {
        id: "2",
        text1: "Text 4",
        text2: "Text 5",
        text3: "Text 6",
    },
    {
        id: "3",
        text1: "Text 7",
        text2: "Text 8",
        text3: "Text 9",
    },
];

const items: Ref<ContextMenuItem[]> = ref([
    { label: "Påminnelse", key: "MENU_2", icon: "bell" },
    { label: "Ändra", key: "MENU_3", icon: "pen" },
    { separator: true },
    { label: "Ta bort", key: "MENU_4", icon: "trashcan" },
    { label: "Utan ikon", key: "MENU_5" },
]);
const selected = ref("");
const isOpen = ref(false);

const anch = useTemplateRef("popupAnchor");

const anchor = computed(() => {
    return anch.value as HTMLElement;
});

function onClose(): void {
    isOpen.value = false;
}
function onClick(): void {
    isOpen.value = !isOpen.value;
}
function onSelect(value: string): void {
    selected.value = value;
}
</script>

<template>
    <div class="sandbox-container">
        <div class="space-box"></div>
        <div class="table-container">
            <div class="table-container-inner">
                <h2>FTable</h2>
                <f-table ref="table" :rows :columns striped></f-table>
            </div>
        </div>
        <div class="menu-container">
            <h2>FContextMenu</h2>
            <button
                ref="popupAnchor"
                data-test="open-example-contextmenu-button"
                type="button"
                class="button button--primary"
                aria-haspopup="menu"
                @click="onClick"
            >
                Öppna
            </button>
            <pre>Selected: {{ selected }}</pre>
            <f-context-menu
                data-test="contextmenu-open"
                :is-open
                :items
                :anchor
                @close="onClose"
                @select="onSelect"
            ></f-context-menu>
            <h2>FDatepickerField</h2>
            <f-datepicker-field></f-datepicker-field>
        </div>
        <div class="space-box"></div>
    </div>
</template>

<style>
.sandbox-container {
    min-height: 200vh;
    min-width: 200vw;
}

.menu-container {
    margin-left: 600px;
    width: 400px;
}

.table-container {
    margin-left: 600px;
    width: 800px;
    overflow: scroll;
}

.table-container-inner {
    width: 1200px;
}

.space-box {
    height: 400px;
}
</style>
