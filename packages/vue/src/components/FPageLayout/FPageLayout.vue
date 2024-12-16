<script setup lang="ts">
import { computed, useSlots } from "vue";
import { type LayoutDefinition, defineLayout } from "./define-layout";
import { defaultLayouts } from "./default-layout";

const props = defineProps<{ layout: string | LayoutDefinition }>();
const slots = useSlots();

const layoutDefinition = computed(() => {
    const { layout } = props;
    const stubLayout = defineLayout({
        name: '',
        slots: {},
    });
    if (!layout) {
        return stubLayout;
    }
    if (typeof layout === 'string') {
        return defaultLayouts[layout] ?? stubLayout;
    } else {
        return layout;
    }
});

const className = computed(() => {
    const { layout } = props;
    if (!layout) {
        return undefined;
    }
    const name = typeof layout === 'string' ? layout : layout.name;
    return `page-layout--${name}`;
});

const slotNames = computed(() => {
    const available = Object.keys(layoutDefinition.value.slots);
    return Object.keys(slots).filter(it => available.includes(it));
});
</script>

<template>
    <div class="page-layout" :class="className">
        <div
            v-for="name of slotNames"
            :key="name"
            :data-area="name"
            :style="`grid-area: ${name}`"
            :class="[`page-layout__area`, `page-layout__${name}`]"
        >
            <slot :name></slot>
        </div>
    </div>
</template>

<style>
.page-layout {
    display: grid;
    min-height: 100vh;
    width: 100vw;
}
.page-layout__area {
    display: flex;
    flex-direction: column;
    position: relative;
}
</style>
