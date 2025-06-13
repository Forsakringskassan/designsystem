<script setup lang="ts">
import { useAttrs } from "vue";
import { useInflight } from "./use-inflight";

defineOptions({
    inheritAttrs: false,
});

const originalAttrs = useAttrs();
const { inflight, fn: onClick } = useInflight(originalAttrs.onClick);
const attrs = { ...originalAttrs, onClick };
</script>

<template>
    <button type="button" class="button button--primary" :class="{ inflight }" :disabled="inflight" v-bind="attrs">
        <span class="loader2"></span>
        <slot></slot>
    </button>
</template>

<style>
.loader2 {
    width: 1em;
    height: 1em;
    margin-left: -1em;
    border: 3px solid hotpink;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    visibility: hidden;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

.inflight .loader2 {
    visibility: visible;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
