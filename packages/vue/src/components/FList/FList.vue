<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { ElementIdService } from "@fkui/logic";
import { FCheckboxField } from "../FCheckboxField";
import { type ListItem, type ListArray } from "../../types";
import { itemEquals, includeItem, handleKeyboardFocusNavigation, getElementFromVueRef } from "../../utils";
import { TranslationMixin } from "../../plugins";
import { ActivateItemInjected, ActivateItemInterface } from "../FCrudDataset";
import { type FListData } from "./flist-data";

export default defineComponent({
    name: "FList",
    components: { FCheckboxField },
    mixins: [TranslationMixin],
    props: {
        /**
         * The items to be listed.
         * The items will be listed in the given array order.
         */
        items: {
            type: Array as PropType<ListArray>,
            required: true,
        },
        /**
         * Unique attribute in items.
         * V-for directive in vue requires a unique key to
         * be able to optimize reuse of components.
         */
        keyAttribute: {
            type: String,
            required: true,
        },
        /**
         * If `true` the list will be selectable.
         * @see 'select' and 'unselect' events.
         */
        selectable: {
            type: Boolean,
            default: false,
        },
        /**
         * Only applies if selectable:true
         * Disable checkbox in interactive list and create a <a>-wrapper for each item, making them clickable
         * @see 'select' and 'unselect' events.
         */
        checkbox: {
            type: Boolean,
            default: true,
        },
        /**
         * V-model will bind to value containing selected items.
         */
        modelValue: {
            type: Array as PropType<ListArray | undefined>,
            required: false,
            default: () => undefined,
        },
        /**
         * V-model will bind to value containing the current active item.
         */
        active: {
            type: Object as PropType<ListItem | undefined>,
            required: false,
            default: () => undefined,
        },
        /**
         * Unique item id that will be used instead of the automatically generated one.
         */
        elementId: {
            type: String,
            default: () => ElementIdService.generateElementId(),
        },
    },
    emits: ["change", "click", "unselect", "update:modelValue", "select", "update:active"],
    setup(): ActivateItemInterface<ListItem> {
        return ActivateItemInjected();
    },
    data(): FListData {
        return {
            selectedItems: [],
            activeItem: undefined,
        };
    },
    computed: {
        isEmpty(): boolean {
            return this.items.length === 0;
        },
        ariaActiveDescendant(): string | undefined {
            return this.activeItem ? this.getItemId(this.activeItem) : undefined;
        },
    },
    watch: {
        items: {
            deep: true,
            immediate: true,
            handler: function () {
                this.updateSelectedItemsFromVModel();
            },
        },
        modelValue: {
            deep: true,
            immediate: true,
            handler: function () {
                this.updateSelectedItemsFromVModel();
            },
        },
        active: {
            immediate: true,
            handler: function () {
                this.updateActiveItemFromVModel();
            },
        },
    },
    mounted() {
        if (this.selectable && this.checkbox) {
            if (!this.$slots["screenreader"]) {
                throw Error('Slot "screenreader" is required when having "selectable" & "checkbox" option.');
            }
            this.registerCallbackAfterItemAdd(this.callbackAfterItemAdd);
            this.registerCallbackBeforeItemDelete(this.callbackBeforeItemDelete);
        }
    },
    methods: {
        getLiElements(): Element[] {
            const ulElement = getElementFromVueRef(this.$refs["ulElement"]);
            return Array.from(ulElement.children);
        },
        itemKey(item: ListItem): string {
            const key = item[this.keyAttribute];
            if (typeof key === "undefined") {
                throw new Error(`Key attribute [${this.keyAttribute}]' is missing in item`);
            }
            return String(key);
        },
        isSelected(item: ListItem): boolean {
            return includeItem(item, this.selectedItems, this.keyAttribute);
        },
        itemClasses(item: ListItem): Record<string, boolean> {
            return {
                "list__item--selected": this.isSelected(item),
                "list__item--active": this.isActive(item),
            };
        },
        getAriaSelected(item: ListItem): string {
            return String(itemEquals(this.activeItem, item, this.keyAttribute));
        },
        onSelect(item: ListItem): void {
            if (includeItem(item, this.selectedItems, this.keyAttribute)) {
                this.selectedItems = this.selectedItems.filter((i) => !itemEquals(i, item, this.keyAttribute));
                /**
                 * Emitted when item is unselected.
                 *
                 * @event unselect
                 * @param item
                 * @type {ListItem}
                 * @param selectedItems
                 * @type {ListArray}
                 *
                 */
                this.$emit("unselect", item);
            } else {
                this.selectedItems.push(item);
                /**
                 * Emitted when item is selected.
                 *
                 * @event select
                 * @param item
                 * @type {ListItem}
                 * @param selectedItems
                 * @type {ListArray}
                 */
                this.$emit("select", item);
            }

            this.updateVModelWithSelectedItems();
            this.$forceUpdate();
        },
        setActiveItem(item: ListItem): void {
            /**
             * Emitted when item is activated, i.e. clicked
             *
             * @event click
             * @param item
             * @type {ListItem}
             */
            this.$emit("click", item);

            if (!itemEquals(item, this.activeItem, this.keyAttribute)) {
                /**
                 * Emitted when item is activated, i.e. clicked
                 *
                 * @event change
                 * @param item
                 * @type {ListItem}
                 */
                this.$emit("change", item);
                this.activeItem = item;
                /**
                 * V-model active event.
                 *
                 * @event update:active
                 * @param activeItem
                 * @type {ListItem}
                 */
                this.$emit("update:active", this.activeItem);
            }
        },
        onItemClick(event: Event, index: number, item: ListItem): void {
            this.setActiveItem(item);
        },
        updateVModelWithSelectedItems(): void {
            if (this.modelValue) {
                /**
                 * V-model event to update value property.
                 * @event update:modelValue
                 */
                this.$emit("update:modelValue", this.selectedItems);
            }
        },
        updateSelectedItemsFromVModel(): void {
            if (Array.isArray(this.modelValue)) {
                // Remove old selected items that may not exists in items.
                this.selectedItems = this.modelValue.filter((item: ListItem) => {
                    return includeItem(item, this.items, this.keyAttribute);
                });
            } else {
                this.selectedItems = [];
            }
        },
        updateActiveItemFromVModel(): void {
            if (this.active === undefined) {
                this.activeItem = undefined;
            } else if (!itemEquals(this.active, this.activeItem, this.keyAttribute)) {
                this.activeItem = this.active;
            }
        },
        onItemKeyDown(event: KeyboardEvent, item: ListItem): void {
            switch (event.key) {
                case "Up":
                case "Down":
                case "ArrowUp":
                case "ArrowDown":
                    event.preventDefault();
                    handleKeyboardFocusNavigation(event.key, event.target as HTMLElement, this.getLiElements());
                    break;

                case " ":
                case "Spacebar":
                    event.preventDefault();
                    this.setActiveItem(item);
                    break;
            }
        },
        // Unique id to connect aria-labelledby with readonly label
        getAriaLabelledbyId(item: ListItem): string {
            return `${this.elementId}_${this.itemKey(item)}`;
        },
        // Unique id to connect aria-labelledby with readonly label
        getItemId(item: ListItem): string {
            return `${this.elementId}_item_${this.itemKey(item)}`;
        },
        // Focus effect is done with box-shadow.
        // By setting position to relative the
        // item and box-shadow is drawn with a higher z-index,
        // thus no focus border under other list items.
        onItemFocus(event: FocusEvent): void {
            if (event && event.target) {
                (event.target as HTMLElement).style.position = "relative";
            }
        },
        onItemBlur(event: FocusEvent): void {
            if (event && event.target) {
                (event.target as HTMLElement).style.position = "static";
            }
        },
        callbackAfterItemAdd(item: ListItem): void {
            this.setActiveItem(item);
        },
        callbackBeforeItemDelete(item: ListItem): void {
            if (this.items.length === 0) {
                return;
            }
            let targetIndex = this.items.indexOf(item) - 1;
            if (targetIndex < 0 && this.items.length > 1) {
                targetIndex = 1;
            } else if (targetIndex < 0) {
                targetIndex = 0;
            }
            this.setActiveItem(this.items[targetIndex]);
            if (this.getLiElements()[targetIndex]) {
                (this.getLiElements()[targetIndex] as HTMLElement).focus();
            }
        },
        isActive(item: ListItem): boolean {
            return this.checkbox && itemEquals(this.activeItem, item, this.keyAttribute);
        },
    },
});
</script>

<template>
    <ul v-if="!selectable" class="list">
        <li v-for="item in items" :key="itemKey(item)" class="list__item">
            <div ref="listItemPanes" class="list__item__itempane">
                <!--
@slot Slot for displaying an item.

The item object is available through `v-slot="{ <propertyName> }"`, e.g.
`v-slot="{ item }"`.

The following properties are available:

* `item: ListItem;` The object to be visualized."`.
        -->
                <slot v-bind="{ item }" />
            </div>
        </li>
        <li v-if="isEmpty" class="list__item">
            <div class="list__item__itempane">
                <!--
@slot Slot for displaying a message when list is empty.
Default text is 'Listan är tom' (key fkui.list.empty).
        -->
                <slot name="empty">
                    <em>{{ $t("fkui.list.empty", "Listan är tom") }}</em>
                </slot>
            </div>
        </li>
    </ul>
    <ul v-else ref="ulElement" class="list list--hover" :tabindex="checkbox ? 0 : undefined">
        <li
            v-for="(item, index) in items"
            :id="getItemId(item)"
            :key="itemKey(item)"
            :aria-labelledby="getItemId(item)"
            :class="itemClasses(item)"
            class="list__item"
            :tabindex="checkbox ? 0 : undefined"
            @keydown.self="onItemKeyDown($event, item)"
            @focus.self="onItemFocus"
            @blur.self="onItemBlur"
        >
            <div v-if="checkbox" class="list__item__selectpane" @click.self="onSelect(item)">
                <div class="list__item__selectpane__input">
                    <f-checkbox-field :value="true" :model-value="isSelected(item)" @click.self="onSelect(item)">
                        <span :id="getAriaLabelledbyId(item)" class="sr-only">
                            <!--
@slot Slot for screen reader text when checkbox (to selecte item) get focus.

The item object is available through `v-slot="{ <propertyName> }"`, e.g.
`v-slot="{ item }"`.

The following properties are available:

* `item: ListItem;` The object to be screen read."`.
            -->
                            <slot name="screenreader" v-bind="{ item }" />
                        </span>
                    </f-checkbox-field>
                </div>
            </div>
            <component
                :is="checkbox ? 'div' : 'a'"
                ref="listItemPanes"
                :href="!checkbox ? 'javascript:' : undefined"
                class="list__item__itempane"
                @click="onItemClick($event, index, item)"
            >
                <slot v-bind="{ item }" />
            </component>
        </li>
        <li v-if="isEmpty" class="list__item">
            <div class="list__item__itempane">
                <slot name="empty">
                    <em>{{ $t("fkui.list.empty", "Listan är tom") }}</em>
                </slot>
            </div>
        </li>
    </ul>
</template>
