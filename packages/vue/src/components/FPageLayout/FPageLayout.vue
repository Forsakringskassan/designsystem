<script setup lang="ts">
import { computed, useSlots } from "vue";

const props = defineProps<{ layout: string }>();
const slots = useSlots();

const className = computed(() => {
    return props.layout ? `page-layout--${props.layout}` : undefined;
});

const slotNames = computed(() => {
    return Object.keys(slots);
});
</script>

<template>
    <div class="page-layout" :class="className">
        <div
            v-for="name of slotNames"
            :key="name"
            :data-area="name"
            :style="`grid-area: ${name}`"
            :class="`page-layout__${name}`"
        >
            <slot :name></slot>
        </div>
    </div>
</template>

<style>
.page-layout {
    display: grid;
    min-height: 100vh;
}
</style>
