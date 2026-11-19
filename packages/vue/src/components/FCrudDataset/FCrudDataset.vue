<script setup lang="ts" generic="T">
import { type Ref, computed, onMounted, onUnmounted, provide, ref, toValue, watch } from "vue";
import { alertScreenReader, deepClone } from "@fkui/logic";
import { useTranslate } from "../../plugins";
import { FIcon } from "../FIcon";
import {
    type FCrudDatasetCreateCallback,
    type FCrudDatasetDeleteCallback,
    type FCrudDatasetUpdateCallback,
} from "./crud-dataset-callbacks";
import { type FCrudDatasetPresenter, crudDatasetPresenterKey } from "./crud-dataset-presenter";
import { removeItem } from "./remove-item";
import { replaceItem } from "./replace-item";

const {
    modelValue = undefined,
    onCreate = undefined,
    onUpdate = undefined,
    onDelete = undefined,
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
     *
     * If the component has been unmounted when `commit` is called, the call
     * is ignored.
     */
    onCreate?: FCrudDatasetCreateCallback<T>;
    /**
     * Called when the user wants to modify an item.
     *
     * The callback receives a copy of the item which can be modified freely,
     * the original item is left untouched until `commit(item)` is called.
     *
     * The consumer is responsible for modifying the item (typically by
     * opening a modal) and must call `commit(item)` with the modified item to
     * update the dataset.
     *
     * When committed the original item is updated in place (its object
     * identity is preserved) and a new array containing the same item
     * references is emitted. A non-deep watcher comparing item identity will
     * not detect the change.
     *
     * Only object items can be modified. Calling `commit` for a primitive
     * item (string, number, etc) throws an error.
     *
     * If the component has been unmounted when `commit` is called, the call
     * is ignored and the original item is left untouched.
     */
    onUpdate?: FCrudDatasetUpdateCallback<T>;
    /**
     * Called when the user wants to remove an item.
     *
     * The consumer is responsible for confirming the removal (typically by
     * opening a confirmation modal) and must call `commit()` to remove the
     * item from the dataset.
     *
     * If the component has been unmounted when `commit` is called, the call
     * is ignored.
     */
    onDelete?: FCrudDatasetDeleteCallback<T>;
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

/**
 * The list or table presenting the items, registered with `useCrudDatasetPresenter()`.
 */
let presenter: FCrudDatasetPresenter<T> = {};

/** Text for the "add new" button */
/* eslint-disable-next-line unicorn/no-non-function-verb-prefix -- false positive */
const addButtonText = $t("fkui.crud-dataset.button.add", "Lägg till ny");
const hasAdd = computed((): boolean => Boolean(onCreate));

provide(crudDatasetPresenterKey, (registered) => {
    presenter = registered;
    return () => {
        if (presenter === registered) {
            presenter = {};
        }
    };
});

defineExpose({
    /**
     * Triggers `onCreate`. Returns the value returned by `onCreate`, so a
     * rejected promise can be awaited or caught by the caller.
     */
    createItem,
    /**
     * Triggers `onUpdate` for the given item. Returns the value returned by
     * `onUpdate`, so a rejected promise can be awaited or caught by the caller.
     */
    updateItem,
    /**
     * Triggers `onDelete` for the given item. Returns the value returned by
     * `onDelete`, so a rejected promise can be awaited or caught by the caller.
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

/* commits arriving after unmount are discarded as the parent would never
 * receive the `update:modelValue` event (and edit would otherwise mutate the
 * parent's item in place without notifying it) */
let isUnmounted = false;

onMounted(() => {
    if (!onCreate && !onUpdate && !onDelete) {
        throw new Error("At least one of the following props must be set: onCreate, onUpdate or onDelete");
    }
});

onUnmounted(() => {
    isUnmounted = true;
});

function createItem(): void | Promise<void> {
    if (!onCreate) {
        throw new Error("No onCreate callback is defined");
    }

    return onCreate((item: T, alert?: string) => {
        if (isUnmounted) {
            return;
        }

        setItems([...items.value, item]);
        presenter.afterCreate?.(item);

        const message = alert ?? $t("fkui.crud-dataset.aria-live.add", "En rad har lagts till");
        alertScreenReader(message, { assertive: true });
    });
}

function updateItem(current: T): void | Promise<void> {
    if (!onUpdate) {
        throw new Error("No onUpdate callback is defined");
    }

    return onUpdate(deepClone(current), (modified: T, alert?: string) => {
        if (isUnmounted) {
            return;
        }

        if (!isObject(current) || !isObject(modified)) {
            throw new Error("FCrudDataset can only modify object items");
        }

        replaceItem(current, modified);
        setItems([...items.value]);

        const message = alert ?? $t("fkui.crud-dataset.aria-live.modify", "Raden har ändrats");
        alertScreenReader(message, { assertive: true });
    });
}

function deleteItem(current: T): void | Promise<void> {
    if (!onDelete) {
        throw new Error("No onDelete callback is defined");
    }

    return onDelete(current, (alert?: string) => {
        if (isUnmounted) {
            return;
        }

        const commit = (): void => {
            setItems(removeItem(items.value, current, toValue(presenter.nestedKey)));
        };

        if (presenter.handleDelete) {
            presenter.handleDelete(current, commit);
        } else {
            commit();
        }

        const message = alert ?? $t("fkui.crud-dataset.aria-live.delete", "Raden har tagits bort");
        alertScreenReader(message, { assertive: true });
    });
}

function isObject(value: unknown): value is object {
    return typeof value === "object" && value !== null;
}

function setItems(value: T[]): void {
    items.value = value;
    emit("update:modelValue", value);
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
             @binding {(item: T) => void | Promise<void>} updateItem Callback to trigger `onUpdate`
             @binding {(item: T) => void | Promise<void>} deleteItem Callback to trigger `onDelete`
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
