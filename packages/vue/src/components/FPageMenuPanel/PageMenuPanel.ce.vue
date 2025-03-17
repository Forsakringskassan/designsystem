<script setup lang="ts">
import { computed, ref, useTemplateRef, watchEffect } from "vue";
import { useMediaQuery } from "@vueuse/core";
import { useAreaData } from "../FPageLayout/use-area-data";

const emit = defineEmits<{ toggle: [isOpen: boolean] }>();

const root = useTemplateRef("root");
const { attachPanel } = useAreaData(root);
const isDesktop = useMediaQuery("(width >= 640px)");
const isOpen = ref<boolean>(isDesktop.value);

watchEffect(() => {
    isOpen.value = isDesktop.value;
});

watchEffect(() => {
    emit("toggle", isOpen.value);
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
    isOpen.value = !isOpen.value;
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
@use "page-menu-panel";
</style>
