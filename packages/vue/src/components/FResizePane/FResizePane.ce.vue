<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, watchEffect } from "vue";
import { debounce } from "@fkui/logic";
import { useEventListener } from "../../composables";
import { useAreaData } from "../FPageLayout";
import { useKeyboardHandler } from "./use-keyboard-handler";
import { type Orientation } from "./orientation";
import { usePointerHandler } from "./use-pointer-handler";
import { type SizeState } from "./size-state";
import { clamp } from "./clamp";
import { computeCssValue } from "./compute-css-value";
import { aggregateCssValue } from "./aggregate-css-value";
import { useStorage } from "./use-storage";

const STEP_SIZE = 10;

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

const root = shallowRef<HTMLElement>();
const content = ref<HTMLElement>();
const separator = ref<HTMLElement>();
const state = ref<SizeState>({ min: -1, max: -1, current: -1 });
const separatorSize = ref(0);
const layoutSize = ref(0);
const storageKey = computed(() => (area.value ? `layout/${area.value}/size` : null));

const { attachPanel: attachment, direction, area } = useAreaData(root);

useKeyboardHandler({
    increase() {
        state.value.current = Math.min(state.value.current + STEP_SIZE, state.value.max);
    },
    decrease() {
        state.value.current = Math.max(state.value.current - STEP_SIZE, state.value.min);
    },
    maximize() {
        state.value.current = state.value.max;
    },
    minimize() {
        state.value.current = state.value.min;
    },
    attachment,
    separator,
});

useStorage({
    state,
    storageKey,
});

usePointerHandler({
    movement(value) {
        state.value.current = value;
    },
    separator,
    state,
    attachment,
});

const minSize = computed(() => {
    const total = layoutSize.value;
    return Math.floor(aggregateCssValue(props.min, total, 0, Math.max) + separatorSize.value);
});

const maxSize = computed(() => {
    const total = layoutSize.value;
    return Math.floor(aggregateCssValue(props.max, total, total, Math.min) + separatorSize.value);
});

const initialSize = computed(() => {
    const total = layoutSize.value;
    return Math.floor(computeCssValue(props.initial, total, total * 0.5));
});

const orientation = computed((): Orientation => {
    if (attachment.value === "top" || attachment.value === "bottom") {
        return "horizontal";
    } else {
        return "vertical";
    }
});

const classes = computed(() => {
    return [
        `resize--${attachment.value}`,
        `resize--${direction.value}`,
        props.disabled ? "resize--disabled" : undefined,
    ];
});

const layoutElement = computed(() => {
    if (!root.value) {
        return undefined;
    }
    const shadow = root.value.getRootNode() as ShadowRoot;
    const host = shadow.host;
    return host.closest<HTMLElement>("ce-page-layout") ?? undefined;
});

watchEffect(() => {
    const { min, max, current: value } = state.value;
    if (root.value) {
        root.value.style.setProperty("--size", `${String(value)}px`);
        root.value.style.setProperty("--min", `${min}px`);
        root.value.style.setProperty("--max", `${max}px`);
    }
    if (separator.value) {
        separator.value.setAttribute("aria-valuemin", String(Math.floor(min)));
        separator.value.setAttribute("aria-valuemax", String(Math.floor(max)));
        separator.value.setAttribute("aria-valuenow", String(Math.floor(value)));
    }
});

onMounted(() => {
    if (separator.value) {
        const { flexBasis } = getComputedStyle(separator.value);
        separatorSize.value = computeCssValue(flexBasis, 0, 0);
    }
    layoutSize.value = getLayoutSize();
    state.value = {
        min: minSize.value,
        max: maxSize.value,
        current: clamp(initialSize.value, minSize.value, maxSize.value),
    };
});

useEventListener(window, "resize", debounce(onResize, 20));

function onResize(): void {
    layoutSize.value = getLayoutSize();
    state.value = {
        min: minSize.value,
        max: maxSize.value,
        current: initialSize.value,
    };
}

function getLayoutSize(): number {
    if (!layoutElement.value) {
        return 0;
    }
    switch (orientation.value) {
        case "horizontal": {
            return layoutElement.value.offsetHeight;
        }
        case "vertical": {
            return layoutElement.value.offsetWidth;
        }
    }
}
</script>

<template>
    <div ref="root" class="resize" :class="classes">
        <div ref="content" class="resize__content">
            <!-- @slot Pane content -->
            <slot name="content"></slot>
        </div>
        <div
            v-if="!props.disabled"
            ref="separator"
            role="separator"
            class="resize__handle"
            tabindex="0"
            :aria-orientation="orientation"
        ></div>
        <div v-else role="separator" class="resize__handle disabled" :aria-orientation="orientation"></div>
    </div>
</template>

<style lang="scss">
@use "FResizePane";
</style>
