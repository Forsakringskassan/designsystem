<script setup lang="ts">
import { type PropType, computed, useAttrs } from "vue";
import { FIcon } from "../FIcon";
import { useInflight } from "./use-inflight";

/* eslint-disable-next-line vue/define-props-declaration -- technical debt */
const props = defineProps({
    /**
     * Type of button, can be one of:
     * - `primary`
     * - `secondary`
     * - `tertiary`
     */
    variant: {
        type: String as PropType<"primary" | "secondary" | "tertiary">,
        default: "primary",
        validator(value: string) {
            return ["primary", "secondary", "tertiary"].includes(value);
        },
    },

    /**
     * Button size, can be one of:
     * - `small`
     * - `medium`
     * - `large`
     */
    size: {
        type: String as PropType<"small" | "medium" | "large">,
        default: "medium",
        validator(value: string) {
            return ["small", "medium", "large"].includes(value);
        },
    },

    /**
     * Name of an icon to display on the left side of the button.
     */
    iconLeft: {
        type: String,
        default: undefined,
    },

    /**
     * Name of an icon to display on the right side of the button.
     */
    iconRight: {
        type: String,
        default: undefined,
    },

    /**
     * Icon library to use.
     */
    iconLibrary: {
        type: String,
        required: false,
        default: "f",
    },

    /**
     * Tertiary button style, used in conjunction with button variant `tertiary`.
     * Can be one of:
     * - `standard`
     * - `black`
     * - `inverted`
     */
    tertiaryStyle: {
        type: String as PropType<"standard" | "black" | "inverted">,
        default: "standard",
        validator(value: string) {
            return ["standard", "black", "inverted"].includes(value);
        },
    },

    /**
     * Align button text and icon with content above or below.
     * Used in conjunction with button variant `tertiary`.
     */
    alignText: {
        type: Boolean,
    },

    /**
     *
     * Enable full width on mobile for sizes `small` and `medium`, always active for button size `large`.
     */
    mobileFullWidth: {
        type: Boolean,
    },

    /**
     * The default behavior of the button. Possible values are:
     * - `submit`
     * - `reset`
     * - `button`
     */
    type: {
        type: String as PropType<"submit" | "reset" | "button">,
        default: "button",
        validator(value: string) {
            return ["submit", "reset", "button"].includes(value);
        },
    },

    /**
     * Disable the button.
     */
    disabled: {
        type: Boolean,
        required: false,
    },
});
defineOptions({
    inheritAttrs: false,
});
const originalAttrs = useAttrs();
const { inflight, fn: onClick } = useInflight(originalAttrs.onClick);
const attrs = { ...originalAttrs, onClick };

const hasIconLeft = computed((): boolean => {
    return Boolean(props.iconLeft);
});

const hasIconRight = computed((): boolean => {
    return Boolean(props.iconRight);
});

const hasIcon = computed((): boolean => {
    return hasIconLeft.value || hasIconRight.value;
});

const buttonClass = computed((): string[] => {
    const classes = ["button", `button--${props.variant}`, `button--${props.size}`];

    if (props.variant === "tertiary" && props.alignText) {
        classes.push(`button--align-text`);
    }

    if (props.variant === "tertiary") {
        classes.push(`button--tertiary--${props.tertiaryStyle}`);
    }

    if (props.variant === "tertiary" && !hasIcon.value) {
        classes.push(`button--tertiary--underline`);
    }

    if (props.mobileFullWidth && props.size !== "large") {
        classes.push(`button--full-width`);
    }

    if (inflight.value) {
        classes.push(`button__inflight`);
    }

    return classes;
});

const disabled = computed((): boolean => {
    return props.disabled || inflight.value;
});
</script>

<template>
    <button :type :class="buttonClass" :disabled v-bind="attrs">
        <template v-if="hasIconLeft">
            <f-icon v-if="inflight" name="circle-notch-solid" class="button__icon button__spinner"></f-icon>
            <f-icon
                v-else-if="props.iconLeft"
                class="button__icon"
                :name="props.iconLeft"
                :library="props.iconLibrary"
            ></f-icon>
        </template>
        <template v-if="!hasIcon">
            <span class="spinner--before">
                <f-icon v-if="inflight" name="circle-notch-solid" class="button__icon button__spinner"></f-icon>
            </span>
        </template>
        <!--
        @slot Slot for text to display in the button.
        -->
        <span><slot name="default"></slot></span>

        <template v-if="hasIconRight">
            <f-icon v-if="inflight" name="circle-notch-solid" class="button__icon button__spinner"></f-icon>
            <f-icon
                v-else-if="props.iconRight"
                class="button__icon"
                :name="props.iconRight"
                :library="props.iconLibrary"
            ></f-icon>
        </template>
        <template v-if="!hasIcon">
            <span class="spinner--after"></span>
        </template>
    </button>
</template>
