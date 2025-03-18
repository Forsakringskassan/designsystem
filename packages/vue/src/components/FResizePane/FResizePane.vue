<script setup lang="ts">
import { computed, defineCustomElement, onMounted, provide, ref, useTemplateRef, watchEffect } from "vue";
import FResizePane from "./FResizePane.ce.vue";

const tagName = "ce-resize-pane";
if (!customElements.get(tagName)) {
    customElements.define(tagName, defineCustomElement(FResizePane));
}

const element = useTemplateRef("element");
const content = useTemplateRef("content");
const refCount = ref(0);

provide("resize", {
    ref() {
        setTimeout(() => {
            refCount.value = content.value?.childElementCount ?? 0;
        }, 0);
    },
    unref() {
        setTimeout(() => {
            refCount.value = content.value?.childElementCount ?? 0;
        }, 0);
    },
});

watchEffect(() => {
    console.log('refcount', refCount.value);
})

onMounted(() => {
    console.log("element", element.value);
});

const disabled = computed(() => refCount.value === 0);

const props = withDefaults(
    defineProps<{
        /**
         * Disables resizing. The current size is locked.
         */
        //disabled?: boolean;
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

function onFoobar() {
    console.log('onFoobar', content.value?.childElementCount);
    refCount.value = content.value?.childElementCount ?? 0;
}
</script>

<template>
    <component :is="tagName" ref="element" :disabled v-bind="props">
        <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
        <!-- [html-validate-disable vue/prefer-slot-shorthand -- native slot] -->
        <div slot="content" ref="content" @foobar="onFoobar">
            <!-- @slot Pane content -->
            <slot name="default"></slot>
        </div>
    </component>
</template>

<style scoped>
[slot="content"] {
    display: contents;
}
</style>
