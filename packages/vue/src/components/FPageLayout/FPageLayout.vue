<script setup lang="ts">
import { computed, onMounted, useSlots } from "vue";
import { PageLayout } from "./webcomponent";

const { layout } = defineProps<{ layout: string }>();
const slots = useSlots();
const tagName = `ce-page-layout`;

const slotNames = computed((): string[] => {
    return Object.keys(slots);
});

onMounted(() => {
    if (!customElements.get(tagName)) {
        customElements.define(tagName, PageLayout);
    }
});
</script>

<template>
    <component :is="tagName" :layout class="page-layout">
        <template v-for="slot of slotNames" :key="slot">
            <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute -- false postive, this is the native slot attribute -->
            <div :slot class="page-layout__slot">
                <slot :name="slot"></slot>
            </div>
        </template>
    </component>
</template>
