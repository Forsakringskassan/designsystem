<script setup lang="ts">
import { computed, ref, useTemplateRef, watch } from "vue";
import { useMediaQuery } from "@vueuse/core";
import { useAreaData } from "../FPageLayout/use-area-data";

const {
    openPrefix = "Återställ",
    closePrefix = "Minimera",
    context = "panel",
} = defineProps<{
    /**
     * Screenreader prefix for toggle button when minimized.
     *
     * Default value "Återställ".
     */
    openPrefix?: string;
    /**
     * Screenreader prefix for toggle button when open.
     *
     * Default value "Minimera".
     */
    closePrefix?: string;
    /**
     * Screenreader context for toggle button.
     *
     * Default value "panel".
     */
    context?: string;
}>();

const emit = defineEmits<{
    /**
     * Emitted when button is toggled.
     * @arg isOpen - open or minimized panel.
     * @arg overlay - show panel as overlay.
     * @offset offset - offset to use when overlay.
     */
    toggle: [isOpen: boolean, overlay: boolean, offset?: number];
}>();

const rootRef = useTemplateRef("root");
const { attachPanel } = useAreaData(rootRef);
const isDesktop = useMediaQuery("(width >= 640px)");
const isOpen = ref<boolean>(false);

function updateIsOpen(value: boolean): void {
    if (value && !isDesktop.value && rootRef.value) {
        const offset = rootRef.value.getBoundingClientRect().width;
        emit("toggle", value, true, offset);
    } else {
        emit("toggle", value, false);
    }

    isOpen.value = value;
}

watch(
    isDesktop,
    (newValue: boolean) => {
        updateIsOpen(newValue);
    },
    { immediate: true },
);

const expandedClass = computed(() => {
    return isOpen.value ? "expanded" : "collapsed";
});

const attachClass = computed(() => {
    switch (attachPanel.value) {
        case "left":
            return "attach-left";
        case "right":
            return "attach-right";
    }
    return undefined;
});

const ariaLabel = computed(() => {
    const prefix = isOpen.value ? closePrefix : openPrefix;
    return `${prefix} ${context}`;
});

function onToggle(): void {
    updateIsOpen(!isOpen.value);
}
</script>

<template>
    <div ref="root" class="panel__wrapper">
        <div class="panel" :class="[expandedClass, attachClass]">
            <div class="panel__header">
                <div v-if="isOpen" class="panel__title">
                    <slot name="header"></slot>
                </div>
                <button class="panel__button" type="button" :aria-expanded="isOpen" :aria-label @click="onToggle">
                    <slot name="icon"></slot>
                </button>
            </div>
            <div class="panel__content">
                <slot name="content"></slot>
            </div>
            <div class="panel__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "minimizable-panel";
</style>
