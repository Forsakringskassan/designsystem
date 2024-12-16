<script setup lang="ts">
import { computed, useSlots, onMounted, getCurrentInstance, useTemplateRef } from "vue";

const props = defineProps<{ variant: "static" }>();
const slots = useSlots();
const root = useTemplateRef("root");

const className = computed(() => {
    return props.variant ? `panel--${props.variant}` : undefined;
});

const placement = computed(() => {
    const element = root.value;
    if (!element) {
        return undefined;
    }
    const container = element.closest("[data-area]");
    return container ? container.dataset.area : undefined;
});
</script>

<template>
    <div class="panel" :class="className" ref="root">
        <pre>placement: {{ placement }}</pre>
        <slot></slot>
    </div>
</template>

<style>
.panel {
    min-width: 20ch;
}
</style>
