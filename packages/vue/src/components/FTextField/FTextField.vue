<template>
    <div class="text-field" :class="rootClass">
        <div :class="labelWrapperClass">
            <f-label :for="id" :class="labelClass">
                <template #default>
                    <!-- @slot Slot for label content. -->
                    <slot name="default">
                        <span v-if="defaultText !== ''">{{ defaultText }}</span>
                    </slot>
                </template>

                <template v-if="$slots.tooltip" #tooltip>
                    <!-- @slot Slot for tooltip. -->
                    <slot name="tooltip"></slot>
                </template>

                <template #description="{ descriptionClass, discreteDescriptionClass }">
                    <!--
                    @slot Optional slot for description. See [FLabel](#/Components/FLabel) for details.
                    @binding {string[]} descriptionClass CSS classes for primary description content.
                    @binding {string[]} discreteDescriptionClass CSS classes for format description.
                -->
                    <slot name="description" v-bind="{ descriptionClass, discreteDescriptionClass }">
                        <span v-if="descriptionText" :class="descriptionClass">
                            <span v-if="descriptionScreenReaderText" class="sr-only">{{
                                descriptionScreenReaderText
                            }}</span>
                            <span>{{ descriptionText }}</span>
                        </span>
                        <span v-if="discreteDescriptionText" :class="discreteDescriptionClass">
                            <span v-if="discreteDescriptionScreenReaderText" class="sr-only">{{
                                discreteDescriptionScreenReaderText
                            }}</span>
                            <span>{{ discreteDescriptionText }}</span>
                        </span>
                    </slot>
                </template>

                <template #error-message>
                    <!--
                    @slot Slot for displaying single or several error messages.
                    @binding {boolean} hasError Set to true when a validation error is present
                    @binding {string} validationMessage Descriptive validation error message for current error
                -->
                    <slot name="error-message" v-bind="{ hasError, validationMessage }">
                        <template v-if="hasError">{{ validationMessage }}</template>
                    </slot>
                </template>
            </f-label>
        </div>

        <div class="text-field__input-wrapper" :class="inputWrapperClass">
            <!-- @slot Slot for adding content to the left of the input element. -->
            <slot name="input-left" />

            <div class="text-field__icon-wrapper">
                <input
                    :id="id"
                    ref="input"
                    v-model="viewValue"
                    :type="type"
                    class="text-field__input"
                    v-bind="$attrs"
                    @blur="onBlur"
                    @focus="onFocus"
                    @change="onChange"
                    @validity="onValidity"
                    @pending-validity="onPendingValidity"
                />
                <f-icon
                    v-if="hasError && textFieldTableMode"
                    class="text-field__icon input-icon text-field__append-inner text-field__error-popup-icon"
                    name="error"
                ></f-icon>
                <i-popup-error
                    v-if="textFieldTableMode"
                    :anchor="inputRef"
                    :is-open="showPopupError"
                    :error-message="validationMessage"
                    @close="closePopupError"
                ></i-popup-error>
                <div v-if="$slots['append-inner']" class="text-field__append-inner">
                    <!-- @slot Slot for add content inside the input to the right -->
                    <slot name="append-inner"></slot>
                </div>
            </div>

            <!-- @slot Slot for adding content to the right of the input element. -->
            <slot name="input-right" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, type PropType, useTemplateRef } from "vue";
import { ElementIdService, isSet, type ValidityEvent } from "@fkui/logic";
import { FLabel } from "../FLabel";
import { FIcon } from "../FIcon";
import { IPopupError } from "../../internal-components/IPopupError";
import { dispatchComponentValidityEvent, renderSlotText } from "../../utils";
import { resolveWidthClass } from "./FTextField.logic";
import { FormatFunction, ParseFunction } from "./index";

export default defineComponent({
    name: "FTextField",
    components: { FLabel, FIcon, IPopupError },
    inheritAttrs: false,
    props: {
        /**
         * The id for the input id attribute.
         * The id for the label for attribute.
         * If the prop is not set a random value will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        /**
         * Show the component inline.
         */
        inline: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * The value for the input.
         * If the prop is not set undefined will be used.
         * @model
         */
        modelValue: {
            type: [String, Number],
            required: false,
            default: "",
        },
        /**
         * The type used for the input.
         * If the prop is not set text will be used.
         */
        type: {
            type: String,
            required: false,
            default: "text",
        },
        /**
         * - The `formatter` function must only be used on a component that uses validation.
         * - The `formatter` function acts differently depending on if the `parser` function is defined or not.
         *
         * | formatter without parser | formatter with parser |
         * | ----- | -----|
         * | modelvalue = parsed viewvalue using formatter function | modelvalue = parsed viewvalue using parser function |
         * | viewvalue = modelvalue (where modelvalue is already parsed) | viewvalue = formatted modelvalue using formatter function (where modelvalue is already parsed) |
         */
        formatter: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- We cannot know which type is used.
            type: Function as PropType<FormatFunction<any>>,
            required: false,
            default: undefined,
        },
        /**
         * - The `parser` function must only be used on a component that uses validation.
         * - The `parser` function acts differently depending on if the `formatter` function is defined or not.
         *   - For parser combined with formatter, refer to formatter prop doc.
         *
         * | parser without formatter |
         * | ----- |
         * | modelvalue = parsed viewvalue using parser function |
         * | viewvalue = never updated except when modelvalue differs from parsed viewvalue |
         */
        parser: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- We cannot know which type is used.
            type: Function as PropType<ParseFunction<any>>,
            required: false,
            default: undefined,
        },
        /**
         * Set responsive width for label section.
         *
         * ```
         * label-width="md-9 lg-6"
         * ```
         */
        labelWidth: {
            type: String,
            required: false,
            default: "sm-12",
        },
        /**
         * Set responsive width for input section that wraps input element and icons.
         *
         * ```
         * input-width="md-6 lg-3"
         * ```
         */
        inputWidth: {
            type: String,
            required: false,
            default: "sm-12",
        },
    },
    emits: ["blur", "change", "update", "update:modelValue"],
    setup() {
        return {
            inputRef: useTemplateRef<HTMLInputElement>("input"),
            textFieldTableMode: inject("textFieldTableMode", false) as boolean,
        };
    },
    data() {
        return {
            showErrorPopup: false,
            viewValue: "" as string,
            lastModelValue: "" as unknown,
            validationMessage: "" as string,
            validityMode: "INITIAL" as string,

            // internal default texts possible to override when extending component
            defaultText: "",
            descriptionText: "",
            descriptionScreenReaderText: "",
            discreteDescriptionText: "",
            discreteDescriptionScreenReaderText: "",
        };
    },
    computed: {
        showPopupError(): boolean {
            return this.textFieldTableMode && this.hasError && this.showErrorPopup;
        },
        labelClass(): string {
            return this.textFieldTableMode ? "sr-only" : "";
        },
        isValid(): boolean {
            return this.validityMode === "VALID";
        },
        hasError(): boolean {
            return this.validityMode === "ERROR";
        },
        rootClass(): Record<string, boolean> {
            return {
                "text-field--error": this.hasError,
                "text-field--inline": this.inline,
                "text-field--table": this.textFieldTableMode,
            };
        },
        labelWrapperClass(): string | undefined {
            return resolveWidthClass(this.labelWidth, this.inline);
        },
        inputWrapperClass(): string | undefined {
            return resolveWidthClass(this.inputWidth, this.inline);
        },
        isModelUpdatedProgrammatically(): boolean {
            return this.lastModelValue !== this.modelValue;
        },
    },
    watch: {
        modelValue: {
            immediate: true,
            handler: function () {
                if (this.modelValue === undefined || this.modelValue === null) {
                    this.viewValue = "";
                    return;
                }

                if (!this.isModelUpdatedProgrammatically) {
                    return;
                }

                this.setViewValueToFormattedValueOrFallbackToValue();
                this.lastModelValue = this.modelValue;
            },
        },
    },
    methods: {
        closePopupError() {
            this.showErrorPopup = false;
        },
        async onChange(): Promise<void> {
            // trigger v-model update when not handled by onValidity event
            if (!this.inputRef?.hasAttribute("data-validation")) {
                /* V-model event.
                 * @event update:modelValue
                 * @type {string}
                 */
                this.$emit("update:modelValue", this.viewValue);

                /* Vue2 v-model event.
                 * @deprecated
                 * @event update
                 * @type {string}
                 */
                this.$emit("update", this.viewValue);

                await this.$nextTick(); // wait for model update before triggering change event
                /**
                 * @event change
                 * @type {string}
                 */
                this.$emit("change", this.viewValue);
            }
        },
        onFocus() {
            this.showErrorPopup = true;
        },
        async onBlur(): Promise<void> {
            this.showErrorPopup = false;
            // blur event can be triggered when unmounted, check ref existance
            if (!this.inputRef) {
                return;
            }

            // trigger v-model update when not handled by onValidity event
            if (!this.inputRef.hasAttribute("data-validation")) {
                this.$emit("update:modelValue", this.viewValue);
                this.$emit("update", this.viewValue);
                await this.$nextTick(); // wait for model update before triggering blur event
                /**
                 * @event blur
                 * @type {string}
                 */
                this.$emit("blur", this.viewValue);
            }
        },
        async onValidity({ detail }: CustomEvent<ValidityEvent>): Promise<void> {
            this.validationMessage = detail.validationMessage;
            this.validityMode = detail.validityMode;

            if (detail.nativeEvent === "change" || detail.nativeEvent === "blur") {
                let newModelValue;
                if (detail.isValid) {
                    newModelValue = this.resolveNewModelValue(this.viewValue);
                } else {
                    newModelValue = this.viewValue;
                }
                this.lastModelValue = newModelValue;

                this.$emit("update:modelValue", newModelValue);
                this.$emit("update", newModelValue);
                await this.$nextTick(); // wait for model update before triggering change, blur event

                this.$emit(detail.nativeEvent, newModelValue);
                if (detail.isValid) {
                    this.syncViewValueAfterModelUpdate(newModelValue);
                }
            }

            this.triggerComponentValidityEvent(detail);
        },
        onPendingValidity(): void {
            this.validityMode = "INITIAL";
        },
        resolveNewModelValue(viewValue: string): unknown {
            const trimmedViewValue = viewValue.trim();

            if (trimmedViewValue === "") {
                return "";
            } else if (isSet(this.parser)) {
                return this.parser(trimmedViewValue) ?? trimmedViewValue;
            } else if (isSet(this.formatter)) {
                return this.formatter(trimmedViewValue) ?? trimmedViewValue;
            } else {
                return trimmedViewValue;
            }
        },
        syncViewValueAfterModelUpdate(newModelValue: unknown): void | never {
            if (newModelValue === "") {
                this.viewValue = "";
            } else if (isSet(this.parser)) {
                if (isSet(this.formatter)) {
                    this.viewValue = String(this.formatter(newModelValue) || this.viewValue);
                }
            } else {
                this.viewValue = String(newModelValue);
            }
        },
        triggerComponentValidityEvent(validityEvent: ValidityEvent) {
            const errorMessage = renderSlotText(this.$slots.default, {}, { stripClasses: [] }) ?? this.defaultText;
            const element = this.$el.querySelector(`#${validityEvent.elementId}`);
            if (element) {
                dispatchComponentValidityEvent(element, {
                    ...validityEvent,
                    errorMessage,
                    focusElementId: validityEvent.elementId,
                });
            }
        },

        setViewValueToFormattedValueOrFallbackToValue(): void {
            if (!isSet(this.formatter)) {
                this.viewValue = String(this.modelValue);
                return;
            }

            /**
             * A formatter function expects a proper parsed value as input.
             * If the modelvalue is a `string` type, it can be both valid or invalid.
             * Otherwise it is expected to be a type understood by the formatter, i.e. `number`.
             */
            const parsedValue =
                isSet(this.parser) && typeof this.modelValue === "string"
                    ? this.parser(this.modelValue)
                    : this.modelValue;

            const formattedValue = isSet(parsedValue) ? this.formatter(parsedValue) : undefined;
            this.viewValue = isSet(formattedValue) ? formattedValue : String(this.modelValue);
        },
    },
});
</script>
