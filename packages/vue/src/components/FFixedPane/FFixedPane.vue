<script setup lang="ts">
import { defineCustomElement, onMounted } from "vue";
import CeComponent from "./FFixedPane.ce.vue";

const ceTag = "ce-fixed-pane";

onMounted(() => {
    if (!customElements.get(ceTag)) {
        customElements.define(ceTag, defineCustomElement(CeComponent));
    }
});
</script>

<template>
    <component :is="ceTag">
        <slot></slot>
    </component>
</template>
