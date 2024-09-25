<template>
    <i-menu
        v-model="selectedItemKey"
        :items="items"
        :vertical="vertical"
        :aria-label="menuAriaLabel"
        :selected-item-sr-text="selectedItemSrText"
        :overflow-menu-sr-text="menuMoreScreenReaderText"
        :selected-overflow-menu-sr-text="selectedOverflowMenuSrText"
        :popup-label="popupLabel"
        :popup-aria-label="popupAriaLabel"
        enable-keyboard-navigation
        enable-overflow
        @select="onSelectItem"
    />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { TranslationMixin } from "../../plugins";
import { IMenu, IMenuItem } from "../../internal-components/IMenu";
import { NavigationMenuItem } from "./navigation-menu-item";

export default defineComponent({
    name: "FNavigationMenu",
    components: { IMenu },
    mixins: [TranslationMixin],
    props: {
        /**
         * Current route.
         *
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
            selectedItemKey: "",
        };
    },
    computed: {
        items(): IMenuItem[] {
            return this.routes.map((i) => ({ label: i.label, key: i.route, href: i.href, target: i.target }));
        },
        selectedItemSrText(): string {
            if (this.selectedMenuItemScreenReaderText === "") {
                return this.$t("fkui.navigation-menu.current-page", "Aktuell sida");
            } else {
                return this.selectedMenuItemScreenReaderText;
            }
        },
        selectedOverflowMenuSrText(): string {
            if (this.menuMoreWithSelectedItemsScreenReaderText === "") {
                return this.$t("fkui.navigation-menu.more-selection", "underliggande vald nu");
            } else {
                return this.menuMoreWithSelectedItemsScreenReaderText;
            }
        },
        popupLabel(): string {
            return this.$t("fkui.navigation-menu.more-text", "Mer");
        },
    },
    watch: {
        route: {
            async handler(value: string): Promise<void> {
                this.selectedItemKey = value;
            },
            immediate: true,
        },
    },
    methods: {
        onSelectItem(key: string): void {
            if (key !== this.selectedItemKey) {
                this.selectedItemKey = key;
            }
            if (key !== this.route) {
                this.$emit("update:route", key);
                this.$emit("selectedRoute", key);
            }
        },
    },
});
</script>
