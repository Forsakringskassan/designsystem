<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { ElementIdService, TranslationService, ValidationService } from "@fkui/logic";
import { TranslationMixin } from "../../../plugins/translation";
import { type FValidationFormCallback, FValidationForm } from "../../FValidationForm";
import FModal from "../FModal.vue";
import { type FModalButton, type FModalButtonDescriptor, prepareButtonList } from "../modal-button";
import { type FModalSize } from "../sizes";

export default defineComponent({
    name: "FFormModal",
    components: { FModal, FValidationForm },
    mixins: [TranslationMixin],
    inheritAttrs: true,

    props: {
        /**
         * Enable fullscreen mode in mobile.
         */
        fullscreen: {
            type: Boolean,
            required: false,
            /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
            default: true,
        },
        /**
         * If the modal is open.
         * Use this to toggle if the modal should be visible or not.
         */
        isOpen: {
            type: Boolean,
            required: false,
            /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
            default: true,
        },
        /**
         * See <f-modal> `size` props.
         */
        size: {
            type: String as PropType<FModalSize | "fullscreen" | "">,
            default: "",
        },
        /**
         * @ignore
         */
        dataTest: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * The data that has been submitted.
         */
        value: {
            type: Object,
            default() {
                return {};
            },
        },
        /**
         * Include the error list component.
         */
        useErrorList: {
            type: Boolean,
            required: false,
            /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
            default: true,
        },
        /**
         * The id for the form id attribute.
         * If the prop is not set a random value will be generated.
         */
        formId: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        /**
         * The aria-label attribute text for the top right close button.
         */
        ariaCloseText: {
            type: String,
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
         * List of buttons to display in the modal.
         * Each button is defined as an FModalButtonDescriptor with the following properties:
         * - `label` (String): The text displayed on the button.
         * - `event` (String): The event emitted when the button is clicked.
         * - `type` (String): The button type. Valid values are: "primary" or "secondary".
         * - `submitButton` (Boolean): Whether the button is a submit button.
         */
        buttons: {
            type: Array as PropType<FModalButtonDescriptor[]>,
            required: false,
            default: (): FModalButtonDescriptor[] => [
                {
                    label: TranslationService.provider.translate("fkui.form-modal.button.submit.text", "Spara"),
                    event: "submit",
                    type: "primary",
                    submitButton: true,
                },
                {
                    label: TranslationService.provider.translate("fkui.form-modal.button.cancel.text", "Avbryt"),
                    event: "dismiss",
                    type: "secondary",
                },
            ],
        },
    },
    emits: {
        /**
         * Event that is dispatched when escape is pressed or when the cancel or close buttons are clicked.
         * In most use cases the isOpen prop should be set to false when this event is triggered.
         */
        cancel() {
            return true;
        },

        /**
         * Event that is dispatched when escape is pressed or when the cancel or close buttons are clicked.
         * In most use cases the isOpen prop should be set to false when this event is triggered.
         */
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, should use generics */
        close(_payload: { reason: string; data?: any }) {
            return true;
        },

        /**
         * Event that is dispatched when the submit button is is clicked.
         * The event payload is the data that has been submitted.
         */
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, should use generics */
        submit(_payload: { data: any }) {
            return true;
        },
    },
    data() {
        return {};
    },
    computed: {
        preparedButtons(): FModalButton[] {
            return prepareButtonList(this.buttons);
        },
    },
    methods: {
        onClose() {
            ValidationService.resetState(this.$el);
            this.$emit("cancel");
            this.$emit("close", { reason: "close" });
        },
        onSubmit() {
            ValidationService.resetState(this.$el);
            this.$emit("submit", { data: this.value });
            this.$emit("close", { reason: "submit", data: this.value });
        },
        onCancel() {
            ValidationService.resetState(this.$el);
            this.$emit("cancel");
            this.$emit("close", { reason: "close" });
        },
    },
});
</script>

<template>
    <f-modal :data-test :fullscreen :is-open :size :aria-close-text @close="onClose">
        <template #header>
            <!-- @slot Slot for the header. -->
            <slot name="header"></slot>
        </template>
        <template #content>
            <div>
                <!-- @slot Slot for main content above text fields and buttons. -->
                <slot name="default"></slot>
            </div>
            <f-validation-form
                :id="formId"
                :before-submit
                :before-validation
                :use-error-list
                @submit="onSubmit"
                @cancel="onCancel"
            >
                <template #error-message>
                    <!-- @slot Slot for error message -->
                    <slot name="error-message"></slot>
                </template>
                <!-- @slot Slot for input text fields for entering text. -->
                <slot name="input-text-fields"></slot>
            </f-validation-form>
        </template>
        <template #footer>
            <div class="button-group">
                <button
                    v-for="button in preparedButtons"
                    :key="button.label"
                    :type="button.buttonType"
                    :class="button.classlist"
                    class="button-group__item"
                    :form="button.buttonType === 'submit' ? formId : undefined"
                    @click="button.buttonType === 'button' ? onCancel() : false"
                >
                    <span>{{ button.label }}</span>
                    <span v-if="button.screenreader" class="sr-only">&nbsp;{{ button.screenreader }}</span>
                </button>
            </div>
        </template>
    </f-modal>
</template>
