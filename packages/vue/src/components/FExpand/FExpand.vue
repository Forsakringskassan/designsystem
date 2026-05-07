<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { afterEnterTransition } from "./after-enter";
import { beforeEnterTransition } from "./before-enter";
import { beforeLeaveTransition } from "./before-leave";
import { enterTransition } from "./enter";
import { leaveTransition } from "./leave";

export default defineComponent({
    name: "FExpand",
    methods: {
        onBeforeEnter(element: Element): void {
            beforeEnterTransition(element);
        },
        onEnter(element: Element, done: () => void): void {
            enterTransition(element, done);
        },
        onAfterEnter(element: Element): void {
            afterEnterTransition(element);
        },
        onBeforeLeave(element: Element): void {
            beforeLeaveTransition(element);
        },
        onLeave(element: Element, done: () => void): void {
            leaveTransition(element, done);
        },
    },
});
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
