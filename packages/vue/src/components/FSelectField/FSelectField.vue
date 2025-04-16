<script lang="ts">
import { defineComponent, inject } from "vue";
import { ElementIdService, type ValidityEvent } from "@fkui/logic";
import { FIcon } from "../FIcon";
import { FLabel } from "../FLabel";
import { renderSlotText, dispatchComponentValidityEvent } from "../../utils";
import { resolveWidthClass } from "./FSelectField.logic";

export default defineComponent({
    name: "FSelectField",
    components: { FIcon, FLabel },
    inheritAttrs: false,
    props: {
        /**
         * The id for the select id attribute.
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
            type: [String, Number, Object, Array, Boolean],
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
         * Set responsive width for select section that wraps select element and icons.
         *
         * ```
         * select-width="md-6 lg-3"
         * ```
         */
        selectWidth: {
            type: String,
            required: false,
            default: "sm-12",
        },
    },
    emits: ["change", "update:modelValue"],
    setup() {
        return {
            textFieldTableMode: inject("textFieldTableMode", false) as boolean,
        };
    },
    data() {
        return {
            validityMode: "INITIAL" as string,
            validationMessage: "" as string,
        };
    },
    computed: {
        attrs(): Record<string, unknown> {
            return {
                ...this.$attrs,
                // Disable change
                onChange: () => undefined,
            };
        },
        hasError(): boolean {
            return this.validityMode === "ERROR";
        },
        rootClass(): Record<string, boolean> {
            return {
                ["select-field--error"]: this.hasError,
                ["select-field--inline"]: this.inline,
                ["text-field--table"]: this.textFieldTableMode,
                ["select-field--table-error"]: this.textFieldTableMode && this.hasError,
            };
        },
        labelClass(): string {
            return this.textFieldTableMode ? "sr-only" : "";
        },
        labelWrapperClass(): string | undefined {
            return resolveWidthClass(this.labelWidth, this.inline);
        },
        selectWrapperClass(): string | undefined {
            return resolveWidthClass(this.selectWidth, this.inline);
        },
        vModel: {
            get() {
                return this.modelValue;
            },
            set(value: unknown) {
                /**
                 * V-model event.
                 * @event update:modelValue
                 * @type {string}
                 */
                this.$emit("update:modelValue", value);

                /**
                 * Emitted when the value of the dropdown changes.
                 *
                 * @event change
                 * @type {string}
                 */
                this.$emit("change", value);
            },
        },
    },
    methods: {
        async onValidity({ detail }: CustomEvent<ValidityEvent>): Promise<void> {
            this.validationMessage = detail.validationMessage;
            this.validityMode = detail.validityMode;

            await this.$nextTick();

            const errorMessage = renderSlotText(this.$slots.label) ?? "";

            const element = this.$el.querySelector(`#${detail.elementId}`);
            if (element) {
                dispatchComponentValidityEvent(element, {
                    ...detail,
                    errorMessage,
                    focusElementId: detail.elementId,
                });
            }
        },
    },
});
</script>

<template>
    <div class="select-field" :class="rootClass" @validity="onValidity">
        <div :class="labelWrapperClass">
            <f-label :for="id" :class="labelClass">
                <template #default>
                    <!-- @slot Slot for label content. -->
                    <slot name="label"></slot>
                </template>

                <template v-if="$slots.tooltip" #tooltip>
                    <!-- @slot Slot for tooltip. -->
                    <slot name="tooltip"></slot>
                </template>

                <template #description="{ descriptionClass, formatDescriptionClass }">
                    <!--
                    @slot Optional slot for description. See {@link FLabel} for details.
                    @binding {string[]} description-class CSS classes for primary description content.
                    @binding {string[]} format-description-class CSS classes for format description.
                -->
                    <slot name="description" :description-class :format-description-class></slot>
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
        <div class="select-field__icon-wrapper" :class="selectWrapperClass">
            <select :id="id" v-model="vModel" class="select-field__select" v-bind="attrs">
                <slot></slot>
            </select>
            <f-icon
                v-if="hasError && textFieldTableMode"
                ref="icon"
                class="text-field__icon input-icon select-field__error-popup-icon"
                name="error"
            ></f-icon>
            <f-icon class="select-field__icon" name="arrow-down"></f-icon>
        </div>
    </div>
</template>
