<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, ref, useSlots, useTemplateRef, watch, type PropType } from "vue";
import { ElementIdService } from "@fkui/logic";
import { FCheckboxField } from "../FCheckboxField";
import { type ListItem, type ListArray } from "../../types";
import { itemEquals, includeItem, handleKeyboardFocusNavigation, getElementFromVueRef } from "../../utils";
import { useTranslate } from "../../plugins";
import { ActivateItemInjected } from "../FCrudDataset";

const $t = useTranslate();
const slots = useSlots();
const { registerCallbackAfterItemAdd, registerCallbackBeforeItemDelete } = ActivateItemInjected<ListItem>();

const selectedItems = ref<ListArray>([]);
const activeItem = ref<ListItem | undefined>(undefined);

const props = defineProps({
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
});

const emit = defineEmits(["change", "click", "unselect", "update:modelValue", "select", "update:active"]);

const isEmpty = computed((): boolean => {
    return props.items.length === 0;
});

watch(
    () => props.items,
    () => {
        updateSelectedItemsFromVModel();
    },
    { deep: true, immediate: true },
);

watch(
    () => props.modelValue,
    () => {
        updateSelectedItemsFromVModel();
    },
    { deep: true, immediate: true },
);

watch(
    () => props.active,
    () => {
        updateActiveItemFromVModel();
    },
    { immediate: true },
);

onMounted(() => {
    if (props.selectable && props.checkbox) {
        if (!slots["screenreader"]) {
            throw Error('Slot "screenreader" is required when having "selectable" & "checkbox" option.');
        }
        registerCallbackAfterItemAdd(callbackAfterItemAdd);
        registerCallbackBeforeItemDelete(callbackBeforeItemDelete);
    }
});

function getLiElements(): HTMLElement[] {
    const templateRef = useTemplateRef("ulElement");
    const ulElement = getElementFromVueRef(templateRef);
    return Array.from(ulElement.children) as HTMLElement[];
}

function itemKey(item: ListItem): string {
    const key = item[props.keyAttribute];
    if (typeof key === "undefined") {
        throw new Error(`Key attribute [${props.keyAttribute}]' is missing in item`);
    }
    return String(key);
}

function isSelected(item: ListItem): boolean {
    return includeItem(item, selectedItems.value, props.keyAttribute);
}

function itemClasses(item: ListItem): Record<string, boolean> {
    return {
        "list__item--selected": isSelected(item),
        "list__item--active": isActive(item),
    };
}

function onSelect(item: ListItem): void {
    if (includeItem(item, selectedItems.value, props.keyAttribute)) {
        selectedItems.value = selectedItems.value.filter((i) => !itemEquals(i, item, props.keyAttribute));
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
        emit("unselect", item);
    } else {
        selectedItems.value.push(item);
        /**
         * Emitted when item is selected.
         *
         * @event select
         * @param item
         * @type {ListItem}
         * @param selectedItems
         * @type {ListArray}
         */
        emit("select", item);
    }

    updateVModelWithSelectedItems();
    getCurrentInstance()?.proxy?.$forceUpdate();
}

function setActiveItem(item: ListItem): void {
    /**
     * Emitted when item is activated, i.e. clicked
     *
     * @event click
     * @param item
     * @type {ListItem}
     */
    emit("click", item);

    if (!itemEquals(item, activeItem.value, props.keyAttribute)) {
        /**
         * Emitted when item is activated, i.e. clicked
         *
         * @event change
         * @param item
         * @type {ListItem}
         */
        emit("change", item);
        activeItem.value = item;
        /**
         * V-model active event.
         *
         * @event update:active
         * @param activeItem
         * @type {ListItem}
         */
        emit("update:active", activeItem.value);
    }
}

function onItemClick(event: Event, index: number, item: ListItem): void {
    setActiveItem(item);
}

function updateVModelWithSelectedItems(): void {
    if (props.modelValue) {
        /**
         * V-model event to update value property.
         * @event update:modelValue
         */
        emit("update:modelValue", selectedItems.value);
    }
}

function updateSelectedItemsFromVModel(): void {
    if (Array.isArray(props.modelValue)) {
        // Remove old selected items that may not exists in items.
        selectedItems.value = props.modelValue.filter((item: ListItem) => {
            return includeItem(item, props.items, props.keyAttribute);
        });
    } else {
        selectedItems.value = [];
    }
}

function updateActiveItemFromVModel(): void {
    if (props.active === undefined) {
        activeItem.value = undefined;
    } else if (!itemEquals(props.active, activeItem.value, props.keyAttribute)) {
        activeItem.value = props.active;
    }
}

function onItemKeyDown(event: KeyboardEvent, item: ListItem): void {
    switch (event.key) {
        case "Up":
        case "Down":
        case "ArrowUp":
        case "ArrowDown":
            event.preventDefault();
            handleKeyboardFocusNavigation(event.key, event.target as HTMLElement, getLiElements());
            break;

        case " ":
        case "Spacebar":
            event.preventDefault();
            setActiveItem(item);
            break;
    }
}

// Unique id to connect aria-labelledby with readonly label
function getAriaLabelledbyId(item: ListItem): string {
    return `${props.elementId}_${itemKey(item)}`;
}

// Unique id to connect aria-labelledby with readonly label
function getItemId(item: ListItem): string {
    return `${props.elementId}_item_${itemKey(item)}`;
}

// Focus effect is done with box-shadow.
// By setting position to relative the
// item and box-shadow is drawn with a higher z-index,
// thus no focus border under other list items.
function onItemFocus(event: FocusEvent): void {
    if (event && event.target) {
        (event.target as HTMLElement).style.position = "relative";
    }
}

function onItemBlur(event: FocusEvent): void {
    if (event && event.target) {
        (event.target as HTMLElement).style.position = "static";
    }
}

function callbackAfterItemAdd(item: ListItem): void {
    setActiveItem(item);
}

function callbackBeforeItemDelete(item: ListItem): void {
    if (props.items.length === 0) {
        return;
    }
    let targetIndex = props.items.indexOf(item) - 1;
    if (targetIndex < 0 && props.items.length > 1) {
        targetIndex = 1;
    } else if (targetIndex < 0) {
        targetIndex = 0;
    }
    setActiveItem(props.items[targetIndex]);
    const targetElement = getLiElements()[targetIndex];
    if (targetElement) {
        targetElement.focus();
    }
}

function isActive(item: ListItem): boolean {
    return props.checkbox && itemEquals(activeItem.value, item, props.keyAttribute);
}
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
