<script lang="ts">
export default defineComponent({
    name: "FPageExpandablePanel",
});
</script>

<script setup lang="ts">
import { computed, defineComponent, ref, useTemplateRef } from "vue";
import { FIcon } from "../FIcon";
import { useAreaData } from "../FPageLayout/use-area-data";
import { usePageWidth } from "../../composables";

const root = useTemplateRef("root");
const { attachPanel } = useAreaData(root);

const { isDesktop } = usePageWidth({
    onModeChange() {
        isOpen.value = isDesktop.value;
    },
});

const isOpen = ref<boolean>(isDesktop.value);

const expandedClass = computed(() => {
    return isOpen.value ? "expanded" : "collapsed";
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

function onToggle(): void {
    isOpen.value = !isOpen.value;
}
</script>

<template>
    <div ref="root" class="panel__wrapper">
        <div class="panel panel--expandable" :class="[expandedClass, attachClass]">
            <div class="panel__header">
                <div v-if="isOpen" class="panel__title">
                    <slot name="header"></slot>
                </div>
                <div class="panel__collapse">
                    <button type="button" @click="onToggle()">
                        <f-icon name="chevrons-left"> <title>Toggle</title> </f-icon>
                    </button>
                </div>
            </div>
            <div v-if="isOpen" class="panel__content">
                <slot name="default"></slot>
            </div>
            <div v-if="isOpen" class="panel__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
:root {
    --f-page-expandable-panel-width: 24px;
}

.panel__wrapper {
    min-width: 24px;
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

.expanded {
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

.panel__collapse {
    flex: 0 0 auto;
}

.panel__content {
    flex: 1 0 auto;
}

.panel__footer {
    flex: 0 0 auto;
}

.panel__collapse button {
    appearance: none;
    padding: 0;
    line-height: 1;
    background: transparent;
    border: 0;
    cursor: pointer;
}

.expanded.attach-left .panel__collapse svg {
    transform: scaleX(1);
}

.collapsed.attach-left .panel__collapse svg {
    transform: scaleX(-1);
}

.expanded.attach-right .panel__collapse svg {
    transform: scaleX(-1);
}

.collapsed.attach-right .panel__collapse svg {
    transform: scaleX(1);
}
</style>
