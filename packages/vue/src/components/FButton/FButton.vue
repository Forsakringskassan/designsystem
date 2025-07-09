<script setup lang="ts">
import { computed, defineProps, useAttrs, type PropType } from "vue";
import { FIcon } from "../FIcon";
import { useInflight } from "./use-inflight";

defineOptions({
    inheritAttrs: false,
});
const originalAttrs = useAttrs();
const { inflight, fn: onClick } = useInflight(originalAttrs.onClick);
const attrs = { ...originalAttrs, onClick };

const props = defineProps({
    /**
     * Type of button, can be either 'primary', 'secondary' or 'tertiary'.
     */
    type: {
        type: String as PropType<"primary" | "secondary" | "tertiary">,
        default: "primary",
        validator(value: string) {
            return ["primary", "secondary", "tertiary"].includes(value);
        },
    },

    /**
     * Button size, can be either 'small', 'medium' or 'large'.
     */
    size: {
        type: String as PropType<"small" | "medium" | "large">,
        default: "medium",
        validator(value: string) {
            return ["small", "medium", "large"].includes(value);
        },
    },

    /**
     * When set to an icon name an icon is displayed to the left of the button text.
     */
    iconLeft: {
        type: String,
        default: undefined,
    },

    /**
     * When set to an icon name an icon is displayed to the right of the button text.
     */
    iconRight: {
        type: String,
        default: undefined,
    },

    /**
     * Tertiarry button style, used in conjunction with button type 'tertiarry'.
     */
    tertiaryStyle: {
        type: String as PropType<"standard" | "black" | "inverted">,
        default: "standard",
        validator(value: string) {
            return ["standard", "black", "inverted"].includes(value);
        },
    },

    /**
     * Automatically set to full width when screen width is up to 639 pixels, always 'true' for button size 'large'.
     */
    mobileFullWidth: {
        type: Boolean,
        default: false,
    },
});

const hasIconLeft = computed((): boolean => {
    return !!props.iconLeft;
});

const hasIconRight = computed((): boolean => {
    return !!props.iconRight;
});

const hasIcon = computed((): boolean => {
    return hasIconLeft.value || hasIconRight.value;
});

const buttonClass = computed((): string => {
    let classes = `button button--${props.type} button--${props.size}`;

    if (props.type === "tertiary") {
        classes = `${classes} button--tertiary--${props.tertiaryStyle}`;
    }

    if (props.mobileFullWidth) {
        classes = `${classes} button--full-width`;
    }
    if (!hasIcon.value && !inflight.value) {
        classes = `${classes} button--no-icon`;
    }

    return classes;
});
</script>

<template>
    <button type="button" :class="buttonClass" :disabled="inflight" v-bind="attrs">
        <template v-if="hasIconLeft">
            <f-icon v-if="inflight" name="circle-notch-solid" class="button__icon button__inflight"></f-icon>
            <f-icon v-else-if="props.iconLeft" class="button__icon" :name="props.iconLeft"></f-icon>
        </template>

        <template v-if="!hasIcon">
            <f-icon v-if="inflight" name="circle-notch-solid" class="button__icon button__inflight"></f-icon>
        </template>

        <slot name="default"></slot>

        <template v-if="hasIconRight">
            <f-icon v-if="inflight" name="circle-notch-solid" class="button__icon button__inflight"></f-icon>
            <f-icon v-else-if="props.iconRight" class="button__icon" :name="props.iconRight"></f-icon>
        </template>
    </button>
</template>
