<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { afterEnterTransition } from "./after-enter";
import { enterTransition } from "./enter";
import { leaveTransition } from "./leave";

export default defineComponent({
    name: "FExpand",
    data() {
        return {
            height: 0,
        };
    },
    methods: {
        enter(element: Element): void {
            this.height = enterTransition(element);
        },
        afterEnter(element: Element): void {
            afterEnterTransition(element);
        },
        leave(element: Element): void {
            leaveTransition(element);
        },
    },
});
</script>

<template>
    <transition @enter="enter" @after-enter="afterEnter" @leave="leave">
        <!-- @slot Content to expand -->
        <slot :height></slot>
    </transition>
</template>
