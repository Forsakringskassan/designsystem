<template>
    <nav class="imenu" aria-label="Navigeringsmeny" :class="cssClasses" @keyup="onKeyUp" @keydown="onKeyDown">
        <ul class="imenu__list" role="menubar">
            <li
                v-for="(item, index) in items"
                ref="items"
                :key="item.key"
                :data-ref-index="index"
                class="imenu__list__item"
                :class="cssClassHighlight(item)"
                role="none"
                @click="onClickItem(item)"
            >
                <div :class="ccsClassHighlightAnchorContainer(item)" class="imenu__list__anchor-container">
                    <a
                        ref="anchors"
                        :data-ref-index="index"
                        tabindex="0"
                        :href="item.href"
                        :target="item.target"
                        class="imenu__list__anchor"
                        :class="ccsClassHighlightAnchor(item)"
                        role="menuitem"
                        :aria-haspopup="ariaHasPopup(index)"
                    >
                        <span v-if="isSelected(index)" class="sr-only">
                            <span>{{ getSelectedMenuItemScreenReaderText(index) }}&nbsp;</span> </span
                        >{{ item.label }}<span v-if="item.iconRight" class="imenu__list__anchor-span" />
                        <f-icon v-if="item.iconRight" :name="item.iconRight" class="imenu__list__anchor-icon-right" />
                    </a>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { debounce, focus } from "@fkui/logic";
import { FIcon } from "../../components/FIcon";
import { actionFromKeyboardEvent, getSortedHTMLElementsFromVueRef } from "../../utils";
import { IMenuItem, findOverflowIndex, menuMoreKey } from "./imenu-utils";
import { doMenuAction } from "./imenu-logic";

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
];

export default defineComponent({
    name: "IMenu",
    components: { FIcon },
    props: {
        /**
         * The currently highlighted menu item key
         * @model
         */
        modelValue: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * The items to be diplayed in the menu
         */
        items: {
            type: Array as PropType<IMenuItem[]>,
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
         * The key of the currently selected focused item
         */
        focusedItemKey: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * If true, enable built-in keyboard navigation
         */
        enableKeyboardNavigation: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Text for selected item for screen reader
         */
        selectedMenuItemScreenReaderText: {
            type: String,
            required: false,
            default: "vald nu",
        },
        /**
         * If true, indicates that the menu "Mer/More" has selected items
         */
        hasMenuMoreSelectedItems: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ["overflow", "select", "update:modelValue"],
    data() {
        return {
            resizeObserver: undefined as ResizeObserver | undefined,
            currentFocusedItemIndex: 0,
            lastSelectedItem: "",
        };
    },
    computed: {
        cssClasses(): Record<string, boolean> {
            return {
                "imenu--horizontal": !this.vertical,
                "imenu--vertical": this.vertical,
            };
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
                } else {
                    this.setFocusedItemIndex(0);
                }
            },
        },
        modelValue: {
            async handler(newVal): Promise<void> {
                if (this.enableKeyboardNavigation) {
                    return;
                }
                const index = this.indexOfItemByKey(newVal);
                if (index >= 0) {
                    await this.activateItem(index);
                } else {
                    this.setFocusedItemIndex(0);
                }
            },
        },
    },
    mounted() {
        this.currentFocusedItemIndex = 0;
        if (!this.vertical) {
            this.resizeObserver = new ResizeObserver(debounce(this.onResize, 100));
            this.resizeObserver.observe(this.$el);
            this.onResize();
        }
    },
    unmounted() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    },
    methods: {
        getAnchor(index: number): HTMLElement | undefined {
            return getSortedHTMLElementsFromVueRef(this.$refs.anchors)[index];
        },
        getSelectedMenuItemScreenReaderText(index: number) {
            const menuMoreItem = this.items[index].key === menuMoreKey ? this.items[index] : null;
            if (menuMoreItem) {
                if (this.hasMenuMoreSelectedItems) {
                    return menuMoreItem.srMenuMoreTextSelectedContents;
                } else {
                    return menuMoreItem.srMenuMoreTextContents;
                }
            }
            return this.selectedMenuItemScreenReaderText;
        },
        isSelected(index: number): boolean {
            return this.items[index].key === this.modelValue;
        },
        ariaHasPopup(index: number): boolean | undefined {
            const item = this.items[index];
            return item?.ariaHasPopup ? true : undefined;
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
        async onClickItem(item: IMenuItem, doClick: boolean = false): Promise<void> {
            if (item.key === menuMoreKey || item.key !== this.lastSelectedItem) {
                /**
                 *  V-model event. Event that is dispatched when an item is clicked.
                 *
                 * @event update:modelValue
                 * @type {string} item key
                 */
                this.$emit("update:modelValue", item.key);

                /**
                 *  Vue 2 v-model event. Event that is dispatched when an item is clicked.
                 *
                 * @deprecated
                 * @event select
                 * @type {string} item key
                 */
                this.$emit("select", item.key);

                this.lastSelectedItem = item.key;
            }
            if (item.href && doClick) {
                this.getAnchor(this.items.indexOf(item))?.click();
            }
        },
        onResize(): void {
            const barElement = this.$el as HTMLElement | undefined;
            if (!barElement) {
                return;
            }
            const barWidth = barElement.offsetWidth;

            const itemElements = getSortedHTMLElementsFromVueRef(this.$refs.items);

            const overflowIndex = findOverflowIndex(barWidth, itemElements);

            /**
             * Emitted on item overflow. Event that is dispatched when the horizontal
             * menu items do not fit in the current total width.
             * The event payload is the item position/index of the item in overflow.
             *
             * @event overflow
             * @type {number} index for overflowed item
             */
            this.$emit("overflow", overflowIndex);
        },
        cssClassHighlight(item: IMenuItem): string {
            return item.key === this.modelValue ? "imenu__list__item--highlight" : "";
        },
        ccsClassHighlightAnchor(item: IMenuItem): string {
            return item.key === this.modelValue ? "imenu__list__anchor--highlight" : "";
        },
        ccsClassHighlightAnchorContainer(item: IMenuItem): string {
            return item.key === this.modelValue ? "imenu__list__anchor-container--highlight" : "";
        },
        async setFocusOnItem(index: number): Promise<void> {
            this.setFocusedItemIndex(index);
            await this.$nextTick();
            const itemAnchor = this.getAnchor(index);
            focus(itemAnchor, { preventScroll: true });
        },
        async activateItem(index: number): Promise<void> {
            await this.onClickItem(this.items[index], true);
        },
        setFocusedItemIndex(index: number): void {
            this.currentFocusedItemIndex = index;
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

            const action = actionFromKeyboardEvent(event);
            if (action !== null) {
                event.preventDefault();
                await doMenuAction(action, this);
            }
        },
    },
});
</script>
