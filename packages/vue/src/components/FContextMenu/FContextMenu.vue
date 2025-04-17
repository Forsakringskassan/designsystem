<script lang="ts">
import { defineComponent, ref, type PropType } from "vue";
import { focus } from "@fkui/logic";
import { IPopup } from "../../internal-components/IPopup";
import { FIcon } from "../FIcon";
import { actionFromKeyboardEvent, getHTMLElementsFromVueRef } from "../../utils";
import { MenuAction } from "../../types";
import {
    type ContextMenuItem,
    type ContextMenuTextItem,
    isContextMenuSeparatorItem,
    isContextMenuTextItem,
} from "./contextmenuitem";
import { doMenuAction } from "./contextmenu-logic";

const preventKeys: string[] = [
    "Tab",
    "Up",
    "Down",
    "ArrowUp",
    "ArrowDown",
    "Home",
    "End",
    " ",
    "Spacebar",
    "Enter",
    "Escape",
];

const keyUp = ["ArrowUp", "Up"];

export default defineComponent({
    name: "FContextMenu",
    components: { IPopup, FIcon },
    props: {
        /**
         * Toggle open/closed popup.
         */
        isOpen: {
            type: Boolean,
            required: true,
        },
        /**
         * DOM element to position popup at.
         */
        anchor: {
            type: HTMLElement as PropType<HTMLElement | undefined>,
            required: false,
            default: undefined,
        },
        /**
         * The items to be diplayed in the menu
         */
        items: {
            type: Array as PropType<ContextMenuItem[]>,
            required: true,
        },
        /**
         * Unique accessible name for navigation landmark.
         */
        ariaLabel: {
            type: String,
            required: false,
            default: "Kontextuell meny",
        },
    },
    emits: ["close", "select"],
    setup() {
        return { contextmenu: ref<HTMLElement | null>(null) };
    },
    data() {
        return {
            selectedItem: "",
            currentFocusedItemIndex: -1,
        };
    },
    computed: {
        popupItems(): ContextMenuTextItem[] {
            return this.items.filter(isContextMenuTextItem);
        },
        separatorPositions(): number[] {
            const res: number[] = [];
            if (this.items.length > 1) {
                this.items.forEach((it, i) => {
                    if (isContextMenuSeparatorItem(it)) {
                        const pos = i - 1 - res.length;
                        if (pos >= 0 && pos < this.items.length - 1) {
                            res.push(pos);
                        }
                    }
                });
            }
            return res;
        },
        hasIcons(): boolean {
            return this.items.some((it) => isContextMenuTextItem(it) && it.icon);
        },
    },
    watch: {
        isOpen: {
            immediate: true,
            async handler(): Promise<void> {
                if (this.isOpen) {
                    this.currentFocusedItemIndex = -1;
                    this.selectedItem = "";
                }
            },
        },
    },
    methods: {
        hasSeparatorAfterItemAt(index: number): boolean {
            return this.separatorPositions.includes(index);
        },
        closePopup(): void {
            /**
             * Event that is dispatched after an item is selected or
             * after pressing for example esc in the menu
             */
            this.$emit("close");
        },
        onClickItem(item: ContextMenuItem): void {
            if (isContextMenuTextItem(item) && item.key) {
                this.selectedItem = item.key;
                /**
                 * Event that is dispatched when an item is selected.
                 * @type {string} item key
                 */
                this.$emit("select", this.selectedItem);
                this.closePopup();
            }
        },
        tabIndex(index: number): number {
            return index === this.currentFocusedItemIndex ? 0 : -1;
        },
        onKeyUp(event: KeyboardEvent) {
            if (preventKeys.includes(event.key)) {
                event.preventDefault();
            }
        },
        doHandlePopupMenuTabKey(action: MenuAction): boolean {
            // Detect if tab (MOVE_NEXT) or shift+tab (MOVE_PREV) reaches the limits, to avoid trapping tab
            // returns true to indicate that one should NOT continue processing this keyboard action or false otherwise
            if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex + 1 === this.popupItems.length) {
                this.closePopup();
                return true;
            } else if (
                action === MenuAction.MOVE_PREV &&
                (this.currentFocusedItemIndex === 0 || this.currentFocusedItemIndex === -1)
            ) {
                // shift-tab (MOVE_PREV) inside the popup on the first element of the popup will close the popup and
                // adjust currentFocusedItemIndex and will resume processing this keyboard action
                this.closePopup();
                return false;
            }
            return false;
        },
        async onKeyDown(event: KeyboardEvent) {
            if (!preventKeys.includes(event.key)) {
                return;
            }

            if (event.key === "Escape") {
                this.$emit("close");
                return;
            }
            const action = actionFromKeyboardEvent(event);
            if (action === null) {
                return;
            }
            if (event.key === "Tab" && this.doHandlePopupMenuTabKey(action)) {
                return;
            }
            if (keyUp.includes(event.key) && this.currentFocusedItemIndex === -1) {
                // If the user presses arrow up key (action MOVE_PREV) but there are no items in focus
                // adjust currentFocusedItemIndex so that MOVE_PREV will put focus on last item
                this.currentFocusedItemIndex = this.popupItems.length > 0 ? this.popupItems.length : 1;
            }
            event.preventDefault();
            await doMenuAction(action, this);
        },
        async setFocusOnItem(index: number): Promise<void> {
            if (index < 0 || index >= this.popupItems.length) {
                return;
            }
            this.currentFocusedItemIndex = index;
            await this.$nextTick();
            if (!this.isOpen) {
                return;
            }
            const items = getHTMLElementsFromVueRef(this.$refs.items);
            if (items.length > 0) {
                const popupMenuItem = items[index];
                focus(popupMenuItem, { preventScroll: true });
            }
        },
        async activateItem(index: number): Promise<void> {
            if (index < 0 || index >= this.popupItems.length) {
                return;
            }
            if (index !== this.currentFocusedItemIndex) {
                await this.setFocusOnItem(index);
            }
            this.onClickItem(this.popupItems[this.currentFocusedItemIndex]);
        },
    },
});
</script>

<template>
    <i-popup
        :is-open="isOpen"
        :keyboard-trap="false"
        :anchor="anchor"
        :set-focus="true"
        :focus-element="() => contextmenu"
        inline="never"
        @close="$emit('close')"
    >
        <nav class="contextmenu" :aria-label="ariaLabel" @keyup="onKeyUp" @keydown="onKeyDown">
            <ul ref="contextmenu" role="menu" tabindex="-1" class="contextmenu__list">
                <li v-for="(item, index) in popupItems" :key="item.key" role="menuitem" @click="onClickItem(item)">
                    <div ref="items" :tabindex="tabIndex(index)" class="contextmenu__list__item">
                        <f-icon
                            v-if="hasIcons"
                            class="contextmenu__lefticon"
                            :name="item.icon ? item.icon : ''"
                            :library="item.iconLibrary ? item.iconLibrary : 'f'"
                        />
                        <a ref="anchors">{{ item.label }}</a>
                    </div>
                    <hr v-if="hasSeparatorAfterItemAt(index)" class="contextmenu__separator" />
                </li>
            </ul>
        </nav>
    </i-popup>
</template>
