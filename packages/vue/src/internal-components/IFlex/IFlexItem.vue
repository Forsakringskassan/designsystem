<script lang="ts">
import { defineComponent } from "vue";
import { ALIGNMENT } from "./constants";

export default defineComponent({
    name: "IFlexItem",
    inheritAttrs: true,

    props: {
        /**
         * If set this item will grow to its largest possible size.
         */
        grow: {
            type: Boolean,
            default: false,
        },
        /**
         * If set this item will shrink to its smallest possible size.
         */
        shrink: {
            type: Boolean,
            default: false,
        },
        /**
         * Vertical positioning of content.
         *
         * Must be one of:
         *
         * - `"top"`
         * - `"center"`
         * - `"bottom"`
         */
        align: {
            type: String,
            default: "top",
            validator(val: string) {
                return ALIGNMENT.includes(val);
            },
        },
    },
    computed: {
        classList(): string[] {
            const classList = [`iflex--align-${this.align}`];
            if (this.grow) {
                classList.push("iflex--grow");
            } else if (this.shrink) {
                classList.push("iflex--shrink");
            }
            return classList;
        },
    },
});
</script>

<template>
    <div class="iflex__item" :class="classList">
        <!-- @slot Content -->
        <slot></slot>
    </div>
</template>
