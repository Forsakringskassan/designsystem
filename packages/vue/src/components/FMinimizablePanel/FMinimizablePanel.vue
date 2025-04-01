<script setup lang="ts">
import { computed, defineCustomElement, ref } from "vue";
import { useTranslate } from "../../plugins";
import { FIcon } from "../FIcon";
import { useResize } from "../FResizePane";
import MinimizablePanel from "./MinimizablePanel.ce.vue";

const ceTag = "ce-minimizable-panel";
if (!customElements.get(ceTag)) {
    customElements.define(ceTag, defineCustomElement(MinimizablePanel));
}

const { context } = defineProps<{
    /**
     * Screenreader context for toggle button.
     *
     * Default value of `fkui.minimizable-panel.context`.
     */
    context?: string;
}>();

const $t = useTranslate();
const closePrefix = $t("fkui.minimizable-panel.close", "Minimera");
const openPrefix = $t("fkui.minimizable-panel.open", "Återställ");
const isOpen = ref(false);
const overlay = ref(false);
const offset = ref<number | undefined>(undefined);

useResize({
    enabled: computed(() => {
        return Boolean(isOpen.value);
    }),
    overlay: computed(() => {
        return Boolean(overlay.value);
    }),
    offset: computed(() => {
        return Number(offset.value);
    }),
});

const ceContext = computed(() => {
    return context ?? $t("fkui.minimizable-panel.context", "panel");
});

const header = "header";
const content = "content";
const footer = "footer";

function onToggle(e: CustomEvent<[boolean, boolean, number?]>): void {
    isOpen.value = e.detail[0];
    overlay.value = e.detail[1];
    offset.value = e.detail[2];
}
</script>

<template>
    <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
    <!-- [html-validate-disable vue/prefer-slot-shorthand -- native slot] -->
    <ce-minimizable-panel :context="ceContext" :close-prefix :open-prefix @toggle="onToggle">
        <!--
            @slot Content
                @binding {boolean} isOpen panel state
            -->
        <slot name="default" v-bind="{ isOpen, header, footer, content }"></slot>

        <div slot="icon">
            <!--
                @slot Icon
                    @binding {boolean} isOpen panel state
            -->
            <slot name="icon" v-bind="{ isOpen }">
                <f-icon name="chevrons-left" />
            </slot>
        </div>
    </ce-minimizable-panel>
</template>
