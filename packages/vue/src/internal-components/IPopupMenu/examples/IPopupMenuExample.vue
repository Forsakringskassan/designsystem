<script lang="ts">
import { defineComponent } from "vue";
import { IPopupMenu } from "..";

const exampleItems = [
    { label: "Länk 1", key: "MENU_1" },
    { label: "Länk 2", key: "MENU_2" },
    { label: "Länk 3", key: "MENU_3" },
    { label: "Länk 4 (med href)", key: "MENU_HREF", href: "/" },
    {
        label: "Länk 5 (med href + target)",
        key: "MENU_EXTERN",
        href: "https://github.com/Forsakringskassan/designsystem",
        target: "_blank",
    },
];

const upKeys = ["Up", "ArrowUp"];
const downKeys = ["Down", "ArrowDown"];
const verticalKeys = [...upKeys, ...downKeys];
const preventKeys = ["Tab", ...verticalKeys];

export default defineComponent({
    name: "IPopupMenuExample",
    components: { IPopupMenu },
    data() {
        return {
            items: exampleItems,
            selectedItem: "",
            focusedItem: "",
            popupOpen: false,
        };
    },
    methods: {
        getAnchor(): HTMLElement {
            return this.$refs["popup-anchor"] as HTMLElement;
        },
        onClose(): void {
            this.popupOpen = false;
        },
        onClick(): void {
            this.popupOpen = !this.popupOpen;
        },
        onKeyUp(event: KeyboardEvent): void {
            if (!this.popupOpen) {
                return;
            }
            if (preventKeys.includes(event.key)) {
                event.preventDefault();
            }
        },
        onKeyDown(event: KeyboardEvent): void {
            if (!this.popupOpen) {
                return;
            }
            if (!preventKeys.includes(event.key)) {
                return;
            }

            const tabNext = event.key === "Tab" && !event.shiftKey;
            const focusPopup = tabNext || verticalKeys.includes(event.key);
            if (focusPopup) {
                event.preventDefault();
                const index = upKeys.includes(event.key) ? this.items.length - 1 : 0;
                this.focusedItem = this.items[index].key;
                return;
            }

            this.popupOpen = false;
        },
    },
});
</script>

<template>
    <div>
        <button
            id="popup-menu-open-button"
            ref="popup-anchor"
            type="button"
            class="button button--secondary"
            @click="onClick"
            @keyup="onKeyUp"
            @keydown="onKeyDown"
        >
            Öppna popupmeny
        </button>

        <i-popup-menu
            id="popup-menu"
            v-model="selectedItem"
            v-model:focused-item="focusedItem"
            :items="items"
            :is-open="popupOpen"
            :anchor="getAnchor()"
            enable-keyboard-navigation
            @close="onClose"
        ></i-popup-menu>

        <pre>Selected item: {{ selectedItem }}</pre>
    </div>
</template>
