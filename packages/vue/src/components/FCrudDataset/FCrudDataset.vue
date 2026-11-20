<script setup lang="ts" generic="T">
import { type Ref, computed, onMounted, provide, ref, watch } from "vue";
import { alertScreenReader } from "@fkui/logic";
import { useTranslate } from "../../plugins";
import { FIcon } from "../FIcon";
import {
    type FCrudDatasetAddCallback,
    type FCrudDatasetEditCallback,
    type FCrudDatasetRemoveCallback,
} from "./crud-dataset-callbacks";
import { filterItem } from "./filter-item";
import { replaceItem } from "./replace-item";

const {
    modelValue = undefined,
    onAdd = undefined,
    onEdit = undefined,
    onRemove = undefined,
    buttonPosition = "bottom",
} = defineProps<{
    /**
     * The list of items that should be removed, modified or added to.
     * If the prop is not set an empty array will be used.
     */
    modelValue?: T[];
    /**
     * Called when the user wants to add a new item, e.g. by clicking the
     * "add" button. The add button is only rendered when this prop is set.
     *
     * The consumer is responsible for collecting the new item (typically by
     * opening a modal) and must call `commit(item)` to add it to the dataset.
     */
    onAdd?: FCrudDatasetAddCallback<T>;
    /**
     * Called when the user wants to modify an item.
     *
     * The consumer is responsible for modifying the item (typically by
     * opening a modal) and must call `commit(item?)` to update the dataset.
     */
    onEdit?: FCrudDatasetEditCallback<T>;
    /**
     * Called when the user wants to remove an item.
     *
     * The consumer is responsible for confirming the removal (typically by
     * opening a confirmation modal) and must call `commit()` to remove the
     * item from the dataset.
     */
    onRemove?: FCrudDatasetRemoveCallback<T>;
    /**
     * Property for setting the position of the add button
     */
    buttonPosition?: "bottom" | "top";
}>();

const emit = defineEmits<{
    /**
     * Emitted when the dataset has been modified (item added, modified or removed).
     *
     * @arg items - the new list of items.
     */
    "update:modelValue": [items: T[]];
}>();

const $t = useTranslate();

/**
 * Local copy of the model.
 * All modifications are made on this copy (never on the `modelValue` prop) and a new array is emitted with `update:modelValue`.
 * Keeping a local copy ensures multiple commits within the same tick build upon each other before the parent has re-rendered.
 */
const items = ref<T[]>([]) as Ref<T[]>; // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion -- generic ref

const nestedKey = ref<keyof T | null | undefined>(null);
const callbackAfterItemAdd = ref<(item: T) => void>(() => ({}));
const callbackBeforeItemDelete = ref<(item: T) => void>(() => ({}));

/** Text for the "add new" button */
/* eslint-disable-next-line unicorn/no-non-function-verb-prefix -- false positive */
const addButtonText = $t("fkui.crud-dataset.button.add", "Lägg till ny");
const hasAdd = computed((): boolean => Boolean(onAdd));

provide("delete", deleteItem);
provide("modify", updateItem);
provide("setNestedKey", setNestedKey);

provide("registerCallbackAfterItemAdd", (callback: (item: T) => void) => {
    callbackAfterItemAdd.value = callback;
});

provide("registerCallbackBeforeItemDelete", (callback: (item: T) => void) => {
    callbackBeforeItemDelete.value = callback;
});

defineExpose({
    /**
     * Triggers `onAdd`.
     */
    createItem,
    /**
     * Triggers `onEdit` for the given item.
     */
    updateItem,
    /**
     * Triggers `onRemove` for the given item.
     */
    deleteItem,
});

watch(
    () => modelValue,
    (value) => {
        items.value = [...(value ?? [])];
    },
    { immediate: true, deep: true },
);

onMounted(() => {
    if (!onAdd && !onEdit && !onRemove) {
        throw new Error("At least one of the following props must be set: onAdd, onEdit or onRemove");
    }
});

function createItem(): void {
    if (!onAdd) {
        throw new Error("No onAdd callback is defined");
    }

    onAdd((item: T, alert?: string) => {
        setItems([...items.value, item]);
        callbackAfterItemAdd.value(item);

        const message = alert ?? $t("fkui.crud-dataset.aria-live.add", "En rad har lagts till");
        alertScreenReader(message, { assertive: true });
    });
}

function updateItem(current: T): void {
    if (!onEdit) {
        throw new Error("No onEdit callback is defined");
    }

    onEdit(current, (modified?: T, alert?: string) => {
        if (modified) {
            replaceItem(current, modified);
        }

        setItems([...items.value]);

        const message = alert ?? $t("fkui.crud-dataset.aria-live.modify", "Raden har ändrats");
        alertScreenReader(message, { assertive: true });
    });
}

function deleteItem(current: T): void {
    if (!onRemove) {
        throw new Error("No onRemove callback is defined");
    }

    onRemove(current, (alert?: string) => {
        callbackBeforeItemDelete.value(current);
        setItems(filterItem(items.value, current, nestedKey.value));

        const message = alert ?? $t("fkui.crud-dataset.aria-live.delete", "Raden har tagits bort");
        alertScreenReader(message, { assertive: true });
    });
}

function setItems(value: T[]): void {
    items.value = value;
    emit("update:modelValue", value);
}

function setNestedKey(key: keyof T | null | undefined): void {
    nestedKey.value = key;
}
</script>

<template>
    <div class="crud-dataset">
        <template v-if="buttonPosition === 'top' && hasAdd">
            <button
                data-test="f-crud-dataset-add-button"
                type="button"
                class="button button--tertiary crud-dataset__add-button"
                @click="createItem()"
            >
                <f-icon class="button__icon" name="plus" />
                <!--
                     @slot Slot for changing the text in "Add new" button`
                -->
                <slot name="add-button">{{
                    /** Buttontext for adding a new item */
                    addButtonText
                }}</slot>
            </button>

            <!--
                @slot Slot for additional add buttons
                @binding {string[]} buttonClasses Default button classes.
            -->
            <slot
                name="buttons"
                v-bind="{
                    buttonClasses: ['button', 'button--tertiary', 'crud-dataset__add-button'],
                }"
            />
        </template>
        <!--
             @slot Slot for displaying the data.
             @binding {(item: T) => void} updateItem Callback to trigger `onEdit`
             @binding {(item: T) => void} deleteItem Callback to trigger `onRemove`
        -->
        <slot v-bind="{ updateItem, deleteItem }"></slot>
        <template v-if="buttonPosition === 'bottom' && hasAdd">
            <button
                data-test="f-crud-dataset-add-button"
                type="button"
                class="button button--tertiary crud-dataset__add-button"
                @click="createItem()"
            >
                <f-icon class="button__icon" name="plus" />
                <!--
                     @slot Slot for changing the text in "Add new" button`
                -->
                <slot name="add-button">{{
                    /** Buttontext for adding a new item */
                    addButtonText
                }}</slot>
            </button>

            <!--
                @slot Slot for additional add buttons
                @binding {string[]} buttonClasses Default button classes.
            -->
            <slot
                name="buttons"
                v-bind="{
                    buttonClasses: ['button', 'button--tertiary', 'crud-dataset__add-button'],
                }"
            />
        </template>
    </div>
</template>
