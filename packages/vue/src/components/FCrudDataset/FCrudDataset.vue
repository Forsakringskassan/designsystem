<script setup lang="ts" generic="T">
import { type PropType, type Ref, computed, onMounted, provide, ref, useSlots, watch } from "vue";
import { deepClone, alertScreenReader, TranslationService } from "@fkui/logic";

import { FIcon } from "../FIcon";
import { FFormModal, FConfirmModal } from "../FModal";
import { FModalButtonDescriptor } from "../FModal/modal-button";
import { useTranslate } from "../../plugins";
import { type FValidationFormCallback } from "../FValidationForm";
import { Operation } from "./operation";

const $t = useTranslate();
const slots = useSlots();

const result = ref<T[]>([]) as Ref<T[]>;
const operation = ref<Operation>(Operation.NONE);
const item = ref<T | null>(null);
const originalItemToUpdate = ref<T | null>(null);
const isFormModalOpen = ref(false);
const isConfirmModalOpen = ref(false);
const callbackAfterItemAdd = ref<(item: T) => void>(() => ({}));
const callbackBeforeItemDelete = ref<(item: T) => void>(() => ({}));

const props = defineProps({
    /**
     * The list of items that should be deleted, modified or added to.
     * If the prop is not set an empty array will be used.
     * @model
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
     * If `true` the primary button in the modals will be placed to the right side instead of to the left.
     */
    primaryButtonRight: {
        type: Boolean,
        default: false,
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

const formModalButtons = computed((): FModalButtonDescriptor[] => {
    const confirmButtonText =
        operation.value === Operation.ADD
            ? $t("fkui.crud-dataset.modal.confirm.add", "Lägg till")
            : $t("fkui.crud-dataset.modal.confirm.modify", "Spara");
    const cancelButtonText =
        operation.value === Operation.ADD
            ? $t("fkui.crud-dataset.modal.cancel.add", "Avbryt")
            : $t("fkui.crud-dataset.modal.cancel.modify", "Avbryt");
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
            label: $t("fkui.crud-dataset.modal.confirm.delete", "Ja, ta bort"),
            type: "primary",
            event: "confirm",
        },
        {
            label: $t("fkui.crud-dataset.modal.cancel.delete", "Nej, avbryt"),
            type: "secondary",
        },
    ];
});

const hasAddSlot = computed((): boolean => {
    return Boolean(slots.add);
});

const hasDeleteSlot = computed((): boolean => {
    return Boolean(slots.delete);
});

const hasModifySlot = computed((): boolean => {
    return Boolean(slots.modify);
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

onMounted(() => {
    if (!hasAddSlot.value && !hasDeleteSlot.value && !hasModifySlot.value) {
        throw Error("At least one template of the following must be defined. #add, #delete or #modify");
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
        throw Error("No template is defined for #add");
    }
    operation.value = Operation.ADD;
    item.value = props.beforeCreate ? props.beforeCreate() : {};
    isFormModalOpen.value = true;
}

function deleteItem(current: T): void {
    if (!hasDeleteSlot.value) {
        throw Error("No template is defined for #delete");
    }
    operation.value = Operation.DELETE;
    item.value = current;
    isConfirmModalOpen.value = true;
}

function onDeleteConfirm(): void {
    if (!item.value) {
        return;
    }
    callbackBeforeItemDelete.value(item.value);
    result.value = result.value.filter((it) => it !== item.value);

    emit("deleted", item.value);
    emit("update:modelValue", result.value);

    alertScreenReader($t("fkui.crud-dataset.aria-live.delete", "Raden har tagits bort"), {
        assertive: true,
    });
}

function onDeleteClose(e: { reason: string }): void {
    onModalClose();
    if (e.reason === "close" && props.onCancel) {
        props.onCancel();
    }
}

function onModalClose(): void {
    isFormModalOpen.value = false;
    isConfirmModalOpen.value = false;
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
        alertScreenReader($t("fkui.crud-dataset.aria-live.add", "En rad har lagts till"), {
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

        alertScreenReader($t("fkui.crud-dataset.aria-live.modify", "Raden har ändrats"), {
            assertive: true,
        });
    }
    isFormModalOpen.value = false;
}

function updateItem(current: T): void {
    if (!hasModifySlot.value) {
        throw Error("No template is defined for #modify");
    }
    operation.value = Operation.MODIFY;
    originalItemToUpdate.value = current;
    item.value = deepClone(current);
    isFormModalOpen.value = true;
}
</script>

<template>
    <div class="crud-dataset">
        <!--
@slot Slot for displaying the data.
    -->
        <slot></slot>
        <div v-if="hasAddSlot">
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
                <slot name="add-button">{{ $t("fkui.crud-dataset.button.add", "Lägg till ny") }}</slot>
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
            ></slot>
        </div>

        <!-- [html-validate-disable-block fkui/no-template-modal -- technical debt] -->
        <f-form-modal
            :is-open="isFormModalOpen"
            :aria-close-text="$t('fkui.crud-dataset.modal.close', 'Stäng')"
            :buttons="formModalButtons"
            :use-error-list="false"
            :before-submit="beforeSubmit"
            :before-validation="beforeValidation"
            :on-cancel="onCancel"
            @close="onModalClose"
            @cancel="onCancel"
            @submit="onFormModalSubmit"
        >
            <template #header>{{ formModalHeader }}</template>
            <template #input-text-fields>
                <!--
                     @slot Slot for inputs when creating a new item. The new item is available through `v-slot="{ item }"`. If any data in the item should be set not by the user the prop `beforeCreate` can be used to set that data.
                     @binding {T} item Item returned by `beforeCreate` or an empty object.
                -->
                <slot v-if="operation === Operation.ADD" name="add" v-bind="{ item: item! }" />
                <!--
                     @slot Slot for inputs when modifying an item. The item being modified is available through `v-slot="{ item }"`.
                     @binding {T} item A clone of the current item.
                -->
                <slot v-if="operation === Operation.MODIFY" name="modify" v-bind="{ item: item! }" />
            </template>
        </f-form-modal>

        <f-confirm-modal
            :is-open="isConfirmModalOpen"
            :buttons="confirmDeleteButtons"
            @confirm="onDeleteConfirm"
            @close="onDeleteClose"
        >
            <template #heading>
                {{ deleteModalHeader }}
            </template>

            <template #content>
                <!--
                     @slot Slot for displaying a warning message before an item is deleted. The item being deleted is available through `v-slot="{ item }"`.
                     @binding {T} item Item about to be deleted.
                -->
                <slot name="delete" v-bind="{ item: item! }" />
            </template>
        </f-confirm-modal>
    </div>
</template>
