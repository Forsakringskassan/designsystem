<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { enterTransition } from "./enter";
import { leaveTransition } from "./leave";

export default defineComponent({
    name: "FExpand",
    methods: {
        enter(element: Element, done: () => void): void {
            enterTransition(element, done);
        },
        leave(element: Element, done: () => void): void {
            leaveTransition(element, done);
        },
    },
});
</script>

<template>
    <transition :css="false" @enter="enter" @leave="leave">
        <!-- @slot Content to expand -->
        <slot></slot>
    </transition>
</template>
