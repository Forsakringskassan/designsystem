<script lang="ts">
import { defineComponent } from "vue";
import { type ContextMenuItem, FButton, FContextMenu, getHTMLElementFromVueRef } from "@fkui/vue";

const exampleItems: ContextMenuItem[] = [
    { label: "Påminnelse", key: "MENU_2", icon: "bell" },
    { label: "Ändra", key: "MENU_3", icon: "pen" },
    { separator: true },
    { label: "Ta bort", key: "MENU_4", icon: "trashcan" },
    { label: "Utan ikon", key: "MENU_5" },
];

export default defineComponent({
    name: "FContextMenuExample",
    components: { FButton, FContextMenu },
    data() {
        return {
            items: exampleItems,
            selected: "",
            isOpen: false,
        };
    },
    methods: {
        getAnchor() {
            if (this.$refs.popupAnchor) {
                return getHTMLElementFromVueRef(this.$refs.popupAnchor);
            }
            return undefined;
        },
        onClose() {
            this.isOpen = false;
        },
        onClick() {
            this.isOpen = !this.isOpen;
        },
        onSelect(value: string) {
            this.selected = value;
        },
    },
});
</script>

<template>
    <div data-testid="fcontextmenu-exempel1">
        <f-button
            ref="popupAnchor"
            data-test="open-example-contextmenu-button"
            aria-haspopup="menu"
            @click="onClick"
        >
            Öppna
        </f-button>
        <pre>Selected: {{ selected }}</pre>
        <f-context-menu
            data-test="contextmenu-open"
            :is-open
            :items
            :anchor="getAnchor()"
            @close="onClose"
            @select="onSelect"
        ></f-context-menu>
    </div>
</template>
