<template>
    <fieldset :id="id" class="fieldset" :class="classes" @validity="onValidity">
        <legend :key="legendKey" class="label" :class="legendClass">
            <!-- @slot Slot for label content. This slot is required. -->
            <slot name="label"></slot>

            <span v-if="hasCheckbox && children.length > 1" class="sr-only">
                <span>{{ numberOfCheckboxesScreenReaderText }}</span>
            </span>
            <!--
                @slot Optional slot for description. See [FLabel](#/Components/FLabel) for details.
                @binding {string[]} descriptionClass CSS classes for primary description content.
                @binding {string[]} discreteDescriptionClass CSS classes for format description.
            -->
            <slot name="description" v-bind="{ descriptionClass, discreteDescriptionClass }"></slot>

            <!--
                @slot Slot for displaying single or several error messages.
                @binding {boolean} hasError Set to true when a validation error is present
                @binding {string} valididationMessage Descriptive validation error message for current error
            -->
            <slot name="error-message" v-bind="{ hasError, validationMessage: validity.validationMessage }">
                <template v-if="hasError">
                    <span class="label__message label__message--error">
                        <f-icon class="label__icon--left" name="error"></f-icon>
                        {{ validity.validationMessage }}
                    </span>
                </template>
            </slot>
        </legend>

        <span v-if="hasCheckbox" data-test="checked-boxes" class="sr-only" aria-live="polite">
            <span v-if="children.length === 1">{{ checkboxCheckedScreenReaderText }}</span>
            <span v-else>{{ numberOfCheckedCheckboxesScreenText }}</span>
        </span>

        <template v-if="hasTooltipSlot">
            <div class="sr-separator">
                <div class="tooltip-before" aria-hidden="true">
                    <div class="label tooltip-before__label">
                        <slot name="label"></slot>
                    </div>
                </div>

                <!-- @slot Slot for tooltip. -->
                <slot name="tooltip"></slot>
            </div>
            <div
                v-if="hasDescriptionSlot || hasErrorMessageSlot || hasError"
                class="label"
                aria-hidden="true"
                :class="groupLabelClass"
            >
                <!--
                    @slot Optional slot for description. See [FLabel](#/Components/FLabel) for details.
                    @binding {string[]} descriptionClass CSS classes for primary description content.
                    @binding {string[]} discreteDescriptionClass CSS classes for format description.
                -->
                <slot name="description" v-bind="{ descriptionClass, discreteDescriptionClass }"></slot>

                <slot name="error-message" v-bind="{ hasError, validationMessage: validity.validationMessage }">
                    <template v-if="hasError">
                        <span class="label__message label__message--error">
                            <f-icon class="label__icon--left" name="error"></f-icon>
                            {{ validity.validationMessage }}
                        </span>
                    </template>
                </slot>
            </div>
        </template>

        <div :class="groupContentClass">
            <!-- @slot Slot for fieldset content. -->
            <slot name="default"></slot>
        </div>
    </fieldset>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElementIdService, type ValidityEvent, debounce } from "@fkui/logic";
import { renderSlotText, dispatchComponentValidityEvent, hasSlot } from "../../utils";
import { ComponentValidityEvent } from "../../types";
import { FIcon } from "../FIcon";
import { TranslationMixin } from "../../plugins";
import { getFieldsetLabelText } from "./FFieldsetProvide";
import { labelClasses } from "./label-classes";
import { contentClasses } from "./content-classes";

export default defineComponent({
    name: "FFieldset",
    components: {
        FIcon,
    },
    mixins: [TranslationMixin],
    provide() {
        return {
            [getFieldsetLabelText]: () => {
                return renderSlotText(this.$slots.label);
            },
            sharedName: this.name,
            showDetails: this.showDetails,
        };
    },
    props: {
        /**
         * The id for the fieldset id attribute.
         * If the prop is not set a random value will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        /**
         * Name provided to child content as `sharedName` for optional usage (it will not be set on the fieldset element).
         * For radio inputs this is a shortcut to specify the shared name attribute at one place,
         * instead of repeatedly setting the name attribute on each radio input.
         */
        name: {
            type: String,
            required: false,
            default: undefined,
        },
        /**
         * The CSS classes for the label, description and error-message slot.
         */
        labelClass: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * The CSS classes for the default slot.
         */
        contentClass: {
            type: String,
            required: false,
            default: "",
        },
        /**
         * Aligns underlying items horizontally.
         * Supported by radiobuttons and chip layout.
         */
        horizontal: {
            type: Boolean,
            required: false,
        },
        /**
         * Displays radio and checkbox content with chip layout.
         */
        chip: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Displays a box with border around radiobuttons and checkboxes.
         */
        border: {
            type: Boolean,
            required: false,
        },
        /**
         * Sets visibility behaviour for details slot in selectable child items. By default details slot is not rendered.
         *
         * * `never` (default) - Never show item details.
         * - `when-selected` - Show item details when selected.
         * - `always` - Always show item details.
         */
        showDetails: {
            type: String,
            default: "never",
            validator(value: string) {
                return ["never", "when-selected", "always"].includes(value);
            },
        },
    },
    data() {
        return {
            validity: {
                validityMode: "INITIAL",
            } as ValidityEvent,
            descriptionClass: ["label__description"],
            discreteDescriptionClass: ["label__description", "label__description--discrete"],
            validityElement: null as HTMLElement | null,
            dispatchObject: {} as unknown as ComponentValidityEvent,
            detail: {} as unknown as ValidityEvent,
            hasDocumentListener: false,
            legendKey: 1,
            oldMessage: "",
            children: new Array<HTMLInputElement>(),
            hasCheckbox: false,
            hasRadiobutton: false,
        };
    },
    computed: {
        hasError(): boolean {
            return this.validity.validityMode === "ERROR";
        },
        hasErrorMessageSlot() {
            return hasSlot(this, "error-message");
        },
        hasTooltipSlot(): boolean {
            // return hasSlot(this, "tooltip");
            return Boolean(this.$slots.tooltip);
        },
        hasDescriptionSlot(): boolean {
            return hasSlot(this, "description");
        },
        legendClass(): string[] {
            // If the tooltip is provided we should avoid adding label class to the top legend element.
            return this.hasTooltipSlot ? ["sr-only"] : this.groupLabelClass;
        },
        groupLabelClass(): string[] {
            return Array.from(labelClasses(this));
        },
        groupContentClass(): string[] {
            return Array.from(contentClasses(this));
        },
        classes(): Record<string, boolean> {
            const { hasRadiobutton, hasCheckbox, horizontal, chip, border } = this;
            return {
                "radio-button-group": hasRadiobutton,
                "radio-button-group--chip": chip && hasRadiobutton,
                "radio-button-group--horizontal": horizontal && hasRadiobutton,
                "radio-button-group--border": border && hasRadiobutton,
                "checkbox-group": hasCheckbox,
                "checkbox-group--chip": chip && hasCheckbox,
                "checkbox-group--horizontal": horizontal && hasCheckbox,
                "checkbox-group--border": border && hasCheckbox,
            };
        },
        checkedChildren(): HTMLInputElement[] {
            return this.children.filter((child) => child.checked);
        },
        debouncedUpdateChildren(): () => void {
            return debounce(this.updateCheckboxChildren.bind(this), 150);
        },
        checkboxCheckedScreenReaderText(): string {
            return this.checkedChildren.length === 1
                ? this.$t("fkui.checkbox-group.checkbox.checked", "Kryssruta kryssad")
                : this.$t("fkui.checkbox-group.checkbox.not.checked", "Kryssruta ej kryssad");
        },
        numberOfCheckboxesScreenReaderText(): string {
            return this.$t("fkui.checkbox-group.count", "Grupp med {{ count }} kryssrutor", {
                count: String(this.children.length),
            });
        },
        numberOfCheckedCheckboxesScreenText(): string {
            return this.$t("fkui.checkbox-group.checked", "{{ checked }} kryssad av {{ count }}", {
                checked: String(this.checkedChildren.length),
                count: String(this.children.length),
            });
        },
    },
    async mounted(): Promise<void> {
        await this.$nextTick();
        const types = Array.from(
            this.$el.querySelectorAll(`input[type="checkbox"], input[type="radio"]`),
            (it: HTMLInputElement) => it.getAttribute("type"),
        );
        this.hasCheckbox = types.includes("checkbox");
        this.hasRadiobutton = types.includes("radio");
        if (this.hasCheckbox) {
            this.updateCheckboxChildren();
        }
    },
    updated(): void {
        if (this.hasCheckbox) {
            this.debouncedUpdateChildren();
        }
    },
    methods: {
        async onValidity({ detail }: CustomEvent<ValidityEvent>): Promise<void> {
            if (detail.target !== this.$el) {
                return;
            }
            this.detail = detail;

            await this.$nextTick();

            const errorMessage = renderSlotText(this.$slots.label) ?? "";

            const firstFocusableElement = this.$el.querySelector(
                "input:not(disabled), select:not(disabled), textarea:not(disabled)",
            );
            const focusElementId = firstFocusableElement ? firstFocusableElement.id : this.id;

            this.validityElement = this.$el as HTMLElement;
            this.dispatchObject = {
                ...detail,
                errorMessage,
                focusElementId,
            };
            this.validity = this.detail;

            if (this.validityElement) {
                dispatchComponentValidityEvent(this.validityElement, this.dispatchObject);
            }

            const message = detail.validityMode === "INITIAL" ? "" : detail.validationMessage;

            if (message !== this.oldMessage) {
                this.forceLegendUpdate();
                this.oldMessage = message;
            }
        },
        /**
         * Workaround for NVDA-bug. Force re rendering of legend element due to NVDA not recognizing innerHTML changes.
         * NVDA has closed the bug as it is related to the browser (works in FF): https://github.com/nvaccess/nvda/issues/13162
         */
        forceLegendUpdate(): void {
            this.legendKey++;
        },
        async updateCheckboxChildren(): Promise<void> {
            await this.$nextTick();
            this.children = Array.from(this.$el.querySelectorAll('input[type="checkbox"]'));
        },
    },
});
</script>
