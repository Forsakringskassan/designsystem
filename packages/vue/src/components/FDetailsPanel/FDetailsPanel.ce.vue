<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import { useAreaData } from "../FPageLayout/use-area-data";

const rootElement = useTemplateRef("root");
const { attachPanel } = useAreaData(rootElement);

const emit = defineEmits<{
    closed: [];
}>();

const attachClass = computed(() => {
    switch (attachPanel.value) {
        case "left":
            return "attach-left";
        case "right":
            return "attach-right";
    }
    return undefined;
});
</script>

<template>
    <div ref="root" class="panel__wrapper">
        <div class="panel panel--details" :class="[attachClass]">
            <div class="panel__header" part="header">
                <div class="panel__title">
                    <slot name="header"></slot>
                </div>
                <button class="panel__close-button" type="button" @click="emit('closed')">
                    <slot name="icon"></slot>
                </button>
            </div>
            <div class="panel__content" part="content">
                <slot name="content"></slot>
            </div>
            <div class="panel__footer" part="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "FDetailsPanel";
</style>
