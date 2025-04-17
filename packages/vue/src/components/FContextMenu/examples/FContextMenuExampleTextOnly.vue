<script>
import { defineComponent } from "vue";
import { FContextMenu } from "@fkui/vue";

/** @type {ContextMenuItem[]} */
const exampleItems = [
    { label: "Skriv ut", key: "MENU_1" },
    { label: "Påminnelse", key: "MENU_2" },
    { label: "Ändra", key: "MENU_3" },
    { separator: true },
    { label: "Ta bort", key: "MENU_4" },
    { label: "Utan ikon", key: "MENU_5" },
    { separator: true },
    { label: "Sista menyval med längsta bredd som överstiger 260px", key: "MENU_6" },
];

export default defineComponent({
    name: "FContextMenuExampleTextOnly",
    components: { FContextMenu },
    data() {
        return {
            items: exampleItems,
            selected: "",
            isOpen: false,
        };
    },
    methods: {
        getAnchor() {
            return this.$refs.popupAnchor;
        },
        onClose() {
            this.isOpen = false;
        },
        onClick() {
            this.isOpen = !this.isOpen;
        },
        onSelect(value) {
            this.selected = value;
        },
    },
});
</script>

<template>
    <div data-testid="fcontextmenu-exempel2">
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
            :is-open="isOpen"
            :items="items"
            :anchor="getAnchor()"
            @close="onClose"
            @select="onSelect"
        ></f-context-menu>
    </div>
</template>
