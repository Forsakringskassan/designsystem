<script setup lang="ts">
import { defineCustomElement } from "vue";
import FResizePane from "./FResizePane.ce.vue";

const tagName = "ce-resize-pane";
if (!customElements.get(tagName)) {
    customElements.define(tagName, defineCustomElement(FResizePane));
}

const props = withDefaults(
    defineProps<{
        /**
         * Disables resizing. The current size is locked.
         */
        disabled?: boolean;
        /**
         * Minimal size of pane.
         *
         * Can be set in `px`, `%`  (percent of application layout total size)
         * or both as a space-separated list, e.g. `200px 20%`.
         */
        min?: string;
        /**
         * Maximum size of pane.
         *
         * Can be set in `px`, `%`  (percent of application layout total size)
         * or both as a space-separated list, e.g. `600px 50%`.
         */
        max?: string;
        /**
         * Initial size of pane used when the pane is used for the first time.
         *
         * Can be set in `px` or `%` (percent of application layout total
         * size)
         */
        initial?: string;
    }>(),
    {
        disabled: false,
        min: "0",
        max: "100%",
        initial: "50%",
    },
);
</script>

<template>
    <component :is="tagName" v-bind="props">
        <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
        <!-- [html-validate-disable vue/prefer-slot-shorthand -- native slot] -->
        <div slot="content">
            <!-- @slot Pane content -->
            <slot name="default"></slot>
        </div>
    </component>
</template>
