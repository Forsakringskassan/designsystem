<script setup lang="ts">
import { computed, ref, useTemplateRef, watch } from "vue";
import { useMediaQuery } from "@vueuse/core";
import { useAreaData } from "../FPageLayout/use-area-data";

const emit = defineEmits<{ toggle: [isOpen: boolean, overlay: boolean, offset?: number] }>();

const root = useTemplateRef("root");
const { attachPanel } = useAreaData(root);
const isDesktop = useMediaQuery("(width >= 640px)");
const isOpen = ref<boolean>(isDesktop.value);

function updateIsOpen(value: boolean): void {
    if (isOpen.value === value) {
        return;
    }

    if (value && !isDesktop.value && root.value) {
        const offset = root.value.getBoundingClientRect().width + 2;
        emit("toggle", value, true, offset);
    } else {
        emit("toggle", value, false);
    }

    isOpen.value = value;
}

watch(isDesktop, (newValue: boolean, oldValue: boolean) => {
    if (newValue !== oldValue) {
        updateIsOpen(newValue);
    }
});

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

function onToggle(): void {
    updateIsOpen(!isOpen.value);
}
</script>

<template>
    <div ref="root" class="panel__wrapper">
        <div class="panel panel--menu" :class="[expandedClass, attachClass]">
            <div class="panel__header">
                <div v-if="isOpen" class="panel__title">
                    <slot name="header"></slot>
                </div>
                <div class="panel__collapse">
                    <button type="button" @click="onToggle">
                        <slot name="icon"></slot>
                    </button>
                </div>
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
