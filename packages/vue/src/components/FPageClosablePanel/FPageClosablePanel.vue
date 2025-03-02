<script lang="ts">
export default defineComponent({
    name: "FPageClosablePanel",
});
</script>

<script setup lang="ts" generic="T">
import { computed, defineComponent, onUnmounted, useTemplateRef } from "vue";
import { FIcon } from "../FIcon";
import { useAreaData } from "../FPageLayout/use-area-data";
import { createClosablePanel } from "./use-panel";

const root = useTemplateRef("root");
const { attachPanel } = useAreaData(root);

const props = defineProps<{
    name: string;
}>();

const panel = createClosablePanel<T>(props.name);

const attachClass = computed(() => {
    switch (attachPanel.value) {
        case "left":
            return "attach-left";
        case "right":
            return "attach-right";
    }
    return undefined;
});

onUnmounted(() => {
    panel.destroy();
});

function onToggle(): void {
    panel.close();
}

function onClose(reason?: string): void {
    if (panel.callback.value) {
        panel.callback.value({ item: panel.item.value!, reason: reason ?? "close" });
        panel.close();
    }
}
</script>

<template>
    <div v-if="panel.item.value" ref="root" class="panel__wrapper">
        <div class="panel panel--closable" :class="[attachClass]">
            <div class="panel__header">
                <div class="panel__title">
                    <slot name="header" v-bind="{ item: panel.item.value, close: onClose }"></slot>
                </div>
                <div class="panel__collapse">
                    <button type="button" @click="onToggle()">
                        <f-icon name="close"> <title>Stäng</title> </f-icon>
                    </button>
                </div>
            </div>
            <div class="panel__content">
                <slot name="default" v-bind="{ item: panel.item.value, close: onClose }"></slot>
            </div>
            <div class="panel__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.panel__wrapper {
    flex-grow: 1;
    display: flex;
}

.panel {
    flex-grow: 1;
    background: lightskyblue;

    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
    min-width: 25ch;

    @media (width < 640px) {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 1;

        &.attach-left {
            left: 0;
        }

        &.attach-right {
            right: 0;
        }
    }
}

.panel__header {
    flex: 0 0 auto;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    .attach-left & {
        flex-direction: row;
    }

    .attach-right & {
        flex-direction: row-reverse;
    }
}

.panel__title {
    flex: 1 0 auto;
    font-weight: 600;
    font-size: 1.2em;
}

.panel__content {
    flex: 1 0 auto;
}

.panel__footer {
    flex: 0 0 auto;
}

button {
    appearance: none;
    padding: 0;
    line-height: 1;
    background: transparent;
    border: 0;
    cursor: pointer;
}
</style>
