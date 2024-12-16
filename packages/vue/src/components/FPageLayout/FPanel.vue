<script setup lang="ts">
import { ref, computed, useSlots, onMounted, getCurrentInstance, useTemplateRef } from "vue";

const props = defineProps<{ variant: "static" | "toggle" | "expand" }>();
const slots = useSlots();
const root = useTemplateRef("root");
const open = defineModel({ default: true });

const placement = computed(() => {
    const element = root.value;
    if (!element) {
        return undefined;
    }
    const container = element.closest("[data-area]");
    return container ? `panel--${container.dataset.area}` : undefined;
});

const variant = computed(() => {
    return props.variant ? `panel--${props.variant}` : undefined;
});

const haveToggle = computed(() => {
    return props.variant ? props.variant !== "static" : false;
});

const isOpen = computed(() => {
    console.log(props.variant);
    switch (props.variant) {
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
    <div class="panel" :class="[variant, placement]" ref="root" v-if="isOpen">
        <div class="panel__toolbar" v-if="haveToggle">
            <input type="checkbox" v-model="open" class="panel__toggle" />
        </div>

        <div class="panel__content">
            <slot></slot>

            <pre style="margin-top: 2rem, overflow-x: auto">{{
                {
                    open: isOpen,
                    variant: variant?.slice("panel--".length),
                    placement: placement?.slice("panel--".length),
                }
            }}</pre>
        </div>
    </div>
</template>

<style>
.panel {
    min-width: 20ch;
}

.panel--toggle {
    .panel__toggle {
        appearance: none;
        position: relative;
        display: flex;
        width: 1.5rem;
        height: 1.5rem;
        background: darkred;
        align-items: center;
        justify-content: center;

        &::before {
            color: white;
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
        background: darkred;
        align-items: center;
        justify-content: center;

        &::before {
            color: white;
            display: block;
            content: "?";
            cursor: pointer;
            line-height: 1;
            flex: 1 1 auto;
            text-align: center;
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
