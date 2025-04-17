<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { debounce } from "@fkui/logic";
import { TranslationMixin } from "../../plugins";
import {
    actionFromKeyboardEvent,
    getAbsolutePosition,
    getHTMLElementFromVueRef,
    getSortedHTMLElementsFromVueRef,
    focus,
} from "../../utils";
import { IPopupMenu } from "../../internal-components/IPopupMenu";
import { FIcon } from "../FIcon";
import { type FNavigationMenuData } from "./f-navigation-menu-data";
import { type MenuItem } from "./menu-item";
import { type NavigationMenuItem } from "./navigation-menu-item";
import { findOverflowIndex } from "./find-overflow-index";
import { doMenuAction } from "./navigation-menu-logic";

const upKeys = ["Up", "ArrowUp"];
const downKeys = ["Down", "ArrowDown"];
const verticalKeys = [...upKeys, ...downKeys];
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
    ...verticalKeys,
];

export default defineComponent({
    name: "FNavigationMenu",
    components: { FIcon, IPopupMenu },
    mixins: [TranslationMixin],
    props: {
        /**
         * Current route.
         */
        route: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * The route items to be diplayed in the menu
         */
        routes: {
            type: Array as PropType<NavigationMenuItem[]>,
            required: true,
        },
        /**
         * If true, show the menu vertically
         */
        vertical: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Screen reader text for selected item
         */
        selectedMenuItemScreenReaderText: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * Screen reader text for the more menu item
         */
        menuMoreScreenReaderText: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * Screen reader text for the more menu with selected items
         */
        menuMoreWithSelectedItemsScreenReaderText: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * Unique accessible name for navigation landmark in menu.
         */
        menuAriaLabel: {
            type: String,
            required: false,
            default: "Navigeringsmeny",
        },
        /**
         * Unique accessible name for navigation landmark in popup.
         */
        popupAriaLabel: {
            type: String,
            required: false,
            default: "Popupmeny",
        },
    },
    emits: [
        /**
         * Event that is dispatched when a menu item is selected, for example, by clicking on the item.
         * In most use cases the event payload is used to call Vue `router.push()` from the consumer code.
         *
         * @event selectedRoute
         * @param route
         * @type {string}
         */
        "selectedRoute",
        /**
         * V-model event to update route property.
         *
         * @event update:route
         * @param route
         * @type {string}
         */
        "update:route",
    ],
    data(): FNavigationMenuData {
        return {
            selectedItem: "",
            focusedPopupMenuItem: "",
            overflowIndex: -1,
            popupOpen: false,
            popupAnchor: undefined,
            resizeObserver: undefined,
        };
    },
    computed: {
        items(): MenuItem[] {
            if (!this.routes || !Array.isArray(this.routes)) {
                return [];
            }
            return this.routes.map((i) => ({ label: i.label, key: i.route, href: i.href, target: i.target }));
        },
        overflowItems(): MenuItem[] {
            return this.hasOverflow ? this.items.slice(this.overflowIndex) : [];
        },
        hasOverflow(): boolean {
            return this.overflowIndex > -1 && !this.vertical;
        },
        overflowItemSelected(): boolean {
            return this.overflowItems.some((item) => item.key === this.selectedItem);
        },
        menuClasses(): string[] {
            const vertical = this.vertical ? ["imenu--vertical"] : ["imenu--horizontal"];
            return ["imenu", ...vertical];
        },
        popupItemClasses(): string[] {
            const highlight = this.overflowItemSelected ? ["imenu__list__item--highlight"] : [];
            return ["imenu__popup-item__wrapper", "imenu__list__item", ...highlight];
        },
        selectedItemSrText(): string {
            if (this.selectedMenuItemScreenReaderText === "") {
                return this.$t("fkui.navigation-menu.current-page", "Aktuell sida");
            } else {
                return this.selectedMenuItemScreenReaderText;
            }
        },
        popupLabel(): string {
            return this.$t("fkui.navigation-menu.more-text", "Mer");
        },
        popupMenuSrText(): string {
            return this.overflowItemSelected ? this.popupMenuSelectedSrText : this.menuMoreScreenReaderText;
        },
        popupMenuSelectedSrText(): string {
            if (this.menuMoreWithSelectedItemsScreenReaderText === "") {
                return this.$t("fkui.navigation-menu.more-selection", "underliggande vald nu");
            } else {
                return this.menuMoreWithSelectedItemsScreenReaderText;
            }
        },
    },
    watch: {
        route: {
            async handler(value: string): Promise<void> {
                this.selectedItem = value;
            },
            immediate: true,
        },
        routes: {
            deep: true,
            async handler() {
                await this.$nextTick();
                this.onResize();
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
        itemClasses(item: MenuItem, index: number): string[] {
            const hidden = this.hasOverflow && index >= this.overflowIndex ? ["imenu__list__item--hidden"] : [];
            const highlight = item.key === this.selectedItem ? ["imenu__list__item--highlight"] : [];
            return ["imenu__list__item", ...highlight, ...hidden];
        },
        showItemSrText(index: number): boolean {
            const isSelected = this.items[index].key === this.selectedItem;
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
        findItemByKey(key: string): MenuItem | undefined {
            return this.items.find((it) => it.key === key);
        },
        indexOfItemByKey(key: string): number {
            const item = this.findItemByKey(key);
            if (!item) {
                return -1;
            }
            return this.items.indexOf(item);
        },
        selectItem(key: string): void {
            if (key !== this.selectedItem) {
                this.selectedItem = key;
            }
            if (key !== this.route) {
                this.$emit("update:route", key);
                this.$emit("selectedRoute", key);
            }
        },
        async activateItem(index: number): Promise<void> {
            const popupItemFocused = this.hasOverflow && index === this.overflowIndex;
            if (popupItemFocused) {
                this.togglePopup(!this.popupOpen);
                return;
            }

            const item = this.items[index];
            this.selectItem(item.key);
            this.clickItemAnchor(item);
        },
        onClickItem(event: Event, item: MenuItem): void {
            this.selectItem(item.key);

            // Only need to click anchor if target wasn't anchor.
            const target = event.target;
            const isAnchor = target instanceof HTMLElement && target.tagName === "A";
            if (!isAnchor) {
                this.clickItemAnchor(item);
            }
        },
        clickItemAnchor(item: MenuItem): void {
            if (!item.href) {
                return;
            }

            const index = this.items.indexOf(item);
            this.getAnchor(index)?.click();
        },
        onPopupMenuItemSelected(key: string): void {
            this.selectItem(key);
            if (key !== this.selectedItem) {
                this.togglePopup(false);
            }
        },
        togglePopup(open: boolean): void {
            if (open) {
                this.popupAnchor = getHTMLElementFromVueRef(this.$refs["popup-item"]);
            }

            this.popupOpen = open;
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
        async onResize(): Promise<void> {
            if (this.vertical) {
                return;
            }

            const menu = getHTMLElementFromVueRef(this.$refs.menu);
            const itemElements = getSortedHTMLElementsFromVueRef(this.$refs.items);
            const menuWidth = menu.offsetWidth;
            const foundOverflowIndex = findOverflowIndex(menuWidth, itemElements);

            if (this.overflowIndex === foundOverflowIndex) {
                return;
            }

            this.overflowIndex = foundOverflowIndex;

            if (!this.hasOverflow) {
                this.popupOpen = false;
                return;
            }

            // Close popup to later recalculate after new anchor position when reopened.
            const popupWasOpen = this.popupOpen;
            this.popupOpen = false;

            // Wait for computed to update v-if for popup item.
            await this.$nextTick();

            const wrapper = getHTMLElementFromVueRef(this.$refs["popup-item"]);
            wrapper.style.left = "0";

            const firstHiddenItem = itemElements[this.overflowIndex];
            const firstHiddenItemRect = getAbsolutePosition(firstHiddenItem);
            const wrapperRect = getAbsolutePosition(wrapper);
            const offset = wrapperRect.x - firstHiddenItemRect.x;
            wrapper.style.left = `-${offset}px`;

            this.popupOpen = popupWasOpen;
        },
        onKeyUp(event: KeyboardEvent): void {
            if (preventKeys.includes(event.key)) {
                event.preventDefault();
            }
        },
        async onKeyDown(event: KeyboardEvent): Promise<void> {
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
            const shouldCheckPopupKeys = this.hasOverflow && lastItemFocused && this.popupOpen;
            const popupKeyPressed = verticalKeys.includes(event.key) || tabNext;
            if (shouldCheckPopupKeys && popupKeyPressed) {
                event.preventDefault();

                const index = upKeys.includes(event.key) ? this.overflowItems.length - 1 : 0;
                this.focusedPopupMenuItem = this.overflowItems[index].key;
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

<template>
    <nav ref="menu" :aria-label="menuAriaLabel" :class="menuClasses">
        <ul class="imenu__list" role="menubar" @keyup="onKeyUp" @keydown="onKeyDown">
            <li
                v-for="(item, index) in items"
                :key="item.key"
                ref="items"
                :data-ref-index="index"
                :class="itemClasses(item, index)"
                role="none"
                @click="(event) => onClickItem(event, item)"
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
                                <span>{{ popupMenuSrText }}&nbsp;</span>
                            </span>
                            {{ popupLabel }}
                            <f-icon name="arrow-down" class="imenu__list__anchor-icon-right" />
                        </a>
                    </div>
                </div>
            </li>
        </ul>

        <i-popup-menu
            ref="popup-menu"
            v-model="selectedItem"
            v-model:focused-item="focusedPopupMenuItem"
            :items="overflowItems"
            :is-open="popupOpen"
            :anchor="popupAnchor"
            :selected-menu-item-screen-reader-text="selectedItemSrText"
            :aria-label="popupAriaLabel"
            enable-keyboard-navigation
            @select="onPopupMenuItemSelected"
            @close="togglePopup(false)"
        />
    </nav>
</template>
