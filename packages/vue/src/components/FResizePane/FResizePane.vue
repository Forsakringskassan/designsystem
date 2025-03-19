<script setup lang="ts">
import { type Ref, computed, defineCustomElement, effectScope, provide, ref, useTemplateRef, watchEffect } from "vue";
import FResizePane from "./FResizePane.ce.vue";
import { injectionKey } from "./use-resize";

const tagName = "ce-resize-pane";
if (!customElements.get(tagName)) {
    customElements.define(tagName, defineCustomElement(FResizePane));
}

interface Component {
    readonly enabled?: Readonly<Ref<boolean>>;
    readonly visible?: Readonly<Ref<boolean>>;
    id: number;
}

const element = useTemplateRef("element");
const content = useTemplateRef("content");
const anyEnabled = ref(false);
const anyVisible = ref(false);

let components: Component[] = [];
let n = 0;

provide(injectionKey, {
    register(options) {
        const component = { ...options, id: n++ };
        components.push(component);
        const scope = effectScope();
        scope.run(() => {
            watchEffect(() => {
                anyEnabled.value = components.some((it) => it.enabled?.value ?? true);
            });
            watchEffect(() => {
                anyVisible.value = components.some((it) => it.visible?.value ?? true);
            });
        });
        return () => {
            components = components.filter((it) => it.id !== component.id);
            scope.stop();
        };
    },
});

const disabled = computed(() => anyVisible.value === false);

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
</script>

<template>
    <component :is="tagName" ref="element" :disabled v-bind="props">
        <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
        <!-- [html-validate-disable vue/prefer-slot-shorthand -- native slot] -->
        <div slot="content" ref="content">
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
