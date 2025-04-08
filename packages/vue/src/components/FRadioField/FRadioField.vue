<script lang="ts">
import { defineComponent } from "vue";
import { ElementIdService, type ValidityEvent } from "@fkui/logic";
import { useFieldset } from "../FFieldset";
import { renderSlotText, dispatchComponentValidityEvent, hasSlot, getHTMLElementFromVueRef } from "../../utils";

// ! Boolean must be last so that empty string ('') is not parsed as true, see: https://github.com/vuejs/vue/blob/81e1e47cabbd479e2a285f03120944f1efffe749/test/unit/features/options/props.spec.js#L516.
const anyType = [String, Object, Array, Number, Date, Boolean];

export default defineComponent({
    name: "FRadioField",

    inheritAttrs: false,
    props: {
        /**
         * Set to `true`, empty string `""` or string `"disabled"` to disable this input field.
         */
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
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
         * The value for the input checked attribute.
         * @model
         */
        // ? The rule is disabled so that the `checked` prop can be undefined or null.
        /* eslint-disable-next-line vue/require-default-prop -- technical debt,
        /* it should contain a default value of undefined and proptype should
        /* include undefined (see comment on line above) */
        modelValue: {
            type: anyType,
            required: false,
        },
        /**
         * The value for the input.
         */
        value: {
            type: anyType,
            required: true,
        },
    },
    emits: ["change", "update:modelValue"],
    setup() {
        const { sharedName, showDetails, getFieldsetLabelText } = useFieldset();
        return { sharedName, showDetails, getFieldsetLabelText };
    },
    data() {
        return {
            height: 0,
            initialStyle: {
                overflow: "hidden",
                transition: "height 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96)",
            },
            hiddenStyle: {
                height: "auto",
                position: "absolute",
                visibility: "hidden",
            },
            visibleStyle: {
                width: "",
                position: "",
                visibility: "",
                height: "0px",
            },
            openedStyle: {
                height: "auto",
            },
        };
    },
    computed: {
        attrs(): Record<string, unknown> {
            return {
                ...this.$attrs,
                value: this.value,
                checked: this.value === this.modelValue,
                name: this.sharedName ?? this.$attrs.name,
                onChange: (event: Event) => {
                    if (event.target instanceof HTMLInputElement) {
                        /**
                         * V-model event.
                         * @event update:modelValue
                         * @type {anyType}
                         */
                        this.$emit("update:modelValue", this.value);

                        /**
                         * Emitted when the value of the radiobutton changes.
                         *
                         * @event change
                         * @type {anyType}
                         */
                        this.$emit("change", this.value);
                    }
                },
                onInput: (event: Event) => {
                    // ? Force focus on Mac + Safari
                    (event.target as HTMLInputElement).focus();
                },
            };
        },
        disabledClass(): string {
            return this.disabled ? "disabled" : "";
        },
    },
    methods: {
        async onValidity({ detail }: CustomEvent<ValidityEvent>): Promise<void> {
            if (detail.target !== this.$el.querySelector("input")) {
                return;
            }

            await this.$nextTick();

            let errorMessage = "";

            if (hasSlot(this, "default")) {
                const labelText = this.getFieldsetLabelText();
                if (labelText) {
                    errorMessage = `${labelText} ${renderSlotText(this.$slots.default)}`;
                } else {
                    errorMessage = `${renderSlotText(this.$slots.default)}`;
                }
            }

            const element = this.$el.querySelector(`#${detail.elementId}`);
            if (element) {
                dispatchComponentValidityEvent(element, {
                    ...detail,
                    errorMessage,
                    focusElementId: detail.elementId,
                });
            }
        },
        enter(element: Element): void {
            const htmlElement = getHTMLElementFromVueRef(element);
            const computedStyle = getComputedStyle(element);
            Object.assign(htmlElement.style, this.initialStyle);
            Object.assign(htmlElement.style, this.hiddenStyle);
            htmlElement.style.width = computedStyle.width;
            const height = computedStyle.height;
            Object.assign(htmlElement.style, this.visibleStyle);
            // Force redraw
            /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- technical debt, there should be a better way */
            getComputedStyle(element).height;
            setTimeout(() => {
                this.height = parseInt(height as string, 10);
                htmlElement.style.height = height;
            });
        },
        afterEnter(element: Element): void {
            const htmlElement = getHTMLElementFromVueRef(element);
            Object.assign(htmlElement.style, this.openedStyle);
        },
        leave(element: Element): void {
            const htmlElement = getHTMLElementFromVueRef(element);
            const height = getComputedStyle(element).height;
            htmlElement.style.height = height;

            // Force redraw
            /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- technical debt, there should be a better way */
            getComputedStyle(element).height;
            setTimeout(() => {
                Object.assign(htmlElement.style, this.visibleStyle);
            });
        },
    },
});
</script>

<template>
    <div class="radio-button" :class="disabledClass" @validity="onValidity">
        <input :id="id" type="radio" class="radio-button__input" :disabled="disabled" v-bind="attrs" />

        <label :class="$slots.details ? 'radio-button__label radio-button__width' : 'radio-button__label'" :for="id">
            <!-- @slot Slot for label content. -->
            <slot></slot>
            <template v-if="$slots.details">
                <span v-if="showDetails === 'always'" class="radio-button__details">
                    <br />
                    <!-- @slot Slot for details, should only contain short text -->
                    <slot name="details"></slot>
                </span>
                <transition
                    v-if="showDetails === 'when-selected'"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                >
                    <span v-if="value === modelValue" class="radio-button__details">
                        <br />
                        <!-- @slot Slot for details, should only contain short text-->
                        <slot name="details" :height="height"></slot>
                    </span>
                </transition>
            </template>
        </label>
    </div>
</template>
