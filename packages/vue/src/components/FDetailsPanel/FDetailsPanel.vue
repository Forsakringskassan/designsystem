<script setup lang="ts" generic="T">
import { computed, defineCustomElement, onUnmounted } from "vue";
import { useTranslate } from "../../plugins";
import { FIcon } from "../FIcon";
import { useResize } from "../FResizePane";
import { createDetailsPanel } from "./use-details-panel";
import FDetailsPanel from "./FDetailsPanel.ce.vue";

const tagName = "ce-details-panel";
if (!customElements.get(tagName)) {
    customElements.define(tagName, defineCustomElement(FDetailsPanel));
}

const { name, exclusive, headingTag } = defineProps<{
    /**
     * Name of this panel. Used when referencing the panel in {@link useDetailsPanel}.
     */
    name: string;
    /**
     * An optional identifier to prevent other panels with the same identifier
     * from being open at the same time.
     */
    exclusive?: string;
    /**
     * Header tag.
     */
    headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}>();

const panel = createDetailsPanel<T>(name, { exclusive });
const $t = useTranslate();

useResize({
    visible: computed(() => Boolean(panel.item.value)),
});

onUnmounted(() => {
    panel.destroy();
});

function onClose(reason: string = "close"): void {
    if (panel.callback.value) {
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- value must be set when this code is reached */
        const item = panel.item.value!;
        panel.callback.value({ item, reason });
        panel.close();
    }
}
</script>

<template>
    <component :is="tagName" v-if="panel.item.value" :heading-tag @closed="onClose()">
        <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
        <!-- [html-validate-disable-block vue/prefer-slot-shorthand -- native slot] -->
        <div slot="header">
            <!--
                @slot Panel footer.
                @binding {T} item Object the panel was opened with.
                @binding {(reason?: string) => void} close Callback to close the panel. The optional reason will be passed to the `onClose()` callback.
            -->
            <slot name="header" v-bind="{ item: panel.item.value as T, close: onClose }"></slot>
        </div>
        <div slot="content">
            <!--
                @slot Panel footer.
                @binding {T} item Object the panel was opened with.
                @binding {(reason?: string) => void} close Callback to close the panel. The optional reason will be passed to the `onClose()` callback.
            -->
            <slot name="content" v-bind="{ item: panel.item.value as T, close: onClose }"></slot>
        </div>
        <div slot="footer">
            <!--
                @slot Panel footer.
                @binding {T} item Object the panel was opened with.
                @binding {(reason?: string) => void} close Callback to close the panel. The optional reason will be passed to the `onClose()` callback.
            -->
            <slot name="footer" v-bind="{ item: panel.item.value as T, close: onClose }"></slot>
        </div>
        <div slot="icon">
            <!-- TODO textnyckel -->
            <f-icon name="close">
                <title>{{ $t("fkui.details-panel.close", "Stäng") }}</title>
            </f-icon>
        </div>
    </component>
</template>
