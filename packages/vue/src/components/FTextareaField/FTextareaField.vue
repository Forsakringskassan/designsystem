<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { type ValidityEvent, ElementIdService, isSet } from "@fkui/logic";
import { dispatchComponentValidityEvent, renderSlotText } from "../../utils";
import { FLabel } from "../FLabel";

export default defineComponent({
    name: "FTextareaField",
    components: {
        FLabel,
    },
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
         * The value for the input.
         * If the prop is not set undefined will be used.
         */
        modelValue: {
            type: String,
            required: false,
            default: undefined,
        },
        /**
         * The number of characters for when the "characters left" warning should be shown.
         * A value of 100 means that when 100 or less characters is left the warning is shown.
         * If softLimit is used, then maxlength is required.
         * If the prop is not set undefined will be used, which means that no warning will be shown.
         */
        softLimit: {
            type: Number,
            required: false,
            default: undefined,
        },
        /**
         * The maximum amount of characters permitted in the textarea.
         * If the prop is not set undefined will be used, which means unlimited.
         */
        maxlength: {
            type: Number,
            required: false,
            default: undefined,
        },
        /**
         * The string that should be shown in the "characters left" warning.
         * Must contain the word %charactersLeft% which is used to interpolate the number of characters left into the warning string.
         * If the prop is not set "Antal tecken kvar: %charactersLeft%" will be used.
         */
        charactersLeftWarning: {
            type: String,
            required: false,
            default: "Antal tecken kvar: %charactersLeft%",
        },
        /**
         * Specifies that the component should be disabled, i.e. unusable.
         */
        disabled: {
            type: Boolean,
        },
        /**
         * Enabling vertical resizing of the textarea
         */
        resizable: {
            type: Boolean,
        },
        /**
         * Automatically adjust the textarea height to fit its content.
         */
        autoResize: {
            type: Boolean,
        },
        /**
         * Maximum number of visible rows when `autoResize` is enabled.
         * When the content exceeds this height the textarea will scroll.
         */
        maxRows: {
            type: Number,
            required: false,
            default: undefined,
            validator(value: number | undefined): boolean {
                return value === undefined || (Number.isInteger(value) && value >= 1);
            },
        },
    },
    emits: [
        /**
         * @type {string}
         */
        "input",
        /**
         * V-model event.
         * @type {string}
         */
        "update:modelValue",
    ],
    data() {
        return {
            validityMode: "INITIAL",
            validationMessage: "",
        };
    },
    computed: {
        attrs(): Record<string, unknown> {
            return {
                rows: 4,
                ...this.$attrs,
                value: this.modelValue,
                maxlength: this.maxlength,
            };
        },
        isValid(): boolean {
            return this.validityMode === "VALID";
        },
        hasError(): boolean {
            return this.validityMode === "ERROR";
        },
        validityClass(): Record<string, boolean> {
            return {
                ["textarea-field--error"]: this.hasError,
            };
        },
        charactersLeft(): number {
            if (this.modelValue) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- required when `softLimit`
                return this.maxlength! - this.modelValue.length;
            } else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- required when `softLimit`
                return this.maxlength!;
            }
        },
        showCharactersLeftWarning(): boolean {
            return (
                isSet(this.softLimit) &&
                isSet(this.modelValue) &&
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- required when `softLimit`
                this.modelValue.length >= this.maxlength! - this.softLimit
            );
        },
        charactersLeftWarningInterpolated(): string {
            return this.charactersLeftWarning.replace("%charactersLeft%", this.charactersLeft.toString());
        },
        textareaClass(): string[] {
            const classes = ["textarea-field__textarea"];

            if (this.autoResize) {
                classes.push("textarea-field__resize--auto");

                if (this.normalizedMaxRows) {
                    classes.push("textarea-field__resize--max-rows");
                }
            } else if (this.resizable) {
                classes.push("textarea-field__resize--vertical");
            } else {
                classes.push("textarea-field__resize--none");
            }

            return classes;
        },
        textareaRows(): number {
            const rows = Number(this.attrs.rows);

            return Number.isFinite(rows) && rows > 0 ? rows : 4;
        },
        normalizedMaxRows(): number | undefined {
            const { maxRows } = this;

            if (typeof maxRows !== "number" || !Number.isInteger(maxRows) || maxRows < 1) {
                return undefined;
            }

            return Math.max(maxRows, this.textareaRows);
        },
    },
    mounted() {
        if (isSet(this.softLimit) && !isSet(this.maxlength)) {
            throw new Error("You must pass a maxlength");
        }

        this.updateTextareaHeightVariables();
    },
    updated() {
        this.updateTextareaHeightVariables();
    },
    methods: {
        updateTextareaHeightVariables(): void {
            const textarea = this.$refs.textarea as HTMLTextAreaElement | undefined;

            if (!textarea) {
                return;
            }

            if (!this.autoResize) {
                textarea.style.removeProperty("--i-textarea-field-min-height");
                textarea.style.removeProperty("--i-textarea-field-max-height");
                return;
            }

            textarea.style.setProperty("--i-textarea-field-min-height", `${this.textareaRows}lh`);

            if (this.normalizedMaxRows) {
                textarea.style.setProperty("--i-textarea-field-max-height", `${this.normalizedMaxRows}lh`);
            } else {
                textarea.style.removeProperty("--i-textarea-field-max-height");
            }
        },
        onInput(event: Event): void {
            if (event.target instanceof HTMLTextAreaElement) {
                this.$emit("update:modelValue", event.target.value);
                this.$emit("input", event.target.value);
            }
        },
        onValidity({ detail }: CustomEvent<ValidityEvent>): void {
            this.validationMessage = detail.validationMessage;
            this.validityMode = detail.validityMode;
            const errorMessage = renderSlotText(this.$slots.default) ?? "";
            const element = this.$el.querySelector(`#${detail.elementId}`);
            if (element) {
                dispatchComponentValidityEvent(element, {
                    ...detail,
                    errorMessage,
                    focusElementId: detail.elementId,
                });
            }
        },
        onPendingValidity(): void {
            this.validityMode = "INITIAL";
        },
    },
});
</script>

<template>
    <div class="textarea-field" :class="validityClass">
        <f-label :for="id">
            <template #default>
                <!-- @slot Slot for label content. -->
                <slot name="default"></slot>
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

        <f-label v-if="softLimit" :for="id" aria-live="polite">
            <template #description="{ descriptionClass }">
                <span v-if="showCharactersLeftWarning" :class="descriptionClass">
                    {{ charactersLeftWarningInterpolated }}
                </span>
            </template>
        </f-label>
        <textarea
            :id
            ref="textarea"
            :class="textareaClass"
            v-bind="attrs"
            :disabled
            @input="onInput"
            @validity="onValidity"
            @pending-validity="onPendingValidity"
        ></textarea>
    </div>
</template>
