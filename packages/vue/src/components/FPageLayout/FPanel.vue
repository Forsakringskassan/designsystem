<script setup lang="ts">
import { ref, computed, useSlots, onMounted, getCurrentInstance, useTemplateRef, inject, watch } from "vue";
import { debounce } from "@fkui/logic";
import { useEventListener } from "../../composables";

const {
    variant = "static",
    overlay = false,
    resizable = false,
    behaviour,
} = defineProps<{
    variant?: "static" | "toggle" | "expand";
    overlay?: boolean;
    resizable?: boolean;
    behaviour?(sizes: Record<string, number>): {
        variant?: "static" | "toggle" | "expand";
        overlay?: boolean;
        fullscreen?: boolean;
    };
}>();
const slots = useSlots();
const root = useTemplateRef("root");
const open = defineModel({ default: true });
const size = inject<() => Record<string, number>>("size");
const override = ref<{ variant?: "static" | "toggle" | "expand"; overlay?: boolean; fullscreen?: boolean }>({});

const effectiveVariant = computed(() => {
    if (override.value && typeof override.value.variant !== "undefined") {
        return override.value.variant;
    } else {
        return variant;
    }
});

const effectiveOverlay = computed(() => {
    if (override.value && typeof override.value.overlay !== "undefined") {
        return override.value.overlay;
    } else {
        return overlay;
    }
});

const effectiveFullscreen = computed(() => {
    if (override.value && typeof override.value.fullscreen !== "undefined") {
        return override.value.fullscreen;
    } else {
        return false;
    }
});

const placement = computed(() => {
    const element = root.value;
    if (!element) {
        return undefined;
    }
    const container = element.closest("[data-area]") as HTMLElement | undefined;
    if (!container) {
        return undefined;
    }
    return container.dataset.area;
});

const attach = computed(() => {
    const element = root.value;
    if (!element) {
        return undefined;
    }
    const container = element.closest("[data-attach]") as HTMLElement | undefined;
    if (!container) {
        return undefined;
    }
    return container.dataset.attach;
});

const placementClass = computed(() => {
    return placement.value ? `panel--${placement.value}` : undefined;
});

const variantClass = computed(() => {
    if (effectiveFullscreen.value) {
        return `panel--fullscreen`;
    }
    return effectiveVariant.value ? `panel--${effectiveVariant.value}` : undefined;
});

const overlayClass = computed(() => {
    return effectiveOverlay.value ? `panel--overlay` : undefined;
});

const classes = computed(() => {
    return [variantClass.value, placementClass.value, overlayClass.value];
});

const haveToggle = computed(() => {
    return effectiveVariant.value ? effectiveVariant.value !== "static" : false;
});

const isOpen = computed(() => {
    if (effectiveFullscreen.value) {
        return open.value;
    }

    switch (effectiveVariant.value) {
        case "toggle":
            return open.value ?? true;
        case "expand":
            return true;
        default:
            return true;
    }
});

const teleport = computed(() => {
    return open.value && effectiveFullscreen.value;
});

useEventListener(window, "resize", debounce(onWindowResize, 200));

function onWindowResize() {
    if (behaviour && size) {
        const result = behaviour(size());
        override.value = result;
    }
}

onMounted(() => {
    if (behaviour && size) {
        const result = behaviour(size());
        override.value = result;
    }
});

watch(
    () => behaviour,
    () => {
        if (behaviour && size) {
            const result = behaviour(size());
            override.value = result;
        } else {
            override.value = {};
        }
    },
);

let x = null as number | null;
let r = null as number | null;

function onMouseDown(event: MouseEvent) {
    if (!root.value) {
        return;
    }
    x = event.clientX;
    r = root.value.offsetWidth;
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stop);
    root.value.classList.add("resizing");
    document.body.style.setProperty("user-select", "none");
}

function resize(event: MouseEvent) {
    if (!root.value || x === null || r === null) {
        return;
    }
    switch (attach.value) {
        case "left": {
            const dx = event.clientX - x;
            root.value.style.width = `${r + dx}px`;
            break;
        }
        case "right": {
            const dx = event.clientX - x;
            root.value.style.width = `${r - dx}px`;
            break;
        }
    }
}

function stop(event: MouseEvent) {
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stop);
    if (!root.value) {
        return;
    }
    root.value.classList.remove("resizing");
    document.body.style.removeProperty("user-select");
    x = null;
    r = null;
}
</script>

<template>
    <template v-if="resizable">
        <div class="split-pane" v-if="isOpen">
            <div class="split-handle">
                <span v-if="open" class="thingy" @mousedown="onMouseDown"></span>
            </div>
            <div class="panel split-content" :class="classes" ref="root" v-bind="$attrs">
                <div class="panel__toolbar" v-if="haveToggle">
                    <input type="checkbox" v-model="open" class="panel__toggle" />
                </div>

                <div class="panel__header" v-if="slots.footer">
                    <slot name="header"></slot>
                </div>

                <div class="panel__content" v-if="slots.default">
                    <slot></slot>
                    <pre style="margin-top: 2rem; overflow-x: auto; font-size: 0.8em">{{
                        {
                            open: isOpen,
                            variant: effectiveVariant,
                            attach,
                            slot: placement,
                            overlay: effectiveOverlay,
                            teleport,
                            override,
                        }
                    }}</pre>
                </div>

                <div class="panel__footer" v-if="slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <Teleport :disabled="!teleport" to="body">
            <div class="panel" :class="classes" ref="root" v-if="isOpen" v-bind="$attrs">
                <div class="panel__toolbar" v-if="haveToggle">
                    <input type="checkbox" v-model="open" class="panel__toggle" />
                </div>

                <div class="panel__header" v-if="slots.footer">
                    <slot name="header"></slot>
                </div>

                <div class="panel__content" v-if="slots.default">
                    <slot name="default"></slot>
                    <pre style="margin-top: 2rem; overflow-x: auto; font-size: 0.8em">{{
                        {
                            open: isOpen,
                            model: open,
                            variant: effectiveVariant,
                            attach,
                            slot: placement,
                            overlay: effectiveOverlay,
                            teleport,
                            override,
                        }
                    }}</pre>
                </div>

                <div class="panel__footer" v-if="slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </Teleport>
        <div class="spacer" v-if="effectiveVariant === 'expand' && effectiveOverlay"></div>
    </template>
</template>

<style>
.panel {
    min-width: 20ch;
    flex: 1 0 auto;
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
}

.split-pane {
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
}

.split-handle {
    align-self: center;
    width: 0;

    .thingy {
        display: inline-block;
        position: relative;
        width: 1rem;
        height: 5rem;
        left: -0.5rem;
        background: black;
        cursor: ew-resize;
        z-index: 1;
    }
}

.attach-left {
    .split-content {
        order: 1;
    }

    .split-handle {
        order: 2;
    }

    .panel--overlay {
        left: 0;
    }
}

.attach-right {
    .split-content {
        order: 2;
    }

    .split-handle {
        order: 1;
    }

    .panel--overlay {
        right: 0;
    }
}

.panel--overlay {
    position: absolute;
    height: 100%;
    z-index: 1;
}
.spacer {
    width: 1.5rem; /* size of button */
}

.panel__header {
    padding: 1rem;
    flex: 0 0 auto;
}

.panel__content {
    padding: 1rem;
    flex: 1 0 auto;
}

.panel__footer {
    padding: 1rem;
    flex: 0 0 auto;
}

.panel--toggle {
    .panel__toggle {
        appearance: none;
        position: relative;
        display: flex;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border: 1px solid #000;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        margin: 0 0.5rem;

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }

        &::before {
            color: #000;
            display: block;
            content: "x";
            cursor: pointer;
            line-height: 1;
            flex: 1 1 auto;
            text-align: center;
        }
    }

    .panel__toolbar {
        justify-content: flex-end;
    }
}

.panel--expand {
    min-width: auto;
    width: 20ch;
    transition: width 0.25s ease-in;

    &.resizing {
        transition: none;
    }

    &:not(:has(input:checked)) {
        width: 1.5rem !important; /* size of button */

        .panel__content {
            display: none;
        }
    }

    .panel__toggle {
        appearance: none;
        position: relative;
        display: flex;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border: 1px solid #000;
        border-radius: 4px;
        align-items: center;
        justify-content: center;

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }

        &::before {
            color: #000;
            display: block;
            content: "?";
            cursor: pointer;
            line-height: 1;
            flex: 1 1 auto;
            text-align: center;
        }

        &:checked {
            margin: 0 0.5rem;
        }

        &:checked::before {
            content: "";
        }
    }
}

.attach-left .panel--expand {
    .panel__toolbar {
        justify-content: flex-end;
    }
    .panel__toggle::before {
        content: "»";
    }
    .panel__toggle:checked::before {
        content: "«";
    }
}

.attach-right .panel--expand {
    .panel__toolbar {
        justify-content: flex-start;
    }
    .panel__toggle::before {
        content: "«";
    }
    .panel__toggle:checked::before {
        content: "»";
    }
}

.panel--fullscreen {
    position: absolute;
    inset: 0;
    z-index: 1000;

    .panel__toolbar {
        justify-content: flex-end;
    }

    .panel__toggle {
        appearance: none;
        position: relative;
        display: flex;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border: 1px solid #000;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        margin: 0 0.5rem;

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }

        &::before {
            color: #000;
            display: block;
            content: "x";
            cursor: pointer;
            line-height: 1;
            flex: 1 1 auto;
            text-align: center;
        }
    }
}

.panel__toolbar {
    display: flex;
}
</style>
