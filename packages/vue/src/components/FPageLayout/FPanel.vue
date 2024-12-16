<script setup lang="ts">
import { ref, computed, useSlots, onMounted, getCurrentInstance, useTemplateRef } from "vue";

const {
    variant,
    overlay = false,
    resizable = false,
} = defineProps<{ variant: "static" | "toggle" | "expand"; overlay?: boolean; resizable?: boolean }>();
const slots = useSlots();
const root = useTemplateRef("root");
const open = defineModel({ default: true });

const placement = computed(() => {
    const element = root.value;
    if (!element) {
        return undefined;
    }
    const container = element.closest("[data-area]") as HTMLElement;
    return container ? `panel--${container.dataset.area}` : undefined;
});

const variantClass = computed(() => {
    return variant ? `panel--${variant}` : undefined;
});

const overlayClass = computed(() => {
    return overlay ? `panel--overlay` : undefined;
});

const classes = computed(() => {
    return [variantClass.value, placement.value, overlayClass.value];
});

const haveToggle = computed(() => {
    return variant ? variant !== "static" : false;
});

const isOpen = computed(() => {
    switch (variant) {
        case "toggle":
            return open.value ?? true;
        case "expand":
            return true;
        default:
            return true;
    }
});

let x = null as number | null;
let r = null as number | null;

function onMouseDown(event) {
    x = event.clientX;
    r = root.value.offsetWidth;
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stop);
    root.value.classList.add("resizing");
    document.body.style["user-select"] = "none";
}

function resize(event) {
    const dx = event.clientX - x;
    root.value.style.width = `${r - dx}px`;
}

function stop(event) {
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stop);
    root.value.classList.remove("resizing");
    document.body.style.removeProperty("user-select");
    x = null;
}
</script>

<template>
    <template v-if="resizable">
        <div class="split-pane" v-if="isOpen">
            <div class="split-handle">
                <span v-if="open" class="thingy" @mousedown="onMouseDown"></span>
            </div>
            <div class="panel" :class="classes" ref="root" v-bind="$attrs">
                <div class="panel__toolbar" v-if="haveToggle">
                    <input type="checkbox" v-model="open" class="panel__toggle" />
                </div>

                <div class="panel__content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="panel" :class="classes" ref="root" v-if="isOpen" v-bind="$attrs">
            <div class="panel__toolbar" v-if="haveToggle">
                <input type="checkbox" v-model="open" class="panel__toggle" />
            </div>

            <div class="panel__content">
                <slot></slot>

                <pre style="margin-top: 2rem; overflow-x: auto; font-size: 0.8em">{{
                    {
                        open: isOpen,
                        variant,
                        placement: placement?.slice("panel--".length),
                        overlay,
                    }
                }}</pre>
            </div>
        </div>
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

    .thingy {
        display: inline-block;
        position: relative;
        left: 0.5rem;
        width: 1rem;
        height: 5rem;
        background: black;
        cursor: ew-resize;
        z-index: 1;
    }
}

.panel--overlay {
    position: absolute;
    height: 100%;
    z-index: 1;
}

.panel__content {
    padding: 1rem;
    flex: 1 0 auto;
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

    &.panel--left {
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
    &.panel--right {
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
}

.panel__toolbar {
    display: flex;
}
</style>
