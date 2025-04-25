<script setup lang="ts" generic="T extends FPageLayoutType">
import { defineCustomElement, onMounted, onUnmounted } from "vue";
import { resetDetailPanels } from "../FDetailsPanel/use-details-panel";
import { type FPageLayoutType, type FPageLayoutBindings } from "./types";
import CeComponent from "./FPageLayout.ce.vue";

const ceTag = "ce-page-layout";
const { layout } = defineProps<{ layout: T }>();
const emit = defineEmits<{
    update: [];
}>();

const proxy = new Proxy(
    {},
    {
        get(_, property: string) {
            // ignore Vue internal props
            if (property.startsWith("__v")) {
                return undefined;
            }

            return property;
        },
    },
);

onMounted(() => {
    if (!customElements.get(ceTag)) {
        customElements.define(ceTag, defineCustomElement(CeComponent));
    }
});

onUnmounted(() => {
    resetDetailPanels();
});
</script>

<template>
    <component :is="ceTag" :layout @update="emit('update')">
        <slot v-bind="proxy as FPageLayoutBindings<T>"></slot>
    </component>
</template>
