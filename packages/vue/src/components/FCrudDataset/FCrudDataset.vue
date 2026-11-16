<script setup lang="ts" generic="T">
import { type PropType, type Ref, computed, onMounted, provide, ref, useTemplateRef, watch } from "vue";
import { TranslationService, alertScreenReader, assertRef, deepClone } from "@fkui/logic";

import { useTranslate } from "../../plugins";
import { useModal } from "../../utils/use-modal";
import { FIcon } from "../FIcon";
import { type FModalSize } from "../FModal";
import { type FModalButtonDescriptor } from "../FModal/modal-button";
import { type FValidationFormCallback } from "../FValidationForm";
import ICrudDatasetConfirmModal from "./ICrudDatasetConfirmModal.vue";
import ICrudDatasetFormModal from "./ICrudDatasetFormModal.vue";
import { filterItem } from "./filter-item";
import { Operation } from "./operation";

/* eslint-disable-next-line vue/define-props-declaration -- technical debt */
const props = defineProps({
    /**
     * The list of items that should be deleted, modified or added to.
     * If the prop is not set an empty array will be used.
     */
    modelValue: {
        type: Array as PropType<T[]>,
        required: false,
        default: () => [],
    },
    /**
     * A function that returns an item to the #add template. Can be used to populate data that the user should not input themself e.g. an id.
     * Or to give the user suggestions for inputs. If the prop is not used an empty item will be returned.
     */
    beforeCreate: {
        type: Function as PropType<(() => T) | undefined>,
        required: false,
        default: undefined,
    },
    /**
     * If given, this function is called before the [[submit]] event is emitted.
     * See <f-validation-form> `beforeSubmit` props for more info.
     */
    beforeSubmit: {
        type: Function as PropType<FValidationFormCallback>,
        required: false,
        default(): void {
            /* do nothing */
        },
    },
    /**
     * If given, this function is called before the form data is validated and the [[submit]] event is emitted.
     * See <f-validation-form> `beforeValidation` props for more info.
     */
    beforeValidation: {
        type: Function as PropType<FValidationFormCallback>,
        required: false,
        default(): void {
            /* do nothing */
        },
    },
    /**
     * If given, this function is called after the modal has been closed.
     */
    onCancel: {
        type: Function as PropType<() => void>,
        required: false,
        default() {
            return undefined;
        },
    },

    /**
     * Property for changing the "add new" modal heading
     */
    addNewModalHeader: {
        type: String,
        required: false,
        default: TranslationService.provider.translate("fkui.crud-dataset.modal.header.add", "Lägg till rad"),
    },
    /**
     * Property for changing the "modify" modal heading
     */
    modifyModalHeader: {
        type: String,
        required: false,
        default: TranslationService.provider.translate("fkui.crud-dataset.modal.header.modify", "Ändra rad"),
    },
    /**
     * Property for changing the "delete" modal heading
     */
    deleteModalHeader: {
        type: String,
        required: false,
        default: TranslationService.provider.translate(
            "fkui.crud-dataset.modal.header.delete",
            "Är du säker på att du vill ta bort raden?",
        ),
    },
    /**
     * Property for changing the "add" and "modify" modal size
     */
    formModalSize: {
        type: String as PropType<FModalSize | "fullscreen" | "">,
        required: false,
        default: "",
    },
    /**
     * Property for setting the position of the add button
     */
    buttonPosition: {
        type: String as PropType<"bottom" | "top">,
        required: false,
        default: "bottom",
    },
});
const emit = defineEmits<{
    /**
     * Emitted when an item is added.
     *
     * @arg item - the added item.
     */
    created: [item: T];

    /**
     * Emitted when an item is deleted.
     *
     * @arg item - the deleted item.
     */
    deleted: [item: T];

    /**
     * Emitted when an item is updated.
     *
     * @arg item - the updated item.
     */
    updated: [item: T];

    /**
     * V-model event.
     *
     * @ignore
     * @arg items - updated list of items.
     */
    "update:modelValue": [items: T[]];
}>();

const slots = defineSlots<{
    /**
     * Slot for displaying the data.
     */
    default?(bindings: {
        /**
         * Callback to trigger modification modal
         */
        updateItem: (item: T) => void;
        /**
         * Callback to trigger deletion modal
         */
        deleteItem: (item: T) => void;
    }): unknown;
    /**
     * Slot for additional add buttons
     */
    buttons?(bindings: {
        /**
         * Default button classes.
         */
        buttonClasses: string[];
    }): unknown;
    /**
     * Slot for inputs when creating a new item. The new item is available through `v-slot="{ item }"`. If any data in the item should be set not by the user the prop `beforeCreate` can be used to set that data.
     */
    add?(bindings: {
        /**
         * Item returned by `beforeCreate` or an empty object.
         */
        item: T;
    }): unknown;
    /**
     * Slot for inputs when modifying an item. The item being modified is available through `v-slot="{ item }"`.
     */
    modify?(bindings: {
        /**
         * A clone of the current item.
         */
        item: T;
    }): unknown;
    /**
     * Slot for displaying a warning message before an item is deleted. The item being deleted is available through `v-slot="{ item }"`.
     */
    delete?(bindings: {
        /**
         * Item about to be deleted.
         */
        item: T;
    }): unknown;
    /* must be last and documented in the template: vue-docgen-api does not
     * handle quoted slot names (it would drop the description of another slot) */
    "add-button"?(): unknown;
}>();

const $t = useTranslate();
const { openModal } = useModal();
const rootElement = useTemplateRef("root");

const result = ref<T[]>([]) as Ref<T[]>; // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion -- technical debt
const operation = ref(Operation.NONE);
const item = ref<T | null>(null);
const nestedKey = ref<keyof T | null | undefined>(null);
const originalItemToUpdate = ref<T | null>(null);
const callbackAfterItemAdd = ref<(item: T) => void>(() => ({}));
const callbackBeforeItemDelete = ref<(item: T) => void>(() => ({}));

/* eslint-disable-next-line unicorn/no-non-function-verb-prefix -- false positive */
const addButtonText = $t("fkui.crud-dataset.button.add", "Lägg till ny");

const formModalButtons = computed((): FModalButtonDescriptor[] => {
    const confirmButtonText =
        operation.value === Operation.ADD
            ? /** "Save" button in "add new" modal" */ $t("fkui.crud-dataset.modal.confirm.add", "Lägg till")
            : /** "Save" button in "modify" modal */ $t("fkui.crud-dataset.modal.confirm.modify", "Spara");
    const cancelButtonText =
        operation.value === Operation.ADD
            ? /** "Cancel" button in "add new" modal */ $t("fkui.crud-dataset.modal.cancel.add", "Avbryt")
            : /** "Cancel" button in "modify" modal */ $t("fkui.crud-dataset.modal.cancel.modify", "Avbryt");
    return [
        {
            label: confirmButtonText,
            event: "confirm",
            type: "primary",
            submitButton: true,
        },
        {
            label: cancelButtonText,
            event: "dismiss",
            type: "secondary",
            submitButton: false,
        },
    ];
});

const confirmDeleteButtons = computed((): FModalButtonDescriptor[] => {
    return [
        {
            /** "Confirm" button in "delete" modal */
            label: $t("fkui.crud-dataset.modal.confirm.delete", "Ja, ta bort"),
            type: "primary",
            event: "confirm",
        },
        {
            /** "Cancel" button in "delete" modal */
            label: $t("fkui.crud-dataset.modal.cancel.delete", "Nej, avbryt"),
            type: "secondary",
        },
    ];
});

const hasAddSlot = computed((): boolean => {
    return slots.add !== undefined;
});

const hasDeleteSlot = computed((): boolean => {
    return slots.delete !== undefined;
});

const hasModifySlot = computed((): boolean => {
    return slots.modify !== undefined;
});

const formModalHeader = computed((): string => {
    return operation.value === Operation.ADD ? props.addNewModalHeader : props.modifyModalHeader;
});

provide("delete", deleteItem);
provide("modify", updateItem);

provide("registerCallbackAfterItemAdd", (callback: (item: T) => void) => {
    callbackAfterItemAdd.value = callback;
});

provide("registerCallbackBeforeItemDelete", (callback: (item: T) => void) => {
    callbackBeforeItemDelete.value = callback;
});

provide("setNestedKey", setNestedKey);

defineExpose({
    /**
     * Opens the modification modal for the given item.
     */
    updateItem,
    /**
     * Opens the deletion modal for the given item.
     */
    deleteItem,
});

onMounted(() => {
    if (!hasAddSlot.value && !hasDeleteSlot.value && !hasModifySlot.value) {
        throw new Error("At least one template of the following must be defined. #add, #delete or #modify");
    }
});

watch(
    () => props.modelValue,
    (data) => {
        result.value = [...data];
    },
    { immediate: true, deep: true },
);

function createItem(): void {
    if (!hasAddSlot.value) {
        throw new Error("No template is defined for #add");
    }
    operation.value = Operation.ADD;
    item.value = props.beforeCreate ? props.beforeCreate() : {};
    void showFormModal();
}

function deleteItem(current: T): void {
    if (!hasDeleteSlot.value) {
        throw new Error("No template is defined for #delete");
    }
    operation.value = Operation.DELETE;
    item.value = current;
    void showConfirmModal();
}

function onDeleteConfirm(): void {
    if (!item.value) {
        return;
    }

    callbackBeforeItemDelete.value(item.value);
    result.value = filterItem(result.value, item.value, nestedKey.value);
    emit("deleted", item.value);
    emit("update:modelValue", result.value);

    /** Text announced to screenreaders when an item has been removed */
    const message = $t("fkui.crud-dataset.aria-live.delete", "Raden har tagits bort");
    alertScreenReader(message, {
        assertive: true,
    });
}

function onFormModalSubmit(): void {
    if (!item.value) {
        return;
    }
    if (operation.value === Operation.ADD) {
        result.value.push(item.value);
        emit("created", item.value);
        emit("update:modelValue", result.value);

        callbackAfterItemAdd.value(item.value);

        /** Text announced to screenreaders when an item has been added */
        const message = $t("fkui.crud-dataset.aria-live.add", "En rad har lagts till");
        alertScreenReader(message, {
            assertive: true,
        });
    } else if (operation.value === Operation.MODIFY) {
        if (originalItemToUpdate.value) {
            Object.assign(originalItemToUpdate.value, item.value);
        } else {
            originalItemToUpdate.value = item.value;
        }
        emit("updated", originalItemToUpdate.value);
        emit("update:modelValue", result.value);

        /** Text announced to screenreaders when an item has been modified */
        const message = $t("fkui.crud-dataset.aria-live.modify", "Raden har ändrats");
        alertScreenReader(message, {
            assertive: true,
        });
    }
}

function updateItem(current: T): void {
    if (!hasModifySlot.value) {
        throw new Error("No template is defined for #modify");
    }
    operation.value = Operation.MODIFY;
    originalItemToUpdate.value = current;
    item.value = deepClone(current);
    void showFormModal();
}

function setNestedKey(key: keyof T | null | undefined): void {
    nestedKey.value = key;
}

/**
 * The modals are mounted inside the root element of this component to retain
 * the DOM placement (selectors and pageobjects are scoped to this component).
 */
function getRootElement(): HTMLElement {
    assertRef(rootElement);

    return rootElement.value;
}

async function showFormModal(): Promise<void> {
    const current = item.value;
    const isAdd = operation.value === Operation.ADD;

    const { reason } = await openModal(ICrudDatasetFormModal, {
        attachTo: getRootElement(),
        props: {
            header: formModalHeader.value,
            ariaCloseText: $t("fkui.crud-dataset.modal.close", "Stäng"),
            buttons: formModalButtons.value,
            size: props.formModalSize,
            beforeSubmit: props.beforeSubmit,
            beforeValidation: props.beforeValidation,
            content: () => (isAdd ? slots.add?.({ item: current }) : slots.modify?.({ item: current })),
            onSubmit: onFormModalSubmit,
        },
    });

    if (reason !== "submit") {
        props.onCancel?.();
    }
}

async function showConfirmModal(): Promise<void> {
    const current = item.value;

    const { reason } = await openModal(ICrudDatasetConfirmModal, {
        attachTo: getRootElement(),
        props: {
            heading: props.deleteModalHeader,
            buttons: confirmDeleteButtons.value,
            content: () => slots.delete?.({ item: current }),
            onConfirm: onDeleteConfirm,
        },
    });

    if (reason === "close") {
        props.onCancel?.();
    }
}
</script>

<template>
    <div ref="root" class="crud-dataset">
        <template v-if="props.buttonPosition === 'top' && hasAddSlot">
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

            <slot
                name="buttons"
                v-bind="{
                    buttonClasses: ['button', 'button--tertiary', 'crud-dataset__add-button'],
                }"
            />
        </template>
        <slot v-bind="{ updateItem, deleteItem }"></slot>
        <template v-if="props.buttonPosition === 'bottom' && hasAddSlot">
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

            <slot
                name="buttons"
                v-bind="{
                    buttonClasses: ['button', 'button--tertiary', 'crud-dataset__add-button'],
                }"
            />
        </template>
    </div>
</template>
