<script setup lang="ts">
import { ref } from "vue";
import { afterEnterTransition } from "./after-enter";
import { beforeEnterTransition } from "./before-enter";
import { beforeLeaveTransition } from "./before-leave";
import { enterTransition } from "./enter";
import { leaveTransition } from "./leave";

const props = defineProps<{
    expanded: boolean;
}>();

const skipTransition = ref(props.expanded);

function onBeforeEnter(element: Element): void {
    beforeEnterTransition(element, skipTransition.value);
    skipTransition.value = false;
}

function onEnter(element: Element, done: () => void): void {
    enterTransition(element, done);
}

function onAfterEnter(element: Element): void {
    afterEnterTransition(element);
}

function onBeforeLeave(element: Element): void {
    beforeLeaveTransition(element);
}

function onLeave(element: Element, done: () => void): void {
    leaveTransition(element, done);
}
</script>

<template>
    <transition
        appear
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
    >
        <!-- @slot Content to expand -->
        <slot></slot>
    </transition>
</template>
