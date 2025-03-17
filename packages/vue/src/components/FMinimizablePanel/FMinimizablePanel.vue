<script setup lang="ts">
import { defineCustomElement, ref } from "vue";
import { useTranslate } from "../../plugins";
import { FIcon } from "../FIcon";
import MinimizablePanel from "./MinimizablePanel.ce.vue";

const ceTag = "ce-minimizable-panel";
if (!customElements.get(ceTag)) {
    customElements.define(ceTag, defineCustomElement(MinimizablePanel));
}

const $t = useTranslate();
const isOpen = ref(true);

function onToggle(e: CustomEvent<[boolean]>): void {
    isOpen.value = e.detail[0];
}
</script>

<template>
    <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
    <!-- [html-validate-disable vue/prefer-slot-shorthand -- native slot] -->
    <ce-minimizable-panel @toggle="onToggle">
        <div slot="header">
            <slot name="header"></slot>
        </div>
        <div slot="icon">
            <slot name="icon" v-bind="{ isOpen }">
                <f-icon name="chevrons-left">
                    <title v-if="isOpen">{{ $t("fkui.minimizablepanel.hide", "Dölj meny") }}</title>
                    <title v-else>{{ $t("fkui.minimizablepanel.show", "Visa meny") }}</title>
                </f-icon>
            </slot>
        </div>
        <div slot="content">
            <slot name="default" v-bind="{ isOpen }"></slot>
        </div>
        <div slot="footer">
            <slot name="footer" v-bind="{ isOpen }"></slot>
        </div>
    </ce-minimizable-panel>
</template>
