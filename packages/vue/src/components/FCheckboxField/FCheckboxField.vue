<script lang="ts">
import { defineComponent, toValue } from "vue";
import { type ValidityEvent, ElementIdService } from "@fkui/logic";
import isEqual from "lodash/isEqual";
import { dispatchComponentValidityEvent, getHTMLElementFromVueRef, hasSlot, renderSlotText } from "../../utils";
import { useFieldset } from "../FFieldset";

// ! Boolean must be last so that empty string ('') is not parsed as true, see: https://github.com/vuejs/vue/blob/81e1e47cabbd479e2a285f03120944f1efffe749/test/unit/features/options/props.spec.js#L516.
const anyType = [String, Object, Array, Number, Date, Boolean];

export default defineComponent({
    name: "FCheckboxField",
    inheritAttrs: false,
    props: {
        /**
         * Disables the checkbox.
         */
        disabled: {
            type: Boolean,
            required: false,
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
    emits: [
        /**
         * Emitted when the value of the checkbox changes.
         *
         * @type {anyType | anyType[]}
         */
        "change",
        /**
         * V-model event.
         * @type {anyType | anyType[]}
         */
        "update:modelValue",
    ],
    setup() {
        const { showDetails, getFieldsetLabelText } = useFieldset();
        return {
            showDetails,
            getFieldsetLabelText,
        };
    },
    data() {
        return {
            expanded: false,
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
            let checked;
            if (Array.isArray(this.modelValue)) {
                // `isEqual` since can't compare equality with a reactive (modelValue) object and non-reactive (this.value) object.
                checked = this.modelValue.findIndex((it) => isEqual(toValue(it), toValue(this.value))) >= 0;
            } else {
                checked = this.value === this.modelValue;
            }

            return {
                ...this.$attrs,
                value: this.value,
                checked,
                onChange: (event: Event) => {
                    if (event.target instanceof HTMLInputElement) {
                        this.emitVModelEvent(event);
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, nore sure whats going on here
        injected(): any {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, nore sure whats going on here
            return this as any;
        },
    },
    methods: {
        updateExpandedFlag(): void {
            const checkboxInput = getHTMLElementFromVueRef(this.$refs.checkboxInput) as HTMLInputElement;
            this.expanded = checkboxInput.checked;
        },
        emitVModelEvent(event: Event): void {
            let newModel;

            if (Array.isArray(this.modelValue)) {
                // `isEqual` since can't compare equality with a reactive (modelValue) object and non-reactive (this.value) object.
                newModel = [...this.modelValue].filter((it) => !isEqual(toValue(it), toValue(this.value)));

                // If nothing was filtered out (unchecked), then it was instead checked and the value should be pushed to model.
                if (this.modelValue.length <= newModel.length) {
                    newModel.push(this.value);
                }
            } else {
                if (this.value === this.modelValue) {
                    newModel = typeof this.value === "boolean" ? false : undefined;
                } else {
                    const target = event.target as HTMLInputElement;
                    newModel = target.value === "true" ? true : this.value;
                }
            }

            this.$emit("update:modelValue", newModel);
            this.$emit("change", newModel);
        },
        onKeydown(event: Event): void {
            // Fix SFKUI-2912: mark checkbox with space in IE11
            event.stopPropagation();
        },
        onValidity({ detail }: CustomEvent<ValidityEvent>): void {
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
            if (detail.target !== this.$el.querySelector("input")) {
                return;
            }

            let errorMessage = "";

            if (hasSlot(this, "default")) {
                /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
                const labelText = this.injected.getFieldsetLabelText() as string | undefined;
                const slotText = renderSlotText(this.$slots.default) ?? "";
                if (labelText) {
                    errorMessage = `${labelText} ${slotText}`;
                } else {
                    errorMessage = slotText;
                }
            }

            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment -- technical debt */
            const element = this.$el.querySelector(`#${detail.elementId}`);
            if (element) {
                /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
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
                this.height = parseInt(height, 10);
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
    <div class="checkbox" :class="disabledClass" @validity="onValidity">
        <input
            :id
            v-bind="attrs"
            ref="checkboxInput"
            type="checkbox"
            class="checkbox__input"
            :disabled
            @keydown.space="onKeydown"
            @change="updateExpandedFlag()"
        />
        <label :class="$slots.details ? 'checkbox__label checkbox__width' : 'checkbox__label'" :for="id">
            <!-- @slot Slot for label content. -->
            <slot name="default"></slot>
            <template v-if="$slots.details">
                <span v-if="showDetails === 'always'" class="checkbox__details">
                    <!-- @slot Slot for extended label, should only contain short text -->
                    <slot name="details"></slot>
                </span>
                <transition
                    v-if="showDetails === 'when-selected'"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                >
                    <span v-if="expanded" class="checkbox__details">
                        <!--
                        @slot Slot for details, should only contain short text
                        @binding {number} height The height of the expanded details content.
                        -->
                        <slot name="details" :height></slot>
                    </span>
                </transition>
            </template>
        </label>
    </div>
</template>
