<script setup lang="ts">
import { computed, onUnmounted, useSlots } from "vue";
import { resetDetailPanels } from "../FDetailsPanel/use-details-panel";
import { PageLayout } from "./webcomponent";

const tagName = `ce-page-layout`;
if (!customElements.get(tagName)) {
    customElements.define(tagName, PageLayout);
}

const emit = defineEmits<{
    /** Emitted when the layout has been recalculated */
    update: [];
}>();

const { layout } = defineProps<{ layout: string }>();
const slots = useSlots();

const slotNames = computed((): string[] => {
    return Object.keys(slots);
});

function onUpdate(): void {
    emit("update");
}

onUnmounted(() => {
    resetDetailPanels();
});
</script>

<template>
    <component :is="tagName" :layout @update="onUpdate">
        <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -- false positive, this is the native slot attribute -->
        <div v-for="slot of slotNames" :key="slot" :slot>
            <slot :name="slot"></slot>
        </div>
    </component>
</template>
