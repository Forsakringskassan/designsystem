<script setup lang="ts">
import { computed, defineProps, type PropType } from "vue";
import { FIcon } from "../FIcon";

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
        default: false,
    },

    /**
     *
     * Enable full width on mobile for sizes `small` and `medium`, always active for button size `large`.
     */
    mobileFullWidth: {
        type: Boolean,
        default: false,
    },
});

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
    //let classes = `button button--${props.variant} button--${props.size}`;
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

    return classes;
});
</script>

<template>
    <button type="button" :class="buttonClass">
        <f-icon v-if="props.iconLeft" class="button__icon" :name="props.iconLeft"></f-icon>

        <!--
        @slot Slot for text to display in the button.
        -->
        <slot name="default"></slot>

        <f-icon v-if="props.iconRight" class="button__icon" :name="props.iconRight"></f-icon>
    </button>
</template>
