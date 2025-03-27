<script setup lang="ts" generic="T">
import { computed, defineCustomElement, onUnmounted } from "vue";
import { useMediaQuery } from "@vueuse/core";
import { useTranslate } from "../../plugins";
import { FIcon } from "../FIcon";
import { useResize } from "../FResizePane";
import { createDetailsPanel } from "./use-details-panel";
import FDetailsPanel from "./FDetailsPanel.ce.vue";

const tagName = "ce-details-panel";
if (!customElements.get(tagName)) {
    customElements.define(tagName, defineCustomElement(FDetailsPanel));
}

const { name, exclusive } = defineProps<{
    /**
     * Name of this panel. Used when referencing the panel in useDetailsPanel.
     */
    name: string;
    /**
     * An optional identifier to prevent other panels with the same identifier
     * from being open at the same time.
     */
    exclusive?: string;
}>();

const overlay = useMediaQuery("(width < 640px)");
const panel = createDetailsPanel<T>(name, { exclusive });
const $t = useTranslate();
const visible = computed(() => Boolean(panel.item.value));
const header = "header";
const content = "content";
const footer = "footer";

/** Skärmläsartext för stäng-krysset i header */
const closeText = $t("fkui.details-panel.close", "Stäng");

useResize({
    visible,
    overlay,
});

onUnmounted(() => {
    panel.destroy();
});

function onClose(reason: string = "close"): void {
    if (panel.callback.value) {
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- value must be set when this code is reached */
        const item = panel.item.value!;
        panel.callback.value({ item, reason });
    }
    panel.close();
}
</script>

<template>
    <component :is="tagName" v-if="visible" :data-panel-name="name" @closed="onClose()">
        <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
        <!-- [html-validate-disable-block vue/prefer-slot-shorthand -- native slot] -->

        <!--
                @slot Panel content. Use native slots
                @binding {T} item Object the panel was opened with.
                @binding {(reason?: string) => void} close Callback to close the panel. The optional reason will be passed to the `onClose()` callback.
                @binding {string} header Native slot name for header content
                @binding {string} content Native slot name for main content
                @binding {string} footer Native slot name for footer content
            -->
        <slot name="default" v-bind="{ item: panel.item.value as T, close: onClose, header, footer, content }"></slot>

        <div slot="icon">
            <f-icon name="close">
                <title>{{ closeText }}</title>
            </f-icon>
        </div>
    </component>
</template>
