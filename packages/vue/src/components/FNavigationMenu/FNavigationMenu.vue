<template>
    <div>
        <i-menu
            ref="menu"
            v-model="selectedMenuItemKey"
            :items="visibleItems"
            :vertical="vertical"
            :focused-item-key="focusedMenuItemKey"
            :selected-menu-item-screen-reader-text="selectedMenuItemSrText()"
            :has-menu-more-selected-items="hasPopupMenuSelectedItems"
            :aria-label="menuAriaLabel"
            @select="onSelectMenu"
            @overflow="onOverflow"
            @keyup="onKeyUp"
            @keydown="onKeyDown"
        />
        <i-popup-menu
            ref="popupMenu"
            v-model="selectedPopupItemKey"
            v-model:focused-item="focusedPopupMenuItemKey"
            :items="popupItems"
            :is-open="popupOpen"
            :anchor="popupAnchor"
            :selected-menu-item-screen-reader-text="selectedMenuItemSrText()"
            :aria-label="popupAriaLabel"
            @select="onSelectPopup"
            @close="onClosePopup"
            @keyup="onKeyUp"
            @keydown="onKeyDown"
        >
        </i-popup-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { isSet } from "@fkui/logic";
import { TranslationMixin } from "../../plugins";
import { IPopupMenu } from "../../internal-components/IPopupMenu";
import { IMenu, IMenuItem, menuMoreKey } from "../../internal-components/IMenu";
import { getHTMLElementFromVueRef, actionFromKeyboardEvent } from "../../utils";
import { MenuAction } from "../../types";
import { calcOverflowIndexFromIndex } from "./navigation-menu-utils";
import { NavigationMenuItem } from "./navigation-menu-item";
import { doMenuAction } from "./navigation-menu-logic";

const preventKeys: string[] = [
    "Tab",
    "Up",
    "Down",
    "Left",
    "Right",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Home",
    "End",
    " ",
    "Spacebar",
    "Enter",
    "Escape",
];

const keyUp = ["ArrowUp", "Up"];
const keyDown = ["ArrowDown", "Down"];

const arrowKeys: string[] = [...keyUp, ...keyDown];

export default defineComponent({
    name: "FNavigationMenu",
    components: { IMenu, IPopupMenu },
    mixins: [TranslationMixin],
    props: {
        /** Current route.
         * @model
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
    data() {
        return {
            overflowIndex: -1,
            ignoreNoOverflow: false,
            selectedMenuItemKey: "",
            selectedPopupItemKey: "",
            popupAnchor: this.$el as HTMLElement,
            popupOpen: false,
            currentFocusedItemIndex: 0,
            focusedMenuItemKey: "",
            focusedPopupMenuItemKey: "",
            initPopupNavigationIndex: true,
        };
    },
    computed: {
        items(): IMenuItem[] {
            return this.routes.map((i) => ({ label: i.label, key: i.route, href: i.href, target: i.target }));
        },
        visibleItems(): IMenuItem[] {
            if (this.overflowIndex > -1) {
                const visibleItems = this.items.slice(0, this.overflowIndex);
                visibleItems.push({
                    label: this.$t("fkui.navigation-menu.more-text", "Mer"),
                    key: menuMoreKey,
                    iconRight: "arrow-down",
                    ariaHasPopup: true,
                    srMenuMoreTextContents: this.menuMoreScreenReaderText,
                    srMenuMoreTextSelectedContents: this.menuMoreWithSelectedItemsSrText(),
                });
                // The following will emit an overflow event with -1 (no overflow) because
                // after slicing all the items fit in the navigation menu
                return visibleItems;
            } else {
                return this.items;
            }
        },
        popupItems(): IMenuItem[] {
            return this.overflowIndex > -1 ? this.items.slice(this.overflowIndex) : [];
        },
        hasPopupMenuSelectedItems(): boolean {
            return this.selectedPopupItemKey !== "";
        },
    },
    watch: {
        route: {
            async handler(value: string): Promise<void> {
                const itemIndex = isSet(value) ? this.indexOfItemByKey(this.items, value) : -1;
                if (itemIndex < 0) {
                    await this.activateItem(-1);
                    return;
                }

                const isWithinMoreMenu = !this.findItemByKey(this.visibleItems, value);

                if (isWithinMoreMenu) {
                    const item = this.items[itemIndex];
                    await this.activateInvisibleItem(item);
                } else {
                    await this.activateItem(itemIndex);
                }
            },
            immediate: true,
        },
    },
    mounted() {
        this.currentFocusedItemIndex = 0;
    },
    methods: {
        selectedMenuItemSrText(): string {
            if (this.selectedMenuItemScreenReaderText === "") {
                return this.$t("fkui.navigation-menu.current-page", "Aktuell sida");
            } else {
                return this.selectedMenuItemScreenReaderText;
            }
        },
        menuMoreWithSelectedItemsSrText(): string {
            if (this.menuMoreWithSelectedItemsScreenReaderText === "") {
                return this.$t("fkui.navigation-menu.more-selection", "underliggande vald nu");
            } else {
                return this.menuMoreWithSelectedItemsScreenReaderText;
            }
        },
        findItemByKey(items: IMenuItem[], key: string): IMenuItem | undefined {
            return items.find((it) => it.key === key);
        },
        indexOfItemByKey(items: IMenuItem[], key: string): number {
            return items.findIndex((it) => it.key === key);
        },
        async onOverflow(index: number): Promise<void> {
            const ignore = this.ignoreNoOverflow;
            const shouldReset = index === -1 && ignore;
            const shouldIgnore = index >= 0;

            if (shouldReset) {
                this.ignoreNoOverflow = false;
                return;
            }

            if (shouldIgnore) {
                this.ignoreNoOverflow = true;
            }

            this.updateOverflowIndex(index);
            await this.refreshSelectedItem();

            const shouldClosePopup = this.overflowIndex > -1 && !this.ignoreNoOverflow;
            if (shouldClosePopup) {
                await this.setPopupOpen(false);
            }
        },
        async refreshSelectedItem(): Promise<void> {
            const popupStatus = this.popupOpen;

            if (this.overflowIndex === -1) {
                // check if selected item has moved from popup-menu to menu
                if (this.visibleItems.some((i) => i.key === this.selectedPopupItemKey)) {
                    this.selectedMenuItemKey = this.selectedPopupItemKey;
                    this.selectedPopupItemKey = "";
                }
            } else {
                // check if selected item has moved from menu to popup-menu
                if (this.popupItems.some((i) => i.key === this.selectedMenuItemKey)) {
                    this.selectedPopupItemKey = this.selectedMenuItemKey;
                    const lastItem = this.visibleItems.at(-1);
                    this.selectedMenuItemKey = lastItem?.key ?? "";
                }
            }

            await this.setPopupOpen(popupStatus);
        },
        async doSelectItem(key: string): Promise<void> {
            if (key !== menuMoreKey) {
                this.$emit("update:route", key);
                this.$emit("selectedRoute", key);
            }
            let index = -1;
            if (this.hasOverflow()) {
                index = this.indexOfItemByKey(this.visibleItems, key);
                if (index === -1) {
                    index = this.indexOfItemByKey(this.items, key);
                }
            } else {
                index = this.indexOfItemByKey(this.items, key);
            }
        },
        async onSelectMenu(key: string): Promise<void> {
            await this.doSelectItem(key);
            // If key not equal MENU_MORE and key is in visible items reset selectedPopupItemKey
            if (key !== menuMoreKey) {
                if (this.findItemByKey(this.visibleItems, key) && this.selectedPopupItemKey !== "") {
                    this.focusedPopupMenuItemKey = "";
                    this.selectedPopupItemKey = "";
                }
            } else {
                const anchor = getHTMLElementFromVueRef(this.$refs.menu).querySelector("li:last-child") as HTMLElement;
                if (anchor) {
                    this.popupAnchor = anchor;
                }
                await this.setPopupOpen(true);
            }
        },
        async onSelectPopup(key: string): Promise<void> {
            await this.setPopupOpen(false);
            await this.doSelectItem(key);
        },
        async onClosePopup(): Promise<void> {
            await this.setPopupOpen(false);
        },
        async setPopupOpen(value: boolean): Promise<void> {
            if (value) {
                this.focusedPopupMenuItemKey = "";
            } else {
                this.initPopupNavigationIndex = true;
            }
            this.popupOpen = value;
            await this.$nextTick();
        },
        updateOverflowIndex(index: number) {
            this.overflowIndex = calcOverflowIndexFromIndex(index);
        },
        onKeyUp(event: KeyboardEvent) {
            if (preventKeys.includes(event.key)) {
                event.preventDefault();
            }
        },
        doHandleMenuTabKey(action: MenuAction): boolean {
            // Detect if tab (MOVE_NEXT) or shift+tab (MOVE_PREV) reaches the limits, to avoid trapping tab
            // returns true to indicate that one should NOT continue processing this keyboard action or false otherwise
            if (this.hasOverflow()) {
                if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex + 1 === this.visibleItems.length) {
                    return true;
                }
                if (action === MenuAction.MOVE_PREV && this.currentFocusedItemIndex - 1 === -1) {
                    return true;
                }
            } else {
                if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex + 1 === this.items.length) {
                    return true;
                }
                if (action === MenuAction.MOVE_PREV && this.currentFocusedItemIndex - 1 === -1) {
                    return true;
                }
            }
            return false;
        },
        async doHandlePopupMenuTabKey(action: MenuAction): Promise<boolean> {
            // Detect if tab (MOVE_NEXT) or shift+tab (MOVE_PREV) reaches the limits, to avoid trapping tab
            // returns true to indicate that one should NOT continue processing this keyboard action or false otherwise
            if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex + 1 === this.items.length) {
                await this.setPopupOpen(false);
                return true;
            } else if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex === this.overflowIndex) {
                // First press on tab must initialize the currentFocusedItemIndex correctly
                if (this.initPopupNavigationIndex) {
                    this.initPopupNavigationIndex = !this.initPopupNavigationIndex;
                    this.setCurrentFocusedItemIndex(this.overflowIndex - 1);
                    return false;
                }
            } else if (action === MenuAction.MOVE_PREV && this.currentFocusedItemIndex === this.overflowIndex) {
                // shift-tab (MOVE_PREV) inside the popup on the first element of the popup will close the popup and
                // adjust currentFocusedItemIndex and will resume processing this keyboard action
                await this.setPopupOpen(false);
                this.setCurrentFocusedItemIndex(this.overflowIndex - 1);
                return false;
            }
            return false;
        },
        setCurrentFocusedItemIndex(value: number) {
            this.currentFocusedItemIndex = value;
        },
        doInitPopupNavigationIndex(event: KeyboardEvent) {
            if (keyDown.includes(event.key) || event.key === "Tab") {
                // user pressed arrow down key, adjust currentFocusedIndex before call to doMenuAction
                this.setCurrentFocusedItemIndex(this.overflowIndex - 1);
            } else if (keyUp.includes(event.key)) {
                // user pressed arrow up key, adjust currentFocusedIndex before call to doMenuAction
                this.setCurrentFocusedItemIndex(this.items.length + 1);
            }
        },
        async onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                await this.setPopupOpen(false);
                return;
            }
            let action = actionFromKeyboardEvent(event);
            if (action === null) {
                return;
            }
            if (!this.popupOpen) {
                if (event.key === "Tab" && this.doHandleMenuTabKey(action)) {
                    return;
                }
                event.preventDefault();
                await doMenuAction(action, this, 0, this.visibleItems.length);
            } else {
                if (event.key === "Tab" && (await this.doHandlePopupMenuTabKey(action))) {
                    return;
                }
                event.preventDefault();

                // if you activate (press space or enter) while there is nothing focused in this.focusedPopupMenuItemKey
                // just ignore further processing and close the popup
                if (action === MenuAction.ACTIVATE && this.focusedPopupMenuItemKey === "") {
                    action = null;
                    await this.setPopupOpen(false);
                    return;
                }

                // First press on arrow down/up must initialize the currentFocusedItemIndex correctly
                if (this.initPopupNavigationIndex && arrowKeys.includes(event.key)) {
                    this.initPopupNavigationIndex = !this.initPopupNavigationIndex;
                    this.doInitPopupNavigationIndex(event);
                }
                await doMenuAction(action, this, this.overflowIndex, this.items.length);
            }
        },
        async setFocusOnItem(index: number): Promise<void> {
            this.setFocusedItemIndex(index);
            // if index in visible items then update focus in i-menu
            // else then update focus i-popup-menu, open popup if needed
            if (!this.hasOverflow() || (!this.popupOpen && index <= this.overflowIndex)) {
                this.setFocusedMenuItemKey(this.visibleItems[index]?.key || "");
            } else {
                await this.setFocusedPopupMenuItemKey(this.items[index]?.key || "");
            }
        },
        hasOverflow() {
            return this.overflowIndex !== -1;
        },
        async activateItem(index: number): Promise<void> {
            if (!this.hasOverflow() || (!this.popupOpen && index <= this.overflowIndex)) {
                const key = this.visibleItems[index]?.key || "";
                await this.setSelectedMenuItemKey(key);
                await this.onSelectMenu(key);
            } else {
                const key = this.items[index]?.key || "";
                this.selectedPopupItemKey = key;
                await this.onSelectPopup(key);
            }
        },
        async activateInvisibleItem(item: IMenuItem): Promise<void> {
            await this.setSelectedMenuItemKey(menuMoreKey);
            await this.onSelectMenu(menuMoreKey);
            this.selectedPopupItemKey = item.key;
            await this.onSelectPopup(item.key);
            if (item.href) {
                const anchor = document.createElement("a");
                anchor.href = item.href;
                if (item.target) {
                    anchor.target = item.target;
                }
                anchor.click();
            }
        },
        setFocusedItemIndex(index: number): void {
            if (index < 0) {
                return;
            }
            if (!this.popupOpen && this.hasOverflow() && index > this.overflowIndex) {
                this.setCurrentFocusedItemIndex(this.overflowIndex);
            } else {
                this.setCurrentFocusedItemIndex(index);
            }
        },
        async setFocusedPopupMenuItemKey(key: string): Promise<void> {
            this.focusedPopupMenuItemKey = "";
            if (key !== "") {
                await this.$nextTick();
                this.focusedPopupMenuItemKey = key;
            }
        },
        setFocusedMenuItemKey(key: string): void {
            this.focusedMenuItemKey = key;
        },
        async setSelectedMenuItemKey(key: string): Promise<void> {
            this.selectedMenuItemKey = "";
            if (key !== "") {
                await this.$nextTick();
                this.selectedMenuItemKey = key;
            }
        },
    },
});
</script>
