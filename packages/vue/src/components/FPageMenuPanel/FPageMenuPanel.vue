<script setup lang="ts">
import { defineCustomElement, ref } from "vue";
import { FIcon } from "../FIcon";
import PageMenuPanel from "./PageMenuPanel.ce.vue";

const ceTag = "ce-page-menu-panel";
if (!customElements.get(ceTag)) {
    customElements.define(ceTag, defineCustomElement(PageMenuPanel));
}

const isOpen = ref(true);

function onToggle(e: CustomEvent<[boolean]>): void {
    isOpen.value = e.detail[0];
}
</script>

<template>
    <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
    <!-- [html-validate-disable vue/prefer-slot-shorthand -- native slot] -->
    <ce-page-menu-panel @toggle="onToggle">
        <div slot="header">
            <slot name="header" v-bind="{ isOpen }"> </slot>
        </div>
        <div slot="icon">
            <slot name="icon" v-bind="{ isOpen }">
                <div>[icon]</div>
                <f-icon name="bars"> <title>Toggle</title> </f-icon>
            </slot>
        </div>
        <div slot="content">
            <slot name="default" v-bind="{ isOpen }"> </slot>
        </div>
        <div slot="footer">
            <slot name="footer" v-bind="{ isOpen }"></slot>
        </div>
    </ce-page-menu-panel>
</template>
