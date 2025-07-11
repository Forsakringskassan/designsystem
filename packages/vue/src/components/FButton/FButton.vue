<script setup lang="ts">
import { computed, defineProps, type PropType } from "vue";
import { FIcon } from "../FIcon";

const props = defineProps({
    /**
     * Type of button, can be either 'primary', 'secondary' or 'tertiary'.
     */
    variant: {
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
     * Align button text and icon with content abow or below.
     */
    alignText: {
        type: Boolean,
        default: false,
    },

    /**
     * Sets margin to 0, used in conjunction with 'button-group'.
     */
    groupItem: {
        type: Boolean,
        default: false,
    },

    /**
     * Automatically set button to full width when screen width is 639 pixels or below, always active for button size 'large'.
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
    let classes = `button button--${props.variant} button--${props.size}`;

    if (props.groupItem) {
        classes = `${classes} button-group__item`;
    }

    if (props.variant === "tertiary" && props.alignText) {
        classes = `${classes} button--align-text`;
    }

    if (props.variant === "tertiary") {
        classes = `${classes} button--tertiary--${props.tertiaryStyle}`;
    }

    if (props.variant === "tertiary" && !hasIcon.value) {
        classes = `${classes} button--tertiary--underline`;
    }

    if (props.mobileFullWidth && props.size !== "large") {
        classes = `${classes} button--full-width`;
    }

    return classes;
});
</script>

<template>
    <button type="button" :class="buttonClass">
        <f-icon
            v-if="props.iconLeft"
            aria-hidden="true"
            focusable="false"
            class="button__icon"
            :name="props.iconLeft"
        ></f-icon>

        <!--
        @slot Slot for text to display in the button.
        -->
        <slot name="default"></slot>

        <f-icon
            v-if="props.iconRight"
            aria-hidden="true"
            focusable="false"
            class="button__icon"
            :name="props.iconRight"
        ></f-icon>
    </button>
</template>
