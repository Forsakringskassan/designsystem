<script setup lang="ts">
import { type Ref, computed, defineCustomElement, effectScope, provide, ref, watchEffect } from "vue";
import FResizePane from "./FResizePane.ce.vue";
import { injectionKey } from "./use-resize";

const tagName = "ce-resize-pane";
if (!customElements.get(tagName)) {
    customElements.define(tagName, defineCustomElement(FResizePane));
}

interface Component {
    readonly enabled?: Readonly<Ref<boolean>>;
    readonly visible?: Readonly<Ref<boolean>>;
    readonly overlay?: Readonly<Ref<boolean>>;
    readonly offset?: Readonly<Ref<number>>;
    id: number;
}

const anyEnabled = ref(true);
const anyVisible = ref(true);
const anyOverlay = ref(false);
const size = ref(-1);
const offset = ref(0);

let components: Component[] = [];
let n = 0;

function any<T>(src: T[], predicate: (it: T) => boolean): boolean {
    return src.length === 0 || src.some(predicate);
}

provide(injectionKey, {
    register(options) {
        const component = { ...options, id: n++ };
        components.push(component);
        const scope = effectScope();
        scope.run(() => {
            watchEffect(() => {
                anyEnabled.value = any(components, (it) => it.enabled?.value ?? true);
            });
            watchEffect(() => {
                anyVisible.value = any(components, (it) => it.visible?.value ?? true);
            });
            watchEffect(() => {
                anyOverlay.value = any(components, (it) => it.overlay?.value ?? false);
            });
            watchEffect(() => {
                if (components.length === 0) {
                    return 0;
                }
                const offsets = components.map((it) => it.offset?.value).filter((it) => typeof it === "number");
                offset.value = Math.max(0, ...offsets);
            });
        });
        return () => {
            components = components.filter((it) => it.id !== component.id);
            scope.stop();
        };
    },
    size,
});

const disabled = computed(() => anyEnabled.value === false);
const hidden = computed(() => anyVisible.value === false);
const overlay = computed(() => anyOverlay.value === true);

const props = withDefaults(
    defineProps<{
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
        min: "0",
        max: "100%",
        initial: "50%",
    },
);

function onResize(event: CustomEvent<[size: number]>): void {
    size.value = event.detail[0];
}
</script>

<template>
    <component :is="tagName" :disabled :hidden :overlay :offset v-bind="props" @resize="onResize">
        <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
        <!-- [html-validate-disable vue/prefer-slot-shorthand -- native slot] -->
        <div slot="content">
            <!-- @slot Pane content -->
            <slot name="default"></slot>
        </div>
    </component>
</template>
