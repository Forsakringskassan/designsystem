<script lang="ts">
import { defineComponent } from "vue";
import { GAP, FLOAT } from "./constants";

export default defineComponent({
    name: "IFlex",
    inheritAttrs: true,

    props: {
        /**
         * Set gap (gutter) between items.
         *
         * Must be one of:
         *
         * - `"1x"`
         * - `"2x"`
         * - `"3x"`
         * - ...
         * - `"8x"`
         *
         * Example: a value of `"3x"` corresponds to a gap of `3 * 0.25 = 0.75rem`.
         */
        gap: {
            type: String,
            default: "",
            validator(val: string) {
                return val === "" || GAP.includes(val);
            },
        },
        /**
         * If set the IFlexItems will be fullwidth and
         * stacked on top of each other when breakpoint is small (aka mobile).
         */
        collapse: {
            type: Boolean,
            default: false,
        },
        /**
         * If set the IFlexItems will wrap when out of space
         */
        wrap: {
            type: Boolean,
            default: false,
        },
        /**
         * Set how IFlexItems should float.
         *
         * Must be one of:
         *
         * - `"left"`
         * - `"center"`
         * - `"right"`
         */
        float: {
            type: String,
            default: "",
            validator(val: string) {
                return val === "" || FLOAT.includes(val);
            },
        },
    },
    computed: {
        classList(): string[] {
            const classes: string[] = [];
            if (this.collapse) {
                classes.push("iflex--collapse");
            }
            if (this.gap) {
                classes.push(`iflex--gap-${this.gap}`);
            }
            if (this.wrap) {
                classes.push(`iflex--wrap`);
            }
            if (this.float) {
                classes.push(`iflex--float-${this.float}`);
            }

            return classes;
        },
    },
});
</script>

<template>
    <div class="iflex" :class="classList">
        <!-- @slot Slot for IFlexItem's -->
        <slot></slot>
    </div>
</template>
