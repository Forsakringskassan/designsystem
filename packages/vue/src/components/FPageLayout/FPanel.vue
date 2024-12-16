<script setup lang="ts">
import { ref, computed, useSlots, onMounted, getCurrentInstance, useTemplateRef } from "vue";

const { variant, overlay = false } = defineProps<{ variant: "static" | "toggle" | "expand"; overlay?: boolean }>();
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
</script>

<template>
    <div class="panel" :class="[variantClass, placement, overlayClass]" ref="root" v-if="isOpen">
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

<style>
.panel {
    min-width: 20ch;
    flex: 1 0 auto;
    padding-top: 0.5rem;
}

.panel--overlay {
    position: absolute;
    height: 100%;
    z-index: 1;
}

.panel__content {
    padding: 1rem;
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
    width: 1.5rem; /* size of button */
    transition: width 0.25s ease-in;

    .panel__content {
        display: none;
    }

    &:has(input:checked) {
        width: 20ch;

        .panel__content {
            display: block;
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
            justify-content: flex-begin;
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
