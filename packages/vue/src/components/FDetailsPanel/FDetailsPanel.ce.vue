<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import { useAreaData } from "../FPageLayout/use-area-data";

const root = useTemplateRef("root");
const { attachPanel } = useAreaData(root);

const { headingTag } = defineProps<{
    headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>();

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
        <div class="panel" :class="[attachClass]">
            <div class="panel__header">
                <component :is="headingTag" class="panel__title">
                    <slot name="header"></slot>
                </component>
                <button class="panel__close-button" type="button" @click="emit('closed')">
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
@use "FDetailsPanel";
</style>
