<script lang="ts">
import { defineComponent } from "vue";
import { type ValidityEvent, isSet, ElementIdService } from "@fkui/logic";
import { FLabel } from "../FLabel";
import { renderSlotText, dispatchComponentValidityEvent } from "../../utils";

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
         * @model
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
            default: false,
        },
        /**
         * Enabling vertical resizing of the textarea
         */
        resizable: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["input", "update:modelValue"],
    data() {
        return {
            validityMode: "INITIAL" as string,
            validationMessage: "" as string,
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
            return `${this.charactersLeftWarning.replace("%charactersLeft%", this.charactersLeft.toString())}`;
        },
        textareaClass(): string[] {
            const classes = ["textarea-field__textarea"];

            if (this.resizable) {
                classes.push("textarea-field__resize--vertical");
            } else {
                classes.push("textarea-field__resize--none");
            }

            return classes;
        },
    },
    mounted() {
        if (isSet(this.softLimit) && !isSet(this.maxlength)) {
            throw new Error("You must pass a maxlength");
        }
    },
    methods: {
        onInput(event: Event): void {
            if (event.target instanceof HTMLTextAreaElement) {
                /**
                 * V-model event.
                 * @event update:modelValue
                 * @type {string}
                 */
                this.$emit("update:modelValue", event.target.value);

                /**
                 * @event input
                 * @type {string}
                 */
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
            :id="id"
            :class="textareaClass"
            v-bind="attrs"
            :disabled="disabled"
            @input="onInput"
            @validity="onValidity"
            @pending-validity="onPendingValidity"
        ></textarea>
    </div>
</template>
