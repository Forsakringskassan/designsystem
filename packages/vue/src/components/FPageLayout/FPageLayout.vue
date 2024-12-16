<script setup lang="ts">
import { computed, useSlots } from "vue";
import { type LayoutDefinition, defineLayout } from "./define-layout";
import { defaultLayouts } from "./default-layout";

const props = defineProps<{ layout: string | LayoutDefinition }>();
const slots = useSlots();

const layoutDefinition = computed<LayoutDefinition>(() => {
    const { layout } = props;
    const stubLayout = defineLayout({
        name: "",
        slots: {},
    });
    if (!layout) {
        return stubLayout;
    }
    if (typeof layout === "string") {
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
    const name = typeof layout === "string" ? layout : layout.name;
    return `page-layout--${name}`;
});

const slotNames = computed(() => {
    const available = Object.keys(layoutDefinition.value.slots);
    return Object.keys(slots).filter((it) => available.includes(it));
});

const slotData = computed(() => {
    const { slots } = layoutDefinition.value;
    return slotNames.value.map((name) => {
        const { direction } = slots[name];
        const nameClass = `area-${name}`;
        const directionClass = `direction-${direction}`;
        return {
            name,
            classes: [`page-layout__area`, nameClass, directionClass],
        };
    });
});
</script>

<template>
    <div class="page-layout" :class="className">
        <div
            v-for="slot of slotData"
            :key="slot.name"
            :data-area="slot.name"
            :style="`grid-area: ${slot.name}`"
            :class="slot.classes"
        >
            <slot :name="slot.name"></slot>
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
    position: relative;

    &.direction-column {
        flex-direction: column;
    }

    &.direction-row {
        flex-direction: row;
    }

    &:empty {
        display: none;
    }
}

.page-layout--simple {
    grid-template:
        "header" min-content
        "content"
        "footer" min-content
        / 1fr;
}

.page-layout--left-panel {
    grid-template:
        "header header" min-content
        "left content"
        "footer footer" min-content
        / min-content 1fr;
}

.page-layout--right-panel {
    grid-template:
        "header header" min-content
        "content right"
        "footer footer" min-content
        / 1fr min-content;
}

.page-layout--three-column {
    grid-template:
        "header header header" min-content
        "left content right"
        "footer footer footer" min-content
        / min-content 1fr min-content;
}
</style>
