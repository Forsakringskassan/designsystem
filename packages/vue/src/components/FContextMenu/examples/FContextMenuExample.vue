<script>
import { defineComponent } from "vue";
import { FContextMenu } from "@fkui/vue";

/** @type {ContextMenuItem[]} */
const exampleItems = [
    { label: "Påminnelse", key: "MENU_2", icon: "bell" },
    { label: "Ändra", key: "MENU_3", icon: "pen" },
    { separator: true },
    { label: "Ta bort", key: "MENU_4", icon: "trashcan" },
    { label: "Utan ikon", key: "MENU_5" },
];

export default defineComponent({
    name: "FContextMenuExample",
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
    <div data-testid="fcontextmenu-exempel1">
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
            :is-open="isOpen"
            :items="items"
            :anchor="getAnchor()"
            @close="onClose"
            @select="onSelect"
        ></f-context-menu>
    </div>
</template>
