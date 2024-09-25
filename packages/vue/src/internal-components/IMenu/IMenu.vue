<template>
    <nav
        ref="menu"
        class="imenu"
        aria-label="Navigeringsmeny"
        :class="menuClasses"
        @keyup="onKeyUp"
        @keydown="onKeyDown"
    >
        <ul class="imenu__list" role="menubar">
            <li
                v-for="(item, index) in items"
                :key="item.key"
                ref="items"
                :data-ref-index="index"
                :class="itemClasses(item, index)"
                role="none"
                @click="onClickItem(item)"
            >
                <div class="imenu__list__anchor-container">
                    <a
                        ref="anchors"
                        :data-ref-index="index"
                        tabindex="0"
                        :href="item.href"
                        :target="item.target"
                        class="imenu__list__anchor"
                        role="menuitem"
                    >
                        <span v-if="showItemSrText(index)" class="sr-only">
                            <span>{{ selectedItemSrText }}&nbsp;</span>
                        </span>
                        {{ item.label }}
                    </a>
                </div>
            </li>

            <li v-if="hasOverflow" class="imenu__popup-item" role="none">
                <div ref="popup-item" :class="popupItemClasses" @click="togglePopup(true)">
                    <div class="imenu__list__anchor-container">
                        <a
                            ref="popup-anchor"
                            tabindex="0"
                            class="imenu__list__anchor"
                            role="menuitem"
                            aria-haspopup="menu"
                            :aria-expanded="popupOpen ? 'true' : 'false'"
                        >
                            <span class="sr-only">
                                <span>{{ getOverflowMenuSrText }}&nbsp;</span>
                            </span>
                            {{ popupLabel }}
                            <span class="imenu__list__anchor-span" />
                            <f-icon name="arrow-down" class="imenu__list__anchor-icon-right" />
                        </a>
                    </div>
                </div>
            </li>
        </ul>

        <i-popup-menu
            ref="popup-menu"
            v-model="selectedItem"
            :items="overflowItems"
            :is-open="popupOpen"
            :anchor="popupAnchor"
            :focused-item-key="popupFocusedItemKey"
            :selected-menu-item-screen-reader-text="selectedItemSrText"
            :aria-label="popupAriaLabel"
            enable-keyboard-navigation
            @select="onPopupMenuItemSelected"
            @close="togglePopup(false)"
        />
    </nav>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { debounce } from "@fkui/logic";
import { FIcon } from "../../components/FIcon";
import { IPopupMenu } from "../IPopupMenu";
import {
    actionFromKeyboardEvent,
    getAbsolutePosition,
    getHTMLElementFromVueRef,
    getSortedHTMLElementsFromVueRef,
    focus,
} from "../../utils";
import { IMenuItem, findOverflowIndex } from "./imenu-utils";
import { doMenuAction } from "./imenu-logic";

interface IMenuData {
    resizeObserver: ResizeObserver | undefined;
    selectedItem: string;
    overflowIndex: number;
    popupOpen: boolean;
    popupAnchor: HTMLElement | undefined;
    popupFocusedItemKey: string;
}

const upKeys = ["Up", "ArrowUp"];
const downKeys = ["Down", "ArrowDown"];
const preventKeys = [
    "Tab",
    "Left",
    "Right",
    "ArrowLeft",
    "ArrowRight",
    "Home",
    "End",
    " ",
    "Spacebar",
    "Enter",
    ...upKeys,
    ...downKeys,
];

export default defineComponent({
    name: "IMenu",
    components: { FIcon, IPopupMenu },
    props: {
        /**
         * The currently selected and highlighted menu item key.
         *
         * @model
         */
        modelValue: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * The items to be displayed in the menu.
         */
        items: {
            type: Array as PropType<IMenuItem[]>,
            required: true,
        },
        /**
         * If true, show the menu vertically.
         */
        vertical: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Key of a menu item to set focus on.
         */
        focusedItemKey: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * If true, enable built-in keyboard navigation.
         */
        enableKeyboardNavigation: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * If true, items that don't fit in the width of the container will be placed in a popup menu instead.
         * Cannot be combined with a vertical menu.
         */
        enableOverflow: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Screen reader text for a selected menu item.
         */
        selectedItemSrText: {
            type: String,
            required: false,
            default: "Aktuell sida",
        },
        /**
         * Screen reader text for the overflow menu.
         */
        overflowMenuSrText: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * Screen reader text for the overflow menu item when it has a selected item.
         */
        selectedOverflowMenuSrText: {
            type: String,
            required: false,
            default: "underliggande vald nu",
        },
        /**
         * Unique accessible name for navigation landmark in popup.
         */
        popupAriaLabel: {
            type: String,
            required: false,
            default: "Popupmeny",
        },
        /**
         * Label for menu item that open the overflow popup menu.
         */
        popupLabel: {
            type: String,
            required: false,
            default: "Mer",
        },
    },
    emits: [
        /**
         * Emitted when the amount of items that overflow changes.
         * Emitted even if overflow isn't enabled.
         *
         * @event overflow
         * @type {number} Index for first overflowed item.
         */
        "overflow",
        /**
         *  Vue 2 v-model event. Event that is dispatched when an item is clicked.
         *
         * @deprecated
         * @event select
         * @type {string} item key
         */
        "select",
        /**
         *  V-model event. Event that is dispatched when an item is clicked.
         *
         * @event update:modelValue
         * @type {string} item key
         */
        "update:modelValue",
    ],
    data(): IMenuData {
        return {
            resizeObserver: undefined as ResizeObserver | undefined,
            /**
             * Current selected (and highlighted) menu item.
             * If the item is overflowed, then the popup menu item is selected instead.
             */
            selectedItem: "",
            /**
             * Current index of the first hidden/overflowed item in the menu.
             * Has a value of -1 if there is no overflow.
             */
            overflowIndex: -1,
            popupOpen: false,
            popupAnchor: undefined,
            popupFocusedItemKey: "",
        };
    },
    computed: {
        menuClasses(): string[] {
            return this.vertical ? ["imenu--vertical"] : ["imenu--horizontal"];
        },
        popupItemClasses(): string[] {
            const highlight = this.overflowItemSelected ? ["imenu__list__item--highlight"] : [];
            return ["imenu__popup-item__wrapper", "imenu__list__item", ...highlight];
        },
        getOverflowMenuSrText(): string {
            return this.overflowItemSelected ? this.selectedOverflowMenuSrText : this.overflowMenuSrText;
        },
        overflowEnabled(): boolean {
            return this.enableOverflow && !this.vertical;
        },
        hasOverflow(): boolean {
            return this.overflowEnabled && this.overflowIndex > -1;
        },
        overflowItems(): IMenuItem[] {
            return this.hasOverflow ? this.items.slice(this.overflowIndex) : [];
        },
        overflowItemSelected(): boolean {
            return this.overflowItems.some((item) => item.key === this.modelValue);
        },
    },
    watch: {
        items: {
            deep: true,
            async handler() {
                await this.$nextTick();
                this.onResize();
            },
        },
        focusedItemKey: {
            async handler(newVal): Promise<void> {
                if (this.enableKeyboardNavigation) {
                    return;
                }
                const index = this.indexOfItemByKey(newVal);
                if (index >= 0) {
                    await this.setFocusOnItem(index);
                }
            },
        },
        modelValue: {
            async handler(newVal): Promise<void> {
                const index = this.indexOfItemByKey(newVal);
                if (index >= 0) {
                    await this.activateItem(index);
                }
            },
        },
    },
    mounted() {
        this.resizeObserver = new ResizeObserver(debounce(this.onResize, 100));
        this.resizeObserver.observe(this.$el);
        this.onResize();
    },
    unmounted() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    },
    methods: {
        itemClasses(item: IMenuItem, index: number): string[] {
            const hidden = this.hasOverflow && index >= this.overflowIndex ? ["imenu__list__item--hidden"] : [];
            const highlight = item.key === this.modelValue ? ["imenu__list__item--highlight"] : [];
            return ["imenu__list__item", ...highlight, ...hidden];
        },
        showItemSrText(index: number): boolean {
            const isSelected = this.items[index].key === this.modelValue;
            const isVisible = index < this.overflowIndex;
            return isSelected && isVisible;
        },
        getVisibleAnchors() {
            const itemAnchors = getSortedHTMLElementsFromVueRef(this.$refs.anchors);
            const sliceEnd = this.hasOverflow ? this.overflowIndex : undefined;
            const visibleItemAnchors = itemAnchors.slice(0, sliceEnd);
            const popupItemAnchor = this.hasOverflow ? [getHTMLElementFromVueRef(this.$refs["popup-anchor"])] : [];
            return [...visibleItemAnchors, ...popupItemAnchor];
        },
        getAnchor(index: number): HTMLElement | undefined {
            const anchors = this.getVisibleAnchors();
            return anchors[index];
        },
        findItemByKey(key: string): IMenuItem | undefined {
            return this.items.find((it) => it.key === key);
        },
        indexOfItemByKey(key: string): number {
            const item = this.findItemByKey(key);
            if (!item) {
                return -1;
            }
            return this.items.indexOf(item);
        },
        togglePopup(open: boolean) {
            if (open) {
                this.popupAnchor = getHTMLElementFromVueRef(this.$refs["popup-item"]);
            }

            this.popupOpen = open;
        },
        async onResize(): Promise<void> {
            const menu = getHTMLElementFromVueRef(this.$refs.menu);
            const itemElements = getSortedHTMLElementsFromVueRef(this.$refs.items);
            const menuWidth = menu.offsetWidth;
            const foundOverflowIndex = findOverflowIndex(menuWidth, itemElements);
            const adjustedIndex = this.overflowEnabled ? foundOverflowIndex - 1 : foundOverflowIndex;

            if (this.overflowIndex === adjustedIndex) {
                return;
            }

            this.overflowIndex = adjustedIndex;

            if (this.hasOverflow) {
                // wait for computed to update v-if for popup item.
                await this.$nextTick();

                const wrapper = getHTMLElementFromVueRef(this.$refs["popup-item"]);
                wrapper.style.left = "0";

                const firstHiddenItem = itemElements[this.overflowIndex];
                const firstHiddenItemRect = getAbsolutePosition(firstHiddenItem);
                const wrapperRect = getAbsolutePosition(wrapper);
                const offset = wrapperRect.x - firstHiddenItemRect.x;
                wrapper.style.left = `-${offset}px`;
            }

            this.$emit("overflow", this.overflowIndex);
        },
        async setFocusOnItem(index: number): Promise<void> {
            // Close popup on navigation and wait to let it
            // handle `popFocus` so it doesn't overwrite new focus.
            if (this.popupOpen) {
                this.togglePopup(false);
                await this.$nextTick();
            }

            const itemAnchor = this.getAnchor(index);
            focus(itemAnchor, { preventScroll: true });
        },
        async activateItem(index: number): Promise<void> {
            const popupItemFocused = this.hasOverflow && index === this.overflowIndex;
            if (popupItemFocused) {
                this.togglePopup(!this.popupOpen);
                return;
            }

            await this.onClickItem(this.items[index], true);
        },
        async onClickItem(item: IMenuItem, doClick: boolean = false): Promise<void> {
            if (item.key !== this.selectedItem) {
                this.selectedItem = item.key;
                this.$emit("update:modelValue", item.key);
                this.$emit("select", item.key);
            }

            if (item.href && doClick) {
                this.getAnchor(this.items.indexOf(item))?.click();
            }
        },
        onPopupMenuItemSelected(key: string): void {
            if (key !== this.modelValue) {
                this.togglePopup(false);
                this.selectedItem = key;
                this.$emit("update:modelValue", key);
                this.$emit("select", key);
            }
        },
        onKeyUp(event: KeyboardEvent) {
            if (!this.enableKeyboardNavigation) {
                return;
            }
            if (preventKeys.includes(event.key)) {
                event.preventDefault();
            }
        },
        async onKeyDown(event: KeyboardEvent) {
            if (!this.enableKeyboardNavigation) {
                return;
            }
            if (event.key === "Escape") {
                this.togglePopup(false);
                return;
            }
            if (!preventKeys.includes(event.key)) {
                return;
            }

            const anchors = this.getVisibleAnchors();
            const focusedIndex = anchors.findIndex((anchor) => anchor === event.target);
            const lastItemIndex = anchors.length - 1;

            const firstItemFocused = focusedIndex === 0;
            const lastItemFocused = focusedIndex === lastItemIndex;

            const tabPrev = event.key === "Tab" && event.shiftKey;
            const tabNext = event.key === "Tab" && !event.shiftKey;

            // Handle focus into popup menu.
            const shouldCheckGotoPopupKeys = this.hasOverflow && lastItemFocused && this.popupOpen;
            const gotoPopupKeyPressed = [...upKeys, ...downKeys].includes(event.key) || tabNext;
            if (shouldCheckGotoPopupKeys && gotoPopupKeyPressed) {
                event.preventDefault();

                const index = upKeys.includes(event.key) ? this.overflowItems.length - 1 : 0;
                const key = this.overflowItems[index].key;

                // Reset state so `IPopupMenu` watcher can be reused with same value.
                if (this.popupFocusedItemKey === key) {
                    this.popupFocusedItemKey = "";
                    await this.$nextTick();
                }

                this.popupFocusedItemKey = this.overflowItems[index].key;
                return;
            }

            // Do not override tab event if focusing the first/last item to allow tabbing out.
            if ((tabPrev && firstItemFocused) || (tabNext && lastItemFocused)) {
                return;
            }

            const action = actionFromKeyboardEvent(event);
            if (action === null) {
                return;
            }

            event.preventDefault();
            await doMenuAction(action, this, focusedIndex, lastItemIndex);
        },
    },
});
</script>
