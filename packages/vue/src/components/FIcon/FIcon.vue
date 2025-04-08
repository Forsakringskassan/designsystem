<script lang="ts">
import { defineComponent, type PropType } from "vue";

const Flip = ["horizontal", "vertical"];
const Rotate = ["90", "180", "270"];

export default defineComponent({
    name: "FIcon",
    inheritAttrs: false,
    props: {
        /**
         * Icon name.
         */
        name: {
            type: String,
            required: true,
        },
        /**
         * fk-icon library
         */
        library: {
            type: String,
            required: false,
            default: "f",
        },
        /**
         * Flip icon horizontally or vertically.
         *
         * Must be set to one of:
         *
         * - `horizontal`
         * - `vertical`
         */
        flip: {
            type: String as PropType<string>,
            default: null,
            required: false,
            validator(value: string): boolean {
                return Flip.includes(value);
            },
        },
        /**
         * Rotate icon.
         *
         * Must be set to one of:
         *
         * - `90`
         * - `180`
         * - `270`
         */
        rotate: {
            type: String as PropType<string>,
            default: null,
            required: false,
            validator(value: string): boolean {
                return Rotate.includes(value);
            },
        },
    },
    computed: {
        spriteKey(): string {
            return `${this.library}-icon-${this.name}`;
        },
        spriteId(): string {
            return `#${this.spriteKey}`;
        },
        modifiers(): string[] {
            const classes = [];
            if (this.flip) {
                classes.push(`icon--flip-${this.flip}`);
            }
            if (this.rotate) {
                classes.push(`icon--rotate-${this.rotate}`);
            }
            return classes;
        },
        ariaHidden(): "true" | undefined {
            const slotUsed = Boolean(this.$slots.default);
            const ariaLabel = this.$attrs["aria-label"] !== undefined;
            const ariaLabelledby = this.$attrs["aria-labelledby"] !== undefined;
            const ariaDescription = this.$attrs["aria-description"] !== undefined;
            const ariaDescribedby = this.$attrs["aria-describedby"] !== undefined;
            const hasText = slotUsed || ariaLabel || ariaLabelledby || ariaDescription || ariaDescribedby;
            return hasText ? undefined : "true";
        },
    },
});
</script>

<template>
    <!-- [html-validate-disable-block fkui/prefer-ficon -- this is the FIcon component]-->
    <svg v-bind="$attrs" focusable="false" class="icon" :class="[spriteKey, ...modifiers]" :aria-hidden="ariaHidden">
        <slot></slot>
        <use :href="spriteId" />
    </svg>
</template>
