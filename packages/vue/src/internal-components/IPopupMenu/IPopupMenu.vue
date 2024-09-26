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
                    class="ipopupmenu__list__item"
                    :class="cssClassHighlight(item)"
                    @click="onClickItem(item)"
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
                            <span>{{ selectedMenuItemScreenReaderText }}&nbsp;</span> </span
                        >{{ item.label }} <f-icon v-if="item.iconRight" :name="item.iconRight" />
                    </a>
                </li>
            </ul>
        </nav>
    </i-popup>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { focus } from "@fkui/logic";
import { FIcon } from "../../components/FIcon";
import { IPopup } from "../IPopup";
import { type IMenuItem } from "../IMenu";
import { actionFromKeyboardEvent, getSortedHTMLElementsFromVueRef } from "../../utils";
import { doMenuAction } from "./ipopupmenu-logic";

const preventKeys: string[] = ["Up", "Down", "ArrowUp", "ArrowDown", "Home", "End", " ", "Spacebar", "Enter"];

export default defineComponent({
    name: "IPopupMenu",
    components: { FIcon, IPopup },
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
            default: undefined,
        },
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
         * Vue 2 V-model event. Emitted when an item is selected.
         *
         * @event select
         * @deprecated
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
            async handler(): Promise<void> {
                this.currentFocusedItemIndex = 0;
                this.lastSelectedItem = "";
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
    methods: {
        isSelected(index: number): boolean {
            return this.items[index].key === this.modelValue;
        },
        focusElement(): HTMLElement | null {
            return null;
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
            if (item.key !== this.lastSelectedItem) {
                this.$emit("update:modelValue", item.key);
                this.$emit("select", item.key);
                this.lastSelectedItem = item.key;
            }

            this.$emit("close");

            if (item.href && doClick) {
                const anchors = getSortedHTMLElementsFromVueRef(this.$refs.anchors);
                anchors[this.currentFocusedItemIndex]?.click();
            }
        },
        cssClassHighlight(item: IMenuItem): string {
            return item.key === this.modelValue ? "ipopupmenu__list__item--highlight" : "";
        },
        async setFocusOnItem(index: number): Promise<void> {
            this.setFocusedItemIndex(index);
            await this.$nextTick();
            if (this.isOpen) {
                const anchors = getSortedHTMLElementsFromVueRef(this.$refs.anchors);
                if (anchors.length > 0) {
                    const itemAnchor = anchors[index];
                    focus(itemAnchor, { preventScroll: true });
                }
            }
        },
        async activateItem(index: number): Promise<void> {
            if (index !== this.currentFocusedItemIndex) {
                await this.setFocusOnItem(index);
            }
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
            if (!preventKeys.includes(event.key)) {
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
