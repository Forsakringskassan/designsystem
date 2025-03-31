<script setup lang="ts" generic="T">
import { computed, onUnmounted, useTemplateRef } from "vue";
import { FIcon } from "../FIcon";
import { useAreaData } from "../FPageLayout/use-area-data";
import { useResize } from "../FResizePane";
import { createDetailsPanel } from "./use-details-panel";

const root = useTemplateRef("root");
const { attachPanel } = useAreaData(root);

const { name, exclusive } = defineProps<{
    name: string;
    exclusive?: string;
}>();

const panel = createDetailsPanel<T>(name, { exclusive });

useResize({
    visible: computed(() => Boolean(panel.item.value)),
});

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
    <div v-if="panel.item.value" ref="root" class="panel__wrapper">
        <div class="panel panel--closable" :class="[attachClass]">
            <div class="panel__header">
                <div class="panel__title">
                    <slot name="header" v-bind="{ item: panel.item.value as T, close: onClose }"></slot>
                </div>
                <div class="panel__collapse">
                    <button type="button" @click="onToggle()">
                        <f-icon name="close"> <title>Stäng</title> </f-icon>
                    </button>
                </div>
            </div>
            <div class="panel__content">
                <slot name="default" v-bind="{ item: panel.item.value as T, close: onClose }"></slot>
            </div>
            <div class="panel__footer">
                <slot name="footer" v-bind="{ item: panel.item.value as T, close: onClose }"></slot>
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
