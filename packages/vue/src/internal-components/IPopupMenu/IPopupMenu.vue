<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { focus } from "@fkui/logic";
import { IPopup } from "../IPopup";
import { type MenuItem } from "../../components";
import { actionFromKeyboardEvent, getSortedHTMLElementsFromVueRef } from "../../utils";
import { doMenuAction } from "./ipopupmenu-logic";

const preventKeys: string[] = ["Tab", "Up", "Down", "ArrowUp", "ArrowDown", "Home", "End", " ", "Spacebar", "Enter"];

export default defineComponent({
    name: "IPopupMenu",
    components: { IPopup },
    props: {
        /**
         * Key of the currently selected and highlighted item.
         *
         * @model
         */
        modelValue: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * Key of the currently focused item.
         * Sets focus on matching item element when value changes.
         *
         * @model
         */
        focusedItem: {
            type: String,
            required: false,
            default: "",
        },
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
            default: undefined,
        },
        /**
         * The items to be diplayed in the menu
         */
        items: {
            type: Array as PropType<MenuItem[]>,
            required: true,
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
         * Unique accessible name for navigation landmark.
         */
        ariaLabel: {
            type: String,
            required: false,
            default: "Popupmeny",
        },
        /**
         * Text for selected item for screen reader
         */
        selectedMenuItemScreenReaderText: {
            type: String,
            required: false,
            default: "vald nu",
        },
    },
    emits: [
        /**
         * Emitted when an item is selected and when tabbing out of the popup.
         *
         * @event close
         */
        "close",
        /**
         * Emitted when an item is selected.
         *
         * @event select
         * @type {string} item key
         */
        "select",
        /**
         * V-model event. Emitted when an item is selected.
         *
         * @event select
         * @type {string} item key
         */
        "update:modelValue",
        /**
         * V-model event. Emitted when item focus changes.
         *
         * @event select
         * @type {string} Key of focused item, or empty if no item focused.
         */
        "update:focusedItem",
    ],
    data() {
        return {
            currentFocusedItemIndex: 0,
            lastSelectedItem: "",
        };
    },
    watch: {
        isOpen: {
            immediate: true,
            async handler(newVal): Promise<void> {
                if (newVal) {
                    return;
                }

                this.currentFocusedItemIndex = 0;
                this.lastSelectedItem = "";
                this.$emit("update:focusedItem", "");
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
        focusedItem: {
            async handler(newVal): Promise<void> {
                if (newVal.length === 0) {
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
    },
    methods: {
        isSelected(index: number): boolean {
            return this.items[index].key === this.modelValue;
        },
        focusElement(): HTMLElement | null {
            return null;
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
            const anchors = getSortedHTMLElementsFromVueRef(this.$refs.anchors);
            anchors[index].click();
        },
        selectItem(key: string): void {
            if (key !== this.lastSelectedItem) {
                this.$emit("update:modelValue", key);
                this.$emit("select", key);
                this.lastSelectedItem = key;
            }

            this.$emit("close");
        },
        itemClasses(item: MenuItem): string[] {
            const highlight = item.key === this.modelValue ? ["ipopupmenu__list__item--highlight"] : [];
            return ["ipopupmenu__list__item", ...highlight];
        },
        async setFocusOnItem(index: number): Promise<void> {
            this.setFocusedItemIndex(index);
            await this.$nextTick();

            if (!this.isOpen) {
                return;
            }

            const anchors = getSortedHTMLElementsFromVueRef(this.$refs.anchors);
            if (anchors.length === 0) {
                return;
            }

            const itemAnchor = anchors[index];
            focus(itemAnchor, { preventScroll: true });

            const key = this.items[index].key;
            this.$emit("update:focusedItem", key);
        },
        async activateItem(index: number): Promise<void> {
            if (index !== this.currentFocusedItemIndex) {
                await this.setFocusOnItem(index);
            }

            const item = this.items[index];
            this.selectItem(item.key);
            this.clickItemAnchor(item);
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
            if (!preventKeys.includes(event.key)) {
                return;
            }

            const firstItemFocused = this.currentFocusedItemIndex === 0;
            const lastItemFocused = this.currentFocusedItemIndex === this.items.length - 1;

            const tabOutPrev = event.key === "Tab" && event.shiftKey && firstItemFocused;
            const tabOutNext = event.key === "Tab" && !event.shiftKey && lastItemFocused;

            // If tabbing out, close popup to trigger `popFocus` to focus element that opened the popup.
            if (tabOutPrev || tabOutNext) {
                if (tabOutPrev) {
                    event.preventDefault();
                }

                this.$emit("close");
                return;
            }

            const action = actionFromKeyboardEvent(event);
            if (action === null) {
                return;
            }

            event.preventDefault();
            await doMenuAction(action, this);
        },
    },
});
</script>

<template>
    <i-popup
        class="ipopupmenu"
        :is-open="isOpen"
        :keyboard-trap="false"
        :anchor="anchor"
        :focus-element="focusElement"
        @close="$emit('close')"
        @keyup="onKeyUp"
        @keydown="onKeyDown"
    >
        <nav class="ipopupmenu ipopupmenu--vertical" :aria-label="ariaLabel">
            <ul role="menu" class="ipopupmenu__list">
                <li
                    v-for="(item, index) in items"
                    ref="items"
                    :key="item.key"
                    role="presentation"
                    :class="itemClasses(item)"
                    @click="(event) => onClickItem(event, item)"
                >
                    <a
                        ref="anchors"
                        :data-ref-index="index"
                        :href="item.href"
                        role="menuitem"
                        :target="item.target"
                        tabindex="0"
                    >
                        <span v-if="isSelected(index)" class="sr-only">
                            <span>{{ selectedMenuItemScreenReaderText }}&nbsp;</span>
                        </span>
                        {{ item.label }}
                    </a>
                </li>
            </ul>
        </nav>
    </i-popup>
</template>
