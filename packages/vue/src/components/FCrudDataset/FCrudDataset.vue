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
        </div>

        <f-form-modal
            :is-open="isFormModalOpen"
            :aria-close-text="$t('fkui.crud-dataset.modal.close', 'Stäng')"
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
@slot Slot for inputs when creating a new item.
The new item is available through `v-slot="{ item }"`
If any data in the item should be set not by the user the prop beforeCreate can be used to set that data.
                    -->
                <slot v-if="operation === Operation.ADD" name="add" v-bind="{ item: item }" />
                <!--
@slot Slot for inputs when modifying an item.
The item being modified is available through `v-slot="{ item }"`
                    -->
                <slot v-if="operation === Operation.MODIFY" name="modify" v-bind="{ item: item }" />
            </template>
            <template #submit-button-text>{{ confirmButtonText }}</template>
            <template #cancel-button-text>{{ cancelButtonText }}</template>
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
@slot Slot for displaying a warning message before an item is deleted.
The item being deleted is available through `v-slot="{ item }"`
                    -->
                <slot name="delete" v-bind="{ item: item }" />
            </template>
        </f-confirm-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { deepClone, alertScreenReader, TranslationService } from "@fkui/logic";

import { FIcon } from "../FIcon";
import { FFormModal, FConfirmModal } from "../FModal";
import { FModalButtonDescriptor } from "../FModal/modal-button";
import { type ListItem, type ListArray } from "../../types";
import { TranslationMixin } from "../../plugins";
import { type FValidationFormCallback } from "../FValidationForm";
import { FCrudDatasetInterface } from "./FCrudDatasetInterface";
import { ActivateItemInterface } from "./ActivateItemInterface";
import { type FCrudDatasetData } from "./fcruddataset-data";
import { Operation } from "./operation";

export default defineComponent({
    name: "FCrudDataset",
    components: { FFormModal, FConfirmModal, FIcon },
    mixins: [TranslationMixin],
    provide(): FCrudDatasetInterface & ActivateItemInterface {
        return {
            delete: (item: ListItem) => {
                this.deleteItem(item);
            },
            modify: (item: ListItem) => {
                this.updateItem(item);
            },
            registerCallbackAfterItemAdd: (callback: (item: ListItem) => void) => {
                this.callbackAfterItemAdd = callback;
            },
            registerCallbackBeforeItemDelete: (callback: (item: ListItem) => void) => {
                this.callbackBeforeItemDelete = callback;
            },
        };
    },
    props: {
        /**
         * The list of items that should be deleted, modified or added to.
         * If the prop is not set an empty array will be used.
         * @model
         */
        modelValue: {
            type: Array as PropType<ListArray<ListItem>>,
            required: false,
            default: () => [],
        },
        /**
         * A function that returns an item to the #add template. Can be used to populate data that the user should not input themself e.g. an id.
         * Or to give the user suggestions for inputs. If the prop is not used an empty item will be returned.
         */
        beforeCreate: {
            type: Function as PropType<(() => ListItem) | undefined>,
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
    },
    emits: ["change", "created", "deleted", "updated", "update:modelValue"],
    data(): FCrudDatasetData {
        return {
            result: [],
            Operation,
            operation: Operation.NONE,
            item: null,
            originalItemToUpdate: null,
            isFormModalOpen: false,
            isConfirmModalOpen: false,
            callbackAfterItemAdd() {
                // dummy method when not provided by underlying component
            },
            callbackBeforeItemDelete() {
                // dummy method when not provided by underlying component
            },
        };
    },
    computed: {
        confirmButtonText(): string {
            return this.operation === Operation.ADD
                ? this.$t("fkui.crud-dataset.modal.confirm.add", "Lägg till")
                : this.$t("fkui.crud-dataset.modal.confirm.modify", "Spara");
        },
        cancelButtonText(): string {
            return this.operation === Operation.ADD
                ? this.$t("fkui.crud-dataset.modal.cancel.add", "Avbryt")
                : this.$t("fkui.crud-dataset.modal.cancel.modify", "Avbryt");
        },
        confirmDeleteButtons(): FModalButtonDescriptor[] {
            return [
                {
                    label: this.$t("fkui.crud-dataset.modal.confirm.delete", "Ja, ta bort"),
                    type: "primary",
                    event: "confirm",
                },
                { label: this.$t("fkui.crud-dataset.modal.cancel.delete", "Nej, avbryt"), type: "secondary" },
            ];
        },
        hasAddSlot(): boolean {
            return Boolean(this.$slots.add);
        },
        hasDeleteSlot(): boolean {
            return Boolean(this.$slots.delete);
        },
        hasModifySlot(): boolean {
            return Boolean(this.$slots.modify);
        },
        formModalHeader(): string {
            return this.operation === Operation.ADD ? this.addNewModalHeader : this.modifyModalHeader;
        },
    },
    watch: {
        modelValue: {
            immediate: true,
            deep: true,
            handler(data: ListItem[]) {
                this.result = [...data];
            },
        },
    },
    mounted(): void {
        if (!this.hasAddSlot && !this.hasDeleteSlot && !this.hasModifySlot) {
            throw Error("Atleast one template of the following must be defined. #add, #delete or #modify");
        }
    },
    methods: {
        createItem(): void {
            if (!this.hasAddSlot) {
                throw Error("No template is defined for #add");
            }
            this.operation = Operation.ADD;
            this.item = this.beforeCreate ? this.beforeCreate() : {};
            this.isFormModalOpen = true;
        },
        deleteItem(item: ListItem) {
            if (!this.hasDeleteSlot) {
                throw Error("No template is defined for #delete");
            }
            this.operation = Operation.DELETE;
            this.item = item;
            this.isConfirmModalOpen = true;
        },
        onDeleteConfirm(): void {
            if (!this.item) {
                return;
            }
            this.callbackBeforeItemDelete(this.item);
            this.result = this.result.filter((item: ListItem) => item !== this.item);

            /**
             * Emitted when an item is deleted.
             * @event deleted
             * @param item - the deleted item.
             */
            this.$emit("deleted", this.item);

            /**
             * V-model event.
             * @event update:modelValue
             */
            this.$emit("update:modelValue", this.result);

            /**
             * Vue2 v-model event.
             * @deprecated
             * @event change
             */
            this.$emit("change", this.result);

            alertScreenReader(this.$t("fkui.crud-dataset.aria-live.delete", "Raden har tagits bort"), {
                assertive: true,
            });
        },
        onDeleteClose(e: { reason: string }) {
            this.onModalClose();
            if (e.reason === "close" && this.onCancel) {
                this.onCancel();
            }
        },

        onModalClose(): void {
            this.isFormModalOpen = false;
            this.isConfirmModalOpen = false;
        },
        onFormModalSubmit(): void {
            if (!this.item) {
                return;
            }
            if (this.operation === Operation.ADD) {
                this.result.push(this.item);
                /**
                 * Emitted when an item is added.
                 * @event created
                 * @param item - the added item.
                 */
                this.$emit("created", this.item);
                this.$emit("update:modelValue", this.result);
                this.$emit("change", this.result);

                this.callbackAfterItemAdd(this.item);
                alertScreenReader(this.$t("fkui.crud-dataset.aria-live.add", "En rad har lagts till"), {
                    assertive: true,
                });
            } else if (this.operation === Operation.MODIFY) {
                if (this.originalItemToUpdate) {
                    Object.assign(this.originalItemToUpdate, this.item);
                } else {
                    this.originalItemToUpdate = this.item;
                }
                /**
                 * Emitted when an item is updated.
                 * @event updated
                 * @param item - the updated item.
                 */
                this.$emit("updated", this.originalItemToUpdate);
                this.$emit("update:modelValue", this.result);
                this.$emit("change", this.result);

                alertScreenReader(this.$t("fkui.crud-dataset.aria-live.modify", "Raden har ändrats"), {
                    assertive: true,
                });
            }
            this.isFormModalOpen = false;
        },
        updateItem(item: ListItem): void {
            if (!this.hasModifySlot) {
                throw Error("No template is defined for #modify");
            }
            this.operation = Operation.MODIFY;
            this.originalItemToUpdate = item;
            this.item = deepClone(item);
            this.isFormModalOpen = true;
        },
    },
});
</script>
